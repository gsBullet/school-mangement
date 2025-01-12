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
    await body('start_date')
        .not()
        .isEmpty()
        .withMessage('the start_date field is required')
        .run(req);

    await body('end_date')
        .not()
        .isEmpty()
        .withMessage('the end_date field is required')
        .run(req);

    await body('attachments')
        .not()
        .isEmpty()
        .withMessage('the attachments field is required')
        .run(req);

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
    let data = new models.LeaveApplicationsModel();
    let image_path = '';

    if (body['attachments']?.ext) {
        image_path =
            'uploads/students/leave' +
            moment().format('YYYYMMDDHHmmss') +
            body['attachments'].name;
        await (fastify_instance as any).upload(body['attachments'], image_path);
    }
    // console.log('leave body', body);

    let inputs: InferCreationAttributes<typeof data> = {
        branch_student_id: 1,
        start_date: body.start_date,
        end_date: body.end_date,
        attachments: image_path,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        (await data.update(inputs)).save();
        return response(200, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default store;
