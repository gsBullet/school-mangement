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
    // await body('account_category_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the account_category_id field is required')
    //     .run(req);

    // await body('account_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the account_id field is required')
    //     .run(req);

    // await body('account_period_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the account_period_id field is required')
    //     .run(req);

    // await body('money_receipt_book_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the money_receipt_book_id field is required')
    //     .run(req);

    // await body('amount')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the amount field is required')
    //     .run(req);

    // await body('type')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the type field is required')
    //     .run(req);

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
    let data = new models.AccountLogsModel();
    let afc_model = new models.AccountFeeCollectionsModel();

    let inputs: InferCreationAttributes<typeof data> = {
        branch_id: 1,
        account_category_id: body.category_id || 1,
        account_id: body.account_id || 1,
        account_period_id: body.period_id || 1,
        money_receipt_book_id: body.mrb_id || 1,
        receipt_no: body.receipt_no,
        amount: body.amount,
        date: body.date,
        type: body.type,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data2 = await models.UserStudentInformationsModel.findOne({
            where: {
                user_student_id: body.student_id,
            },
        });
        console.log('data sclass', data2?.s_class);

        let s_class = data2?.s_class;

        (await data.update(inputs)).save();
        if (data) {
            let afc_inputs: InferCreationAttributes<typeof afc_model> = {
                branch_id: body.branch_id,
                branch_student_id: body.student_id,
                branch_student_class_id: s_class || 1,
                date: body.date,
                amount: body.amount,
                account_category_id: body.category_id || 1,
                account_log_id: data.id || 1,
            };
            (await afc_model.update(afc_inputs)).save();
        }

        return response(200, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}
export default store;
