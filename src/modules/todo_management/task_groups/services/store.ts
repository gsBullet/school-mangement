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
    // await body('branch_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the branch_id field is required')
    //     .run(req);

    await body('title')
        .not()
        .isEmpty()
        .withMessage('the title field is required')
        .run(req);

    await body('color')
        .not()
        .isEmpty()
        .withMessage('the color field is required')
        .run(req);

    await body('description')
        .not()
        .isEmpty()
        .withMessage('the description field is required')
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
    let data = new models.TaskGroupsModel();
    let taskGroupUser = new models.TaskGroupUsersModel();

    let inputs: InferCreationAttributes<typeof data> = {
        branch_id: 1,
        title: body.title,
        color: body.color,
        description: body.description,
        creator: 1,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let taskGroups = await models.TaskGroupsModel.create(inputs);
        let taskGroups_id = taskGroups.id;
        console.log('taskGroups....', taskGroups_id);

        if (taskGroups) {
            let inputs2 = {
                branch_id: body.branch_id,
                task_group_id: taskGroups_id,
                user_id: 2,
            };
            await taskGroupUser.update(inputs2);
            await taskGroupUser.save();
        }
        return response(200, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default store;
