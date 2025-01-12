import { Model } from 'sequelize';
import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import custom_error from '../helpers/custom_error';
import error_trace from '../helpers/error_trace';

async function restore(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let body = req.body as { [key: string]: any };

    try {
        let data = await models.BranchAdminsModel.findOne({
            where: {
                id: body.id,
            },
        });

        if (data) {
            await data.update({
                status: 'active',
            });
            await data.save();
            return response(200, 'data restored', data);
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

export default restore;
