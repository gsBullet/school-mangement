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
    await body('teacher_id')
        .not()
        .isEmpty()
        .withMessage('the teacher_id field is required')
        .run(req);
    await body('date')
        .not()
        .isEmpty()
        .withMessage('the date field is required')
        .run(req);
    await body('topic')
        .not()
        .isEmpty()
        .withMessage('the topic field is required')
        .run(req);
    await body('completion_date')
        .not()
        .isEmpty()
        .withMessage('the completion_date field is required')
        .run(req);
    await body('is_complete')
        .not()
        .isEmpty()
        .withMessage('the is_complete field is required')
        .run(req);
    await body('class_type')
        .not()
        .isEmpty()
        .withMessage('the class_type field is required')
        .run(req);
    await body('description')
        .not()
        .isEmpty()
        .withMessage('the description field is required')
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
    let model = new models.ClassCourseSchedulesModel();

    let inputs: InferCreationAttributes<typeof model> = {
        branch_id: body.branch_id,
        class_id: body.class_id,
        subject_id: body.subject_id,
        teacher_id: body.teacher_id,
        date: body.date,
        topic: body.topic,
        completion_date: body.completion_date,
        is_complete: body.is_complete,
        class_type: body.class_type,
        description: body.description,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.ClassCourseSchedulesModel.findByPk(body.id);
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
