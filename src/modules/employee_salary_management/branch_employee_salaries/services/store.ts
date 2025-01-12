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
    await body('staff_id')
        .not()
        .isEmpty()
        .withMessage('the staff_id field is required')
        .run(req);
    await body('teacher_id')
        .not()
        .isEmpty()
        .withMessage('the teacher_id field is required')
        .run(req);
    await body('branch_employee_salary_type_id')
        .not()
        .isEmpty()
        .withMessage('the branch_employee_salary_type_id field is required')
        .run(req);
    await body('effective_date')
        .not()
        .isEmpty()
        .withMessage('the effective_date field is required')
        .run(req);
    await body('previous_salary')
        .not()
        .isEmpty()
        .withMessage('the previous_salary field is required')
        .run(req);
    await body('new_salary')
        .not()
        .isEmpty()
        .withMessage('the new_salary field is required')
        .run(req);
    await body('reason')
        .not()
        .isEmpty()
        .withMessage('the reason field is required')
        .run(req);
    await body('changed_by')
        .not()
        .isEmpty()
        .withMessage('the changed_by field is required')
        .run(req);
    await body('is_active')
        .not()
        .isEmpty()
        .withMessage('the is_active field is required')
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
    let data = new models.BranchEmployeeSalariesModel();

    let inputs: InferCreationAttributes<typeof data> = {
        branch_employee_salary_type_id: body.branch_employee_salary_type_id,
        staff_id: body.staff_id,
        teacher_id: body.teacher_id,
        branch_id: body.branch_id,
        changed_by: body.changed_by,
        effective_date: body.effective_date,
        previous_salary: body.previous_salary,
        new_salary: body.new_salary,
        reason: body.reason,
        is_active: body.is_active,
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
