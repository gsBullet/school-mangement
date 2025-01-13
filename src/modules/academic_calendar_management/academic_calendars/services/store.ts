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
    await body('event_type_id')
        .not()
        .isEmpty()
        .withMessage('the event_type_id field is required')
        .run(req);
    await body('event_name')
        .not()
        .isEmpty()
        .withMessage('the event_name field is required')
        .run(req);
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
    await body('days')
        .not()
        .isEmpty()
        .withMessage('the days field is required')
        .run(req);
    await body('description')
        .not()
        .isEmpty()
        .withMessage('the description field is required')
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
    let body = req.body as any;
    let data = new models.AcademicCalendarsModel();

    let user = (req as any).user;
    let auth_user = await models.BranchAdminsModel.findOne({
        where: {
            user_admin_id: (req as any).user?.id || null,
        },
    });

    let inputs: InferCreationAttributes<typeof data> = {
        branch_id: auth_user?.branch_id || body.branch_id || 1,
        event_type_id: body.event_type_id,
        event_name: body.event_name,
        start_date: body.start_date,
        end_date: body.end_date,
        days: body.days,
        description: body.description,
        creator: user?.id || null,
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
