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
import moment from 'moment';

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

async function store_written_mark(
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

    let data = new models.AdmissionCandidateSubmissionModel();

    let replay = body.question || {};
    // let written_file = '';
    console.log(body);

    try {
        // Fetch the specific question
        let question = await models.AdmissionTestQuestionsModel.findOne({
            where: {
                id: replay?.question_id,
                branch_id: replay.branch_id,
                class: replay.class,
            },
        });
        let student_written_data =
            await models.AdmissionTestFileSubmissionModel.findOne({
                where: {
                    branch_id: replay.branch_id,
                    student_id: replay.student_id,
                    class: replay.class,
                    question_id: replay?.question_id,
                },
            });

        // If no matching question is found
        if (!question) {
            return response(200, 'question not found', replay);
        }

        // Prepare the input object
        let inputs: Partial<InferCreationAttributes<typeof data>> = {
            branch_id: replay.branch_id,
            student_id: replay.student_id,
            class: replay.class,
            question_id: question.id,

            question_title: question.question_title,
            question_type: question.question_type,
            // written_mark: question.mark,
        };

        if (question.question_type === 'written') {
            // Add the written answer
            inputs.user_answer = '';

            // Check if the user answer matches the correct answer
            let isCorrect = replay?.user_answer_files.length ? true : false;

            // Assign marks and passing status
            inputs.written_mark = Number(body?.userMark);
            inputs.is_pass = isCorrect;
            inputs.right_answer = '';
            inputs.given_admission_date =
                student_written_data?.given_admission_date;
            inputs.comment = replay.comment;
        }

        // Use create to insert a new record
        await data.update(inputs);

        return response(200, 'Data created successfully', inputs);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('Server error', 500, error.message, uid);
    }

    // try {
    //     return response(200, 'Data created successfully', result);
    // } catch (error: any) {
    //     let uid = await error_trace(models, error, req.url, req.body);
    //     throw new custom_error('Server error', 500, error.message, uid);
    // }
}

export default store_written_mark;
