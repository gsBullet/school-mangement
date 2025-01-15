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
    await body('question_title')
        .not()
        .isEmpty()
        .withMessage('the question_title field is required')
        .run(req);
    await body('question_type')
        .not()
        .isEmpty()
        .withMessage('the question_type field is required')
        .run(req);
    await body('question_written')
        .if(body('question_type').equals('written'))
        .not()
        .isEmpty()
        .withMessage('the question_written field is required')
        .run(req);
    await body('question_options')
        .if(body('question_type').equals('quiz'))
        .not()
        .isEmpty()
        .withMessage('the question_options field is required')
        .run(req);

    await body('is_right_option')
        .not()
        .isEmpty()
        .withMessage('the is_right_option field is required')
        .run(req);
    await body('right_answer')
        .not()
        .isEmpty()
        .withMessage('the right_answer field is required')
        .run(req);
    // await body('feedback')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the feedback field is required')
    //     .run(req);

    let result = await validationResult(req);

    return result;
}

async function update(
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
    let model = new models.AssetAuditItemsModel();

    let inputs: Partial<InferCreationAttributes<typeof model>> = {
        question_title: body.question_title,
        question_type: body.question_type,
    };

    // Conditionally add properties based on question_type
    if (body.question_type === 'written') {
        inputs.question_written = body.question_written;
    }

    if (body.question_type === 'quiz') {
        inputs.question_options = body.question_options;
        inputs.is_right_option = body.is_right_option;
    }

    // Add any optional fields, ensuring they're only included if defined
    if (body.right_answer !== undefined) {
        inputs.right_answer = body.right_answer;
    }

    /** store data into database */
    try {
        let data = await models.AssetAuditItemsModel.findByPk(body.id);
        if (data) {
            data.update(inputs);
            return response(200, 'data updated', data);
        } else {
            throw new custom_error('Forbidden', 403, 'operation not possible');
        }
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        if (error instanceof custom_error) {
            error.uid = uid;
        } else {
            throw new custom_error('server error', 500, error.message, uid);
        }
        throw error;
    }
}

export default update;
