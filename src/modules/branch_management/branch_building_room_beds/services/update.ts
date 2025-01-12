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
    await body('id')
        .not()
        .isEmpty()
        .withMessage('the id field is required')
        .run(req);

    await body('branch_id')
        .not()
        .isEmpty()
        .withMessage('the branch_id field is required')
        .run(req);

    await body('branch_building_room_id')
        .not()
        .isEmpty()
        .withMessage('the branch_building_room_id field is required')
        .run(req);

    await body('branch_building_id')
        .not()
        .isEmpty()
        .withMessage('the branch_building_id field is required')
        .run(req);

    await body('seat_no')
        .not()
        .isEmpty()
        .withMessage('the seat_no field is required')
        .run(req);

    await body('details')
        .not()
        .isEmpty()
        .withMessage('the details field is required')
        .run(req);

    await body('image')
        .not()
        .isEmpty()
        .withMessage('the image field is required')
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
    let model = new models.BranchBuildingRoomBedsModel();

    let inputs: InferCreationAttributes<typeof model> = {
        branch_id: body.branch_id,
        branch_building_room_id: body.branch_building_room_id,
        branch_building_id: body.branch_building_id,
        seat_no: body.seat_no,
        details: body.details,
        image: body.image,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.BranchBuildingRoomBedsModel.findByPk(body.id);
        if (data) {
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
