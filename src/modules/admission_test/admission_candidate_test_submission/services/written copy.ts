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
    let body = req.body as any;
    let data = new models.AdmissionTestFileSubmissionModel();

    let inputs: Partial<InferCreationAttributes<typeof data>> = {
        branch_id: body.branch_id,
        student_id: body.student_id,
        class: body.class,
    };
    // let result = await Promise.all(
    //     body?.user_answer.map(async (element: any) => {
    //         try {
    //             // Fetch the specific question
    //             let question = await models.AdmissionTestQuestionsModel.findOne(
    //                 {
    //                     where: {
    //                         id: element?.question_id,
    //                     },
    //                     attributes: [
    //                         'id',
    //                         'admission_test_id',
    //                         'question_title',
    //                         'question_type',
    //                     ],
    //                 },
    //             );
    //             // console.log(question);

    //             // If no matching question is found
    //             if (!question) {
    //                 return {
    //                     question_id: element?.question_id,
    //                     message: 'Question not found',
    //                 };
    //             }
    //             const uploadedFiles: string[] = [];

    //             inputs.question_title = question.question_title;
    //             inputs.question_type = question.question_type;
    //             // inputs.user_answer_file = element?.files.map(
    //             //     (file: any) => file.url,
    //             // );

    //             for (const file of element.files) {
    //                 if (file?.url) {
    //                     const fileExtension = file.fileExtension || ''; // Ensure file extension exists
    //                     const uniqueFileName =
    //                         'uploads/written/' +
    //                         moment().format('YYYYMMDDHHmmss') +
    //                         '.' + // Add a random string for uniqueness
    //                         fileExtension;

    //                     console.log(uniqueFileName, 'file');

    //                     // Upload the file using the Fastify instance
    //                     await (fastify_instance as any).upload(
    //                         file,
    //                         uniqueFileName,
    //                     );

    //                     // Add the uploaded file path to the array
    //                     uploadedFiles.push(uniqueFileName);
    //                 }
    //             }

    //             // Assign all uploaded file paths to inputs.user_answer
    //             // inputs.user_answer = uploadedFiles;

    //             return inputs;

    //             // Use create to insert a new record
    //             // await data.update(inputs);

    //             // return response(200, 'success', inputs);
    //         } catch (error) {
    //             // Log the error for debugging
    //             console.error(
    //                 'Error processing question:',
    //                 element?.question_id,
    //                 error,
    //             );

    //             return {
    //                 question_id: element?.question_id,
    //                 message: 'Error processing question',
    //                 error: error,
    //             };
    //         }
    //     }),
    // );

    try {
        return response(200, 'Data created successfully', body);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('Server error', 500, error.message, uid);
    }
}

export default written;

// const uploadedFiles: string[] = []; // Array to store file paths

//     for (const file of body.user_answer.files) {
//         if (file?.url) {
//             const fileExtension = file.fileExtension || ''; // Ensure file extension exists
//             const uniqueFileName =
//                 'uploads/written/' +
//                 moment().format('YYYYMMDDHHmmss') +
//                 Math.random().toString(36).substring(2, 7) + // Add a random string for uniqueness
//                 fileExtension;

//             console.log(uniqueFileName, 'file');

//             // Upload the file using the Fastify instance
//             await (fastify_instance as any).upload(file, uniqueFileName);

//             // Add the uploaded file path to the array
//             uploadedFiles.push(uniqueFileName);
//         }
//     }

//     // Assign all uploaded file paths to inputs.user_answer
//     inputs.user_answer = uploadedFiles;
