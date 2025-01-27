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
    await body('class')
        .not()
        .isEmpty()
        .withMessage('the class field is required')
        .run(req);
    // await body('section')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the section field is required')
    //     .run(req);
    // await body('feedback')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the feedback field is required')
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
    let data = new models.AssetAuditItemsModel();

    let inputs: InferCreationAttributes<typeof data> = {
        title: body.title,
        description: body.description,
        class: body.class,
        admission_result_date: body.admission_result_date,
        admission_exam_date: body.admission_exam_date,
        pass_mark: body.pass_mark,
        // branch_id: body.branch_id,
        // notice_category_id: body.notice_category_id,
        // title: body.title,
        // section: body.section,
        // feedback: body.feedback,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        await data.update(inputs);
        return response(200, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default store;
