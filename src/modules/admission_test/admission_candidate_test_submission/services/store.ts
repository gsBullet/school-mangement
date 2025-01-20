import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { body, validationResult } from 'express-validator';
import {
    anyObject,
    responseObject,
    Request,
} from '../../../common_types/object';
import response from '../helpers/response';
import { InferCreationAttributes } from 'sequelize';
import custom_error from '../helpers/custom_error';
import error_trace from '../helpers/error_trace';

async function validate(req: Request) {
    // await body('question_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the question_id field is required')
    //     .run(req);
    // await body('question_title')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the question_title field is required')
    //     .run(req);
    // await body('question_type')
    //     .notEmpty()
    //     .withMessage('The question_type field is required')
    //     .isIn(['quiz', 'written'])
    //     .withMessage('The question_type must be either "quiz" or "written"')
    //     .run(req);

    // await body('options1')
    //     .if(body('question_type').equals('quiz'))
    //     .notEmpty()
    //     .withMessage('The options1 field is required')
    //     .run(req);

    // await body('options2')
    //     .if(body('question_type').equals('quiz'))
    //     .notEmpty()
    //     .withMessage('The options2 field is required')
    //     .run(req);

    // await body('options3')
    //     .if(body('question_type').equals('quiz'))
    //     .notEmpty()
    //     .withMessage('The options3 field is required')
    //     .run(req);

    // await body('options4')
    //     .if(body('question_type').equals('quiz'))
    //     .notEmpty()
    //     .withMessage('The options4 field is required')
    //     .run(req);
    // await body('is_right_option_1')
    //     .if(body('question_type').equals('quiz'))
    //     .isBoolean()
    //     .withMessage('The is_right_option_1 field must be a boolean (0 or 1)')
    //     .run(req);

    // await body('is_right_option_2')
    //     .if(body('question_type').equals('quiz'))
    //     .isBoolean()
    //     .withMessage('The is_right_option_2 field must be a boolean (0 or 1)')
    //     .run(req);

    // await body('is_right_option_3')
    //     .if(body('question_type').equals('quiz'))
    //     .isBoolean()
    //     .withMessage('The is_right_option_3 field must be a boolean (0 or 1)')
    //     .run(req);

    // await body('is_right_option_4')
    //     .if(body('question_type').equals('quiz'))
    //     .isBoolean()
    //     .withMessage('The is_right_option_4 field must be a boolean (0 or 1)')
    //     .run(req);

    // await body('right_answer')
    //     .if(body('question_type').equals('written')) // Check only for "written" type
    //     .notEmpty() // Ensures the field is required for "written"
    //     .withMessage('The right_answer field is required for written questions')
    //     .isString()
    //     .withMessage('The right_answer field must be a string')
    //     .run(req);

    // await body('user_answer')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the user_answer field is required')
    //     .run(req);

    // await body('marks')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the marks field is required')
    //     .run(req);

    // await body('is_pass')
    //     .not()
    //     .notEmpty()
    //     .withMessage('the is_pass field is required')
    //     .run(req);
    // await body('given_admission_date')
    //     .not()
    //     .notEmpty()
    //     .withMessage('the given_admission_date field is required')
    //     .run(req);
    // await body('comment')
    //     .not()
    //     .notEmpty()
    //     .withMessage('the comment field is required')
    //     .run(req);

    let result = await validationResult(req);

    return result;
}

async function store(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    /** validation */
    let validate_result = await validate(req as Request);
    if (!validate_result.isEmpty()) {
        return response(422, 'validation error', validate_result.array());
    }

    /** initializations */
    let models = await db();
    let body = req.body as anyObject;
    let data = new models.AssetAuditItemsModel();
    console.log(body);

    let result = await Promise.all(
        body?.user_answer.map(async (element: any) => {
            try {
                // Fetch the specific question
                let question = await models.AdmissionTestQuestionsModel.findOne(
                    {
                        where: {
                            id: element?.question_id,
                            branch_id: body.branch_id,
                            class: body.class,
                        },
                    },
                );

                // If no matching question is found
                if (!question) {
                    return {
                        question_id: element?.question_id,
                        message: 'Question not found',
                    };
                }

                // Prepare the input object
                let inputs: Partial<InferCreationAttributes<typeof data>> = {
                    branch_id: body.branch_id,
                    student_id: body.student_id,
                    class: body.class,
                    question_id: question.id,
                    question_title: question.question_title,
                    question_type: question.question_type,
                };

                if (question.question_type === 'quiz') {
                    // Add options and correctness flags
                    inputs.options1 = question.options1;
                    inputs.options2 = question.options2;
                    inputs.options3 = question.options3;
                    inputs.options4 = question.options4;
                    inputs.is_right_option_1 = question.is_right_option_1;
                    inputs.is_right_option_2 = question.is_right_option_2;
                    inputs.is_right_option_3 = question.is_right_option_3;
                    inputs.is_right_option_4 = question.is_right_option_4;

                    // Convert user_answer to string (if it's an array) for database compatibility
                    inputs.user_answer = Array.isArray(element?.user_answer)
                        ? JSON.stringify(element?.user_answer)
                        : String(element?.user_answer);

                    // Construct correct answers array
                    let correctAnswers: number[] = [];
                    if (inputs.is_right_option_1) correctAnswers.push(1);
                    if (inputs.is_right_option_2) correctAnswers.push(2);
                    if (inputs.is_right_option_3) correctAnswers.push(3);
                    if (inputs.is_right_option_4) correctAnswers.push(4);

                    // Check if the user answer matches the correct answer(s)
                    let isCorrect = false;

                    if (Array.isArray(element?.user_answer)) {
                        // Handle multiple-option answers
                        isCorrect =
                            element.user_answer.length ===
                                correctAnswers.length &&
                            element.user_answer.every((answer: any) =>
                                correctAnswers.includes(Number(answer)),
                            );
                    } else {
                        // Handle single-option answers
                        isCorrect = correctAnswers.includes(
                            Number(element?.user_answer),
                        );
                    }

                    // Assign marks and passing status
                    inputs.marks = isCorrect ? question.mark : 0;
                    inputs.is_pass = isCorrect;
                    inputs.right_answer = question.right_answer;
                    inputs.given_admission_date = body.given_admission_date;
                    inputs.comment = body.comment;
                }

                // Use create to insert a new record
                await data.update(inputs);

                return {
                    question_id: question.id,
                    status: 'success',
                    is_correct: inputs.is_pass,
                };
            } catch (error) {
                // Log the error for debugging
                console.error(
                    'Error processing question:',
                    element?.question_id,
                    error,
                );

                return {
                    question_id: element?.question_id,
                    message: 'Error processing question',
                    error: error,
                };
            }
        }),
    );

    try {
        return response(200, 'Data created successfully', result);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('Server error', 500, error.message, uid);
    }
}

export default store;
