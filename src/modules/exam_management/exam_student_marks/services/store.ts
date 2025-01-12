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
    await body('exam_id')
        .not()
        .isEmpty()
        .withMessage('the exam_id field is required')
        .run(req);
    await body('class_id')
        .not()
        .isEmpty()
        .withMessage('the class_id field is required')
        .run(req);
    await body('subject_id')
        .not()
        .isEmpty()
        .withMessage('the subject_id field is required')
        .run(req);
    await body('student_id')
        .not()
        .isEmpty()
        .withMessage('the student_id field is required')
        .run(req);
    await body('obtained_mark')
        .not()
        .isEmpty()
        .withMessage('the obtained_mark field is required')
        .run(req);
    await body('other_mark')
        .not()
        .isEmpty()
        .withMessage('the other_mark field is required')
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
    let data = new models.ExamStudentMarksModel();

    let inputs: InferCreationAttributes<typeof data> = {
        branch_id: body.branch_id,
        exam_id: body.exam_id,
        class_id: body.class_id,
        student_id: body.student_id,
        subject_id: body.subject_id,
        obtained_mark: body.obtained_mark,
        other_mark: body.other_mark,
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
