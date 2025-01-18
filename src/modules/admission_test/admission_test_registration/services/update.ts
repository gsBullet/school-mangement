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
    await body('full_name')
        .not()
        .isEmpty()
        .withMessage('the full_name field is required')
        .run(req);
    await body('branch_id')
        .not()
        .isEmpty()
        .withMessage('the branch_id field is required')
        .run(req);
    await body('registration_date')
        .not()
        .isEmpty()
        .withMessage('the registration_date field is required')
        .run(req);
    await body('class')
        .not()
        .isEmpty()
        .withMessage('the class field is required')
        .run(req);
    await body('section')
        .not()
        .isEmpty()
        .withMessage('the section field is required')
        .run(req);
    await body('email')
        .not()
        .isEmpty()
        .withMessage('the email field is required')
        .run(req);
    await body('password')
        .not()
        .isEmpty()
        .withMessage('the password field is required')
        .run(req);

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

    let inputs: InferCreationAttributes<typeof model> = {
        full_name: body.full_name,
        branch_id: body.branch_id,
        registration_date: body.registration_date,
        email: body.email,
        password: body.password,

        class: body.class,
        section: body.section,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

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
