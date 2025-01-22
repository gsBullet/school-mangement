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
import fs from 'fs';
import path from 'path';
// import moment from 'moment';

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
    //     .isIn(['quiz', 'file_upload'])
    //     .withMessage('The question_type must be either "quiz" or "file_upload"')
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
    //     .if(body('question_type').equals('file_upload')) // Check only for "file_upload" type
    //     .notEmpty() // Ensures the field is required for "file_upload"
    //     .withMessage('The right_answer field is required for file_upload questions')
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

async function file_upload(
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
    let file_upload = '';

    console.log('body', body);
    if (body['file_upload']?.value?.ext) {
        file_upload =
            'uploads/written/' +
            moment().format('YYYYMMDDHHmmss') +
            body['file_upload']?.value?.name;
        await (fastify_instance as any).upload(
            body['file_upload']?.value,
            file_upload,
        );
    }

    try {
        return response(200, 'Data created successfully', {
            file: { file_upload },
        });
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('Server error', 500, error.message, uid);
    }
}

export default file_upload;

// if (body['file_upload']?.value?.ext) {
//     // Define the directory path
//     const uploadDir = path.join(
//         __dirname,
//         '../../../public/uploads/written/',
//     );

//     // Ensure the directory exists
//     if (!fs.existsSync(uploadDir)) {
//         fs.mkdirSync(uploadDir, { recursive: true });
//     }

//     // Generate the file name
//     file_upload =
//         'uploads/written/' +
//         moment().format('YYYYMMDDHHmmss') +
//         body['file_upload']?.value?.ext;

//     // Upload the file
//     await (fastify_instance as any).upload(
//         body['file_upload']?.value,
//         path.join(
//             uploadDir,
//             moment().format('YYYYMMDDHHmmss') +
//                 body['file_upload']?.value?.ext,
//         ),
//     );
// }
