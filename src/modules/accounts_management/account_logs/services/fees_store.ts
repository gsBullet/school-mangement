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
    await body('receipt_no')
        .not()
        .isEmpty()
        .withMessage('the receipt_no field is required')
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
    let data = new models.AccountLogsModel();
    let user = (req as any).user;

    let student_fees: anyObject[] = [];
    for (
        let i = 0;
        i <= parseInt((req.body as anyObject).total_fees_count);
        i++
    ) {
        let fees = (req.body as anyObject)[`fees_${i}`];
        if (fees) {
            let temp = {
                receipt_no: (req.body as anyObject).receipt_no,
                date: (req.body as anyObject).date,
                account_category_id: (req.body as anyObject)
                    .account_category_id,
                account_period_id: (req.body as anyObject).account_period_id,
                account_id: (req.body as anyObject).account_id,
                amount_in_text: (req.body as anyObject).amount_in_text,
                amount: (req.body as anyObject)[`fees_${i}`],
                fee_amount: (req.body as anyObject)[`fees_amount_${i}`],
                type: (req.body as anyObject)[`fees_type_${i}`],
            };
            student_fees.push(temp);
        }
    }
    console.log('authenticate user id', (req as any).user);

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data2 = await models.UserStudentInformationsModel.findOne({
            where: {
                student_id: (req.body as anyObject).student_id,
            },
        });
        let auth_user = await models.BranchStaffsModel.findOne({
            where: {
                user_staff_id: (req as any).user?.id || null,
            },
        });

        let inputs: InferCreationAttributes<typeof data> = {
            branch_id: auth_user?.branch_id || 1,
            account_category_id: (req.body as anyObject).category_id || 1,
            account_id: (req.body as anyObject).account_id || 1,
            account_period_id: (req.body as anyObject).period_id || 1,
            receipt_no: (req.body as anyObject).receipt_no,
            amount: (req.body as anyObject).total_amount,
            amount_in_text: (req.body as anyObject).amount_in_text,
            date: (req.body as anyObject).date,
            type: (req.body as anyObject).type || 'income',
            creator: user?.id || null,
        };

        (await data.update(inputs)).save();
        if (data) {
            let afc_model = new models.AccountFeeCollectionsModel();
            let afc_inputs: InferCreationAttributes<typeof afc_model> = {
                branch_id: auth_user?.branch_id || 1,
                branch_student_id: (req.body as anyObject).branch_student_id,
                branch_student_class_id: (req.body as anyObject)
                    .branch_student_class_id,
                account_category_id: (req.body as anyObject)
                    .account_category_id,
                account_log_id: data.id || 1,
                amount: (req.body as anyObject).total_amount || 0,
                date: (req.body as anyObject).date,
                creator: user?.id || null,
            };
            afc_inputs.branch_student_id = data2?.user_student_id || 0;
            afc_inputs.branch_student_class_id = data2?.s_class || 0;
            afc_inputs.account_category_id = (
                req.body as anyObject
            ).account_category_id;
            afc_inputs.account_log_id = data.id || 1;
            afc_inputs.amount = (req.body as anyObject).total_amount || 0;
            afc_inputs.date = (req.body as anyObject).date;
            // insert new fees in afc_model
            (await afc_model.update(afc_inputs)).save();

            if (afc_model) {
                if (student_fees) {
                    student_fees.forEach(async (ss) => {
                        let afcd_model =
                            new models.AccountFeesCollectionDetailsModel();
                        let afcd_inputs: InferCreationAttributes<
                            typeof afcd_model
                        > = {
                            branch_id: auth_user?.branch_id || 0,
                            branch_student_id: data2?.user_student_id || 0,
                            branch_student_class_id: data2?.s_class || 0,
                            account_fees_collection_id: afc_model.id || 0,
                            branch_class_fees_id: ss.type,
                            fee_amount: ss.fee_amount,
                            total: ss.amount,
                            date: (req.body as anyObject).date,
                            creator: user?.id || null,
                        };

                        (await afcd_model.update(afcd_inputs)).save();
                    });
                }
            }
        }

        return response(200, 'data created', student_fees);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}
export default store;
