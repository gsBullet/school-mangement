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
    await body('name')
        .not()
        .isEmpty()
        .withMessage('the name field is required')
        .run(req);

    await body('driver_number')
        .not()
        .isEmpty()
        .withMessage('the driver_number field is required')
        .run(req);

    await body('assistant_number_1')
        .not()
        .isEmpty()
        .withMessage('the assistant_number_1 field is required')
        .run(req);

    await body('assistant_number_2')
        .not()
        .isEmpty()
        .withMessage('the assistant_number_2 field is required')
        .run(req);

    await body('present_address')
        .not()
        .isEmpty()
        .withMessage('the present_address field is required')
        .run(req);

    // await body('licence')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the licence field is required')
    //     .run(req);

    await body('permanent_address')
        .not()
        .isEmpty()
        .withMessage('the permanent_address field is required')
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
    let model = new models.BranchTransportDriversModel();

    let user = (req as any).user;
    let auth_user = await models.BranchAdminsModel.findOne({
        where: {
            user_admin_id: (req as any).user?.id || null,
        },
    });
    let licence = '';

    if (body['licence']?.ext) {
        licence =
            'uploads/vehicleDrivers' +
            moment().format('YYYYMMDDHHmmss') +
            body['licence'].name;
        await (fastify_instance as any).upload(body['licence'], licence);
    }

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.BranchTransportDriversModel.findByPk(body.id);
        if (data) {
            let inputs: InferCreationAttributes<typeof model> = {
                branch_id: auth_user?.branch_id || 1,
                name: body.name,
                driver_number: body.driver_number,
                assistant_number_1: body.assistant_number_1,
                assistant_number_2: body.assistant_number_2,
                present_address: body.present_address,
                driver_licence: licence || data.driver_licence,
                licence_number: body.licence_number,
                permanent_address: body.permanent_address,
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
