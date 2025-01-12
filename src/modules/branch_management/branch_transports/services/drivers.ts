import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { anyObject, responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';
import { sequelize } from '../../../../bootstrap/db.sql';

async function drivers(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let transportDriversModel = models.BranchTransportDriversModel;
    let params = req.params as any;
    let user_id = (req as any).user?.id;
    console.log('user', user_id);

    try {
        let Branches = await transportDriversModel.findAll({});

        if (Branches) {
            return response(200, 'Driver founded', Branches);
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

export default drivers;
