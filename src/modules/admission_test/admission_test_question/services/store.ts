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
    await body('admission_test_id')
        .not()
        .isEmpty()
        .withMessage('the admission_test_id field is required')
        .run(req);
    await body('branch_id')
        .not()
        .isEmpty()
        .withMessage('the branch_id field is required')
        .run(req);
    await body('class')
        .not()
        .isEmpty()
        .withMessage('the class field is required')
        .run(req);
    await body('question_title')
        .not()
        .isEmpty()
        .withMessage('the question_title field is required')
        .run(req);
    await body('question_type')
        .notEmpty()
        .withMessage('The question_type field is required')
        .isIn(['quiz', 'written'])
        .withMessage('The question_type must be either "quiz" or "written"')
        .run(req);

    await body('options1')
        .if(body('question_type').equals('quiz'))
        .notEmpty()
        .withMessage('The options1 field is required')
        .run(req);

    await body('options2')
        .if(body('question_type').equals('quiz'))
        .notEmpty()
        .withMessage('The options2 field is required')
        .run(req);

    await body('options3')
        .if(body('question_type').equals('quiz'))
        .notEmpty()
        .withMessage('The options3 field is required')
        .run(req);

    await body('options4')
        .if(body('question_type').equals('quiz'))
        .notEmpty()
        .withMessage('The options4 field is required')
        .run(req);
    await body('is_right_option_1')
        .if(body('question_type').equals('quiz'))
        .isBoolean()
        .withMessage('The is_right_option_1 field must be a boolean (0 or 1)')
        .run(req);

    await body('is_right_option_2')
        .if(body('question_type').equals('quiz'))
        .isBoolean()
        .withMessage('The is_right_option_2 field must be a boolean (0 or 1)')
        .run(req);

    await body('is_right_option_3')
        .if(body('question_type').equals('quiz'))
        .isBoolean()
        .withMessage('The is_right_option_3 field must be a boolean (0 or 1)')
        .run(req);

    await body('is_right_option_4')
        .if(body('question_type').equals('quiz'))
        .isBoolean()
        .withMessage('The is_right_option_4 field must be a boolean (0 or 1)')
        .run(req);

    await body('right_answer')
        .if(body('question_type').equals('written')) // Check only for "written" type
        .notEmpty() // Ensures the field is required for "written"
        .withMessage('The right_answer field is required for written questions')
        .isString()
        .withMessage('The right_answer field must be a string')
        .run(req);

    // await body('feedback')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the feedback field is required')
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

    let inputs: Partial<InferCreationAttributes<typeof data>> = {
        question_title: body.question_title,
        question_type: body.question_type,
        admission_test_id: body.admission_test_id,
        branch_id: body.branch_id,
        class: body.class,
    };

    // Conditionally add properties based on question_type
    if (body.question_type === 'written') {
        inputs.right_answer = body.right_answer;
    }

    if (body.question_type === 'quiz') {
        inputs.options1 = body.options1;
        inputs.options2 = body.options2;
        inputs.options3 = body.options3;
        inputs.options4 = body.options4;
        inputs.is_right_option_1 = body.is_right_option_1;
        inputs.is_right_option_2 = body.is_right_option_2;
        inputs.is_right_option_3 = body.is_right_option_3;
        inputs.is_right_option_4 = body.is_right_option_4;
        inputs.right_answer = body.right_answer;
    }

    // Uncomment if feedback is needed and exists in `body`
    // if (body.feedback !== undefined) {
    //     inputs.feedback = body.feedback;
    // }

    /** store data into database */
    try {
        await data.update(inputs);
        return response(200, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default store;
