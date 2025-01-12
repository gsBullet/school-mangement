import { FindAndCountOptions } from 'sequelize';
import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import response from '../helpers/response';
import { validationResult, query } from 'express-validator';
import {
    anyObject,
    responseObject,
    Request,
} from '../../../common_types/object';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

/** validation rules */
async function validate(req: Request) {
    console.log('req', req.query);

    await query('orderByCol')
        .not()
        .isEmpty()
        .withMessage('the orderByCol field is required')
        .run(req);

    await query('orderByAsc')
        .not()
        .isEmpty()
        .withMessage('the orderByAsc field is required')
        .run(req);

    await query('show_active_data')
        .not()
        .isEmpty()
        .withMessage('the show_active_data field is required')
        .run(req);

    await query('paginate')
        .not()
        .isEmpty()
        .withMessage('the paginate field is required')
        .run(req);

    let result = await validationResult(req);

    return result;
}
async function all(
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
    let query_param = req.query as any;

    const { Op } = require('sequelize');
    let search_key = query_param.search_key;
    let orderByCol = query_param.orderByCol || 'id';
    let orderByAsc = query_param.orderByAsc || 'true';
    let show_active_data = query_param.show_active_data || 'true';
    let paginate = parseInt((req.query as any).paginate) || 10;
    let select_fields: string[] = [];
    let exclude_fields: string[] = ['password'];

    if (query_param.select_fields) {
        select_fields = query_param.select_fields.replace(/\s/g, '').split(',');
        select_fields = [...select_fields, 'id', 'status'];
    } else {
        select_fields = ['id', 'branch_id', 'title', 'color', 'description'];
    }

    let query: FindAndCountOptions = {
        order: [[orderByCol, orderByAsc == 'true' ? 'ASC' : 'DESC']],
        where: {
            status: show_active_data == 'true' ? 'active' : 'deactive',
        },
        // include: [models.Project],
    };

    query.attributes = {
        include: select_fields,
        exclude: exclude_fields,
    };

    if (search_key) {
        query.where = {
            ...query.where,
            [Op.or]: [
                { name: { [Op.like]: `%${search_key}%` } },
                { preferred_name: { [Op.like]: `%${search_key}%` } },
                { status: { [Op.like]: `%${search_key}%` } },
                { id: { [Op.like]: `%${search_key}%` } },
            ],
        };
    }

    try {
        let data = await (fastify_instance as anyObject).paginate(
            req,
            models.TaskVariantsModel,
            paginate,
            query,
        );
        return response(200, 'data fetched', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.query);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default all;
