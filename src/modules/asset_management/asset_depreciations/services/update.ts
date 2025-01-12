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
    await body('branch_id')
        .not()
        .isEmpty()
        .withMessage('the branch_id field is required')
        .run(req);
    await body('asset_id')
        .not()
        .isEmpty()
        .withMessage('the asset_id field is required')
        .run(req);
    await body('usefull_life_months')
        .not()
        .isEmpty()
        .withMessage('the usefull_life_months field is required')
        .run(req);
    await body('current_value')
        .not()
        .isEmpty()
        .withMessage('the current_value field is required')
        .run(req);
    await body('last_depreciation_date')
        .not()
        .isEmpty()
        .withMessage('the last_depreciation_date field is required')
        .run(req);
    await body('after_depreciation_value')
        .not()
        .isEmpty()
        .withMessage('the after_depreciation_value field is required')
        .run(req);
    await body('depreciation_interval')
        .not()
        .isEmpty()
        .withMessage('the depreciation_interval field is required')
        .run(req);
    await body('depreciation_amount')
        .not()
        .isEmpty()
        .withMessage('the depreciation_amount field is required')
        .run(req);
    await body('depreciation_unit')
        .not()
        .isEmpty()
        .withMessage('the depreciation_unit field is required')
        .run(req);
    await body('approximate_lasting_duration')
        .not()
        .isEmpty()
        .withMessage('the approximate_lasting_duration field is required')
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
    let model = new models.AssetDepreciationsModel();

    let inputs: InferCreationAttributes<typeof model> = {
        branch_id: body.branch_id,
        asset_id: body.asset_id,
        useful_life_months: body.useful_life_months,
        current_value: body.current_value,
        last_depreciation_date: body.last_depreciation_date,
        after_depreciation_value: body.after_depreciation_value,
        depreciation_interval: body.depreciation_interval,
        depreciation_amount: body.depreciation_amount,
        depreciation_unit: body.depreciation_unit,
        approximate_lasting_duration: body.approximate_lasting_duration,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.AssetDepreciationsModel.findByPk(body.id);
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
