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

    await body('branch_staff_id')
        .not()
        .isEmpty()
        .withMessage('the branch_staff_id field is required')
        .run(req);

    await body('start_time')
        .not()
        .isEmpty()
        .withMessage('the start_time field is required')
        .run(req);

    await body('end_time')
        .not()
        .isEmpty()
        .withMessage('the end_time field is required')
        .run(req);

    await body('date')
        .not()
        .isEmpty()
        .withMessage('the date field is required')
        .run(req);

    await body('attendance_status')
        .not()
        .isEmpty()
        .withMessage('the attendance_status field is required')
        .run(req);

    await body('overtime_hours')
        .not()
        .isEmpty()
        .withMessage('the overtime_hours field is required')
        .run(req);

    await body('fine_amount')
        .not()
        .isEmpty()
        .withMessage('the fine_amount field is required')
        .run(req);

    await body('reward_amount')
        .not()
        .isEmpty()
        .withMessage('the reward_amount field is required')
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
    let model = new models.StaffAttendancesModel();

    let inputs: InferCreationAttributes<typeof model> = {
        branch_id: body.branch_id,
        branch_staff_id: body.branch_staff_id,
        start_time: body.start_time,
        end_time: body.end_time,
        date: body.date,
        attendance_status: body.attendance_status,
        overtime_hours: body.overtime_hours,
        fine_amount: body.fine_amount,
        reward_amount: body.reward_amount,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.StaffAttendancesModel.findByPk(body.id);
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
