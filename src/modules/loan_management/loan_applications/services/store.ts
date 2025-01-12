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
    await body('branch_teacher_id')
        .not()
        .isEmpty()
        .withMessage('the branch_teacher_id field is required')
        .run(req);
    await body('branch_staff_id')
        .not()
        .isEmpty()
        .withMessage('the branch_staff_id field is required')
        .run(req);
    await body('loan_type_id')
        .not()
        .isEmpty()
        .withMessage('the loan_type_id field is required')
        .run(req);
    await body('need_date')
        .not()
        .isEmpty()
        .withMessage('the need_date field is required')
        .run(req);
    await body('application_date')
        .not()
        .isEmpty()
        .withMessage('the application_date field is required')
        .run(req);
    await body('reason')
        .not()
        .isEmpty()
        .withMessage('the reason field is required')
        .run(req);
    await body('loan_status')
        .not()
        .isEmpty()
        .withMessage('the loan_status field is required')
        .run(req);
    await body('attachements')
        .not()
        .isEmpty()
        .withMessage('the attachements field is required')
        .run(req);
    await body('will_pay_date')
        .not()
        .isEmpty()
        .withMessage('the will_pay_date field is required')
        .run(req);
    await body('request_amount')
        .not()
        .isEmpty()
        .withMessage('the request_amount field is required')
        .run(req);
    await body('pay_amount')
        .not()
        .isEmpty()
        .withMessage('the pay_amount field is required')
        .run(req);
    await body('given_date')
        .not()
        .isEmpty()
        .withMessage('the given_date field is required')
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
    let data = new models.LoanApplicationsModel();

    let inputs: InferCreationAttributes<typeof data> = {
        branch_id: body.branch_id,
        branch_teacher_id: body.branch_teacher_id,
        branch_staff_id: body.branch_staff_id,
        loan_type_id: body.loan_type_id,
        need_date: body.need_date,
        application_date: body.application_date,
        reason: body.reason,
        loan_status: body.loan_status,
        attachments: body.attachments,
        will_pay_date: body.will_pay_date,
        request_amount: body.request_amount,
        pay_amount: body.pay_amount,
        given_date: body.given_date,
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
