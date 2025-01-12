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
import moment from 'moment/moment';

/** validation rules */
async function validate(req: Request) {
    // await body('id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the id field is required')
    //     .run(req);

    // await body('branch_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the branch_id field is required')
    //     .run(req);

    // await body('branch_class_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the branch_class_id field is required')
    //     .run(req);

    // await body('branch_class_subject_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the branch_class_subject_id field is required')
    //     .run(req);

    // await body('title')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the title field is required')
    //     .run(req);

    // await body('description')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the description field is required')
    //     .run(req);

    // await body('attachment')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the attachment field is required')
    //     .run(req);

    let result = await validationResult(req);

    return result;
}

// async function update(
//     fastify_instance: FastifyInstance,
//     req: FastifyRequest,
// ): Promise<responseObject> {
//     throw new Error('500 test');
// }

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

    let model = new models.BranchClassResourcessModel();
    let data = await models.BranchClassResourcessModel.findByPk(body.id);
    let prevFile = data?.attachment;

    let image_path = '';

    if (body['attachment']?.ext) {
        image_path =
            'uploads/materials/' +
            moment().format('YYYYMMDDHHmmss') +
            body['attachment'].name;
        await (fastify_instance as any).upload(body['attachment'], image_path);
    }
    let inputs: InferCreationAttributes<typeof model> = {
        branch_id: body.branch_id,
        branch_class_id: body.class,
        title: body.title,
        description: body.description,
        attachment: image_path || prevFile || 'avatar.png',
        branch_class_subject_id: body.subject,
        creator: 1,
    };
    console.log('update body', body);
    console.log('attachemetn', prevFile);
    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.BranchClassResourcessModel.findByPk(body.id);
        if (data) {
            data.update(inputs);
            await data.save();
            return response(201, 'data updated', data);
        } else {
            throw new custom_error(
                'data not found',
                404,
                'operation not possible',
            );
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
