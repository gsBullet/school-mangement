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
    await body('receipt_no')
        .not()
        .isEmpty()
        .withMessage('the receipt_no field is required')
        .run(req);

    await body('amount')
        .not()
        .isEmpty()
        .withMessage('the amount field is required')
        .run(req);

    await body('date')
        .not()
        .isEmpty()
        .withMessage('the date field is required')
        .run(req);

    await body('category')
        .not()
        .isEmpty()
        .withMessage('the category field is required')
        .run(req);

    await body('account')
        .not()
        .isEmpty()
        .withMessage('the account field is required')
        .run(req);

    let result = await validationResult(req);

    return result;
}

async function expense_store(
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
    let image_path1 = '';

    if (body['attachment']?.ext) {
        image_path1 =
            'uploads/accounts' +
            moment().format('YYYYMMDDHHmmss') +
            body['attachment'].name;
        await (fastify_instance as any).upload(body['attachment'], image_path1);
    }
    let income_attachments: anyObject[] = [];
    for (let i = 0; i < parseInt(body.attachment?.length); i++) {
        let image_path = ``;
        let image_file = body.attachment[i];
        if (image_file?.ext) {
            image_path =
                'uploads/accounts' +
                moment().format('YYYYMMDDHHmmss') +
                image_file.name;
            await (fastify_instance as any).upload(image_file, image_path);
        }
        income_attachments.push({
            file: image_path,
        });
    }
    let auth_user = await models.BranchStaffsModel.findOne({
        where: {
            user_staff_id: (req as any).user?.id || 0,
        },
    });
    let inputs: InferCreationAttributes<typeof data> = {
        branch_id: auth_user?.branch_id || 1,
        account_category_id: body.category,
        account_id: body.account,
        receipt_no: body.receipt_no,
        amount_in_text: body.amount_in_text,
        amount: body.amount,
        date: body.date,
        type: 'expense',
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** expense_store data into database */
    try {
        (await data.update(inputs)).save();
        if (data) {
            if (income_attachments) {
                income_attachments.forEach(async (ss) => {
                    let ala_model = new models.AccountLogAttachmentsModel();
                    let ala_input: InferCreationAttributes<typeof ala_model> = {
                        branch_id: auth_user?.branch_id || 1,
                        attachment_url: ss.file,
                        account_log_id: data.id || 1,
                    };
                    (await ala_model.update(ala_input)).save();
                });
            }
            if (image_path1) {
                let ala_model = new models.AccountLogAttachmentsModel();
                let ala_input: InferCreationAttributes<typeof ala_model> = {
                    branch_id: auth_user?.branch_id || 1,
                    attachment_url: image_path1,
                    account_log_id: data.id || 1,
                };
                (await ala_model.update(ala_input)).save();
            }
        }
        return response(200, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default expense_store;
