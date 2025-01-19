import { FindAndCountOptions } from 'sequelize';
import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import response from '../helpers/response';
import { anyObject, responseObject } from '../../../common_types/object';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

async function quiz_by_branch_class(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let params = req.params as any;
    let body = req.body as any;

    try {
        let data = await models.AssetAuditItemsModel.findAll({
            where: {
                class: body.class,
                branch_id: body.branch_id,
            },
        });

        if (data) {
            return response(200, 'quiz fetched by branch and class', data);
        } else {
            throw new custom_error('not found', 404, 'data not found');
        }
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.params);
        if (error instanceof custom_error) {
            error.uid = uid;
        } else {
            throw new custom_error('server error', 500, error.message, uid);
        }
        throw error;
    }
}

export default quiz_by_branch_class;
