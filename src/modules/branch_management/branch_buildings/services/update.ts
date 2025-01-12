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
    await body('id')
        .not()
        .isEmpty()
        .withMessage('the id field is required')
        .run(req);

    await body('building_code')
        .not()
        .isEmpty()
        .withMessage('the building_code field is required')
        .run(req);

    await body('building_name')
        .not()
        .isEmpty()
        .withMessage('the building_name field is required')
        .run(req);

    await body('description')
        .not()
        .isEmpty()
        .withMessage('the description field is required')
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
    let model = new models.BrancheBuildingsModel();

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

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.BrancheBuildingsModel.findByPk(body.id);
        if (data) {
            let inputs: InferCreationAttributes<typeof model> = {
                branch_id: auth_user?.branch_id || 1,
                building_code: body.building_code,
                building_name: body.building_name,
                attachment: attachment || data.attachment,
                photo: photo || data.photo,
                description: body.description,
                creator: user?.id || null,
            };
            data.update(inputs);
            await data.save();
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
