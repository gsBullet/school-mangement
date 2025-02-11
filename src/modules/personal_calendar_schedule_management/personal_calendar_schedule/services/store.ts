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

    await body('admin_id')
        .not()
        .isEmpty()
        .withMessage('the admin_id field is required')
        .run(req);
    await body('teacher_id')
        .not()
        .isEmpty()
        .withMessage('the teacher_id field is required')
        .run(req);
    await body('staff_id')
        .not()
        .isEmpty()
        .withMessage('the staff_id field is required')
        .run(req);
    await body('student_id')
        .not()
        .isEmpty()
        .withMessage('the student_id field is required')
        .run(req);
    await body('parent_id')
        .not()
        .isEmpty()
        .withMessage('the parent_id field is required')
        .run(req);

    await body('title')
        .not()
        .isEmpty()
        .withMessage('the title field is required')
        .run(req);
    await body('description')
        .not()
        .isEmpty()
        .withMessage('the description field is required')
        .run(req);
    await body('date')
        .not()
        .isEmpty()
        .withMessage('the date field is required')
        .run(req);
    await body('reminder_date')
        .not()
        .isEmpty()
        .withMessage('the reminder_date field is required')
        .run(req);
    await body('is_complete')
        .not()
        .isEmpty()
        .withMessage('the is_complete field is required')
        .run(req);
    await body('location')
        .not()
        .isEmpty()
        .withMessage('the location field is required')
        .run(req);
    await body('map_link')
        .not()
        .isEmpty()
        .withMessage('the map_link field is required')
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
    let data = new models.PersonalCalendarSchedulesModel();

    let inputs: InferCreationAttributes<typeof data> = {
        branch_id: body.branch_id,
        admin_id: body.admin_id,
        teacher_id: body.teacher_id,
        student_id: body.student_id,
        staff_id: body.staff_id,
        parent_id: body.parent_id,

        title: body.title,
        description: body.description,
        date: body.date,
        reminder_date: body.reminder_date,
        is_complete: body.is_complete,
        priority: body.priority,
        location: body.location,
        map_link: body.map_link,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        data.update(inputs);
        let task = await data.save();
        // let task_id = task.id;

        // if (task) {
        //     let inputs2 = {
        //         branch_id: body.branch_id,
        //         task_id: task_id,
        //         variants_id: 2,
        //     };
        //     taskVariantTasks.update(inputs2);
        //     let task_variant_task = await taskVariantTasks.save();
        // }
        return response(200, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default store;
