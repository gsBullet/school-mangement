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

    await body('account_category_id')
        .not()
        .isEmpty()
        .withMessage('the account_category_id field is required')
        .run(req);

    await body('account_id')
        .not()
        .isEmpty()
        .withMessage('the account_id field is required')
        .run(req);

    await body('account_period_id')
        .not()
        .isEmpty()
        .withMessage('the account_period_id field is required')
        .run(req);

    await body('money_receipt_book_id')
        .not()
        .isEmpty()
        .withMessage('the money_receipt_book_id field is required')
        .run(req);

    await body('amount')
        .not()
        .isEmpty()
        .withMessage('the amount field is required')
        .run(req);

    await body('type')
        .not()
        .isEmpty()
        .withMessage('the type field is required')
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
    let model = new models.AccountLogsModel();

    let inputs: InferCreationAttributes<typeof model> = {
        branch_id: body.branch_id,
        account_category_id: body.account_category_id,
        account_id: body.account_log_id,
        account_period_id: body.account_period_id,
        money_receipt_book_id: body.money_receipt_book_id,
        receipt_no: body.receipt_no,
        amount: body.amount,
        type: body.type,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.AccountLogsModel.findByPk(body.id);
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
