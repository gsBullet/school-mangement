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
    await body('room_code')
        .not()
        .isEmpty()
        .withMessage('the room_code field is required')
        .run(req);

    await body('room_name')
        .not()
        .isEmpty()
        .withMessage('the room_name field is required')
        .run(req);

    await body('description')
        .not()
        .isEmpty()
        .withMessage('the description field is required')
        .run(req);

    await body('total_seat')
        .not()
        .isEmpty()
        .withMessage('the total_seat field is required')
        .run(req);

    await body('building_id')
        .not()
        .isEmpty()
        .withMessage('the building_id field is required')
        .run(req);

    await body('total_student')
        .not()
        .isEmpty()
        .withMessage('the total_student field is required')
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
    let data = new models.BrancheBuildingRoomsModel();

    let user = (req as any).user;
    let auth_user = await models.BranchAdminsModel.findOne({
        where: {
            user_admin_id: (req as any).user?.id || null,
        },
    });

    let attachment = '';
    let photo = '';

    if (body['attachment']?.ext) {
        attachment =
            'uploads/building' +
            moment().format('YYYYMMDDHHmmss') +
            body['attachment'].name;
        await (fastify_instance as any).upload(body['attachment'], attachment);
    }

    if (body['photo']?.ext) {
        photo =
            'uploads/building' +
            moment().format('YYYYMMDDHHmmss') +
            body['photo'].name;
        await (fastify_instance as any).upload(body['photo'], photo);
    }

    let inputs: InferCreationAttributes<typeof data> = {
        branch_id: auth_user?.branch_id || 1,
        room_code: body.room_code,
        room_name: body.room_name,
        attachment: attachment,
        photo: photo,
        description: body.description,
        total_seat: body.total_seat,
        building_id: body.building_id,
        total_student: body.total_student,
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
