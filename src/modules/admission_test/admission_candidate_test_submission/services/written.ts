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
import moment from 'moment/moment';

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

async function written(
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
    let data = new models.AdmissionTestFileSubmissionModel();
    // console.log('body', body);

    const bodyArray = Object.values(body);

    const uploadedFiles: string[] = [];
    for (const fileArray of bodyArray) {
        // Check if fileArray is an array
        if (Array.isArray(fileArray)) {
            for (const file of fileArray) {
                if (file?.value?.ext) {
                    // Generate a unique file name
                    const user_file =
                        'uploads/written/' +
                        moment().format('YYYYMMDDHHmmss') +
                        file?.value?.name;

                    // Upload the file
                    await (fastify_instance as any).upload(
                        file?.value,
                        user_file,
                    );

                    // Fetch question details
                    const question =
                        await models.AdmissionTestQuestionsModel.findOne({
                            where: {
                                id: Number(file?.fieldname),
                            },
                            attributes: [
                                'id',
                                'admission_test_id',
                                'question_title',
                                'question_type',
                                'branch_id',
                                'class',
                                'mark',
                            ],
                        });

                    if (question) {
                        // Save the new record
                        const saveData =
                            await models.AdmissionTestFileSubmissionModel.create(
                                {
                                    branch_id: question.branch_id,
                                    class: question.class,
                                    student_id: body.student_id.value,
                                    question_id: question.id,
                                    question_title: question.question_title,
                                    question_type: question.question_type,
                                    question_marks: question.mark,
                                    answer_marks: 0,
                                    given_admission_date:
                                        new Date().toISOString(),
                                    user_answer_file: user_file,
                                },
                            );

                        saveData.save();
                        // No need for saveData.save(), create() already saves the data
                        uploadedFiles.push(user_file);
                    } else {
                        throw new custom_error(
                            'Server error',
                            500,
                            `Question not found for fieldname ${file?.fieldname}`,
                        );
                    }
                }
            }
        } else {
            if (fileArray?.value?.ext) {
                // Generate a unique file name
                const user_file =
                    'uploads/written/' +
                    moment().format('YYYYMMDDHHmmss') +
                    fileArray?.value?.name;

                // Upload the file
                await (fastify_instance as any).upload(
                    fileArray?.value,
                    user_file,
                );

                // Fetch question details
                const question =
                    await models.AdmissionTestQuestionsModel.findOne({
                        where: {
                            id: Number(fileArray?.fieldname),
                        },
                        attributes: [
                            'id',
                            'admission_test_id',
                            'question_title',
                            'question_type',
                            'branch_id',
                            'class',
                            'mark',
                        ],
                    });

                if (question) {
                    // Save the new record
                    const saveData =
                        await models.AdmissionTestFileSubmissionModel.create({
                            branch_id: question.branch_id,
                            class: question.class,
                            student_id: body.student_id.value,
                            question_id: question.id,
                            question_title: question.question_title,
                            question_type: question.question_type,
                            question_marks: question.mark,
                            answer_marks: 0,
                            given_admission_date: new Date().toISOString(),
                            user_answer_file: user_file,
                        });
                    saveData.save();
                    // No need for saveData.save(), create() already saves the data
                    uploadedFiles.push(user_file);
                } else {
                    throw new custom_error(
                        'Server error',
                        500,
                        `Question not found for fieldname ${fileArray?.fieldname}`,
                    );
                }
            }
        }
    }

    // console.log('uploadedFiles', uploadedFiles);

    try {
        return response(200, 'Data created successfully', {
            file: uploadedFiles,
        });
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('Server error', 500, error.message, uid);
    }
}

export default written;
