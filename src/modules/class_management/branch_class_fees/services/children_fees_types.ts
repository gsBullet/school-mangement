import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

// async function details(
//     fastify_instance: FastifyInstance,
//     req: FastifyRequest,
// ): Promise<responseObject> {
//     throw new Error('500 test');
// }

async function details(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let params = req.params as any;

    try {
        let data = await models.BranchClassFeesModel.findAll({
            where: {
                branch_class_id: params.id,
            },
        });

        // Initialize data2 object
        let data2 = {
            total_amount: 0,
        };
        // Sum the amounts from the filtered data based on type
        data.forEach((log) => {
            const amount = log.amount ?? 0; // Default to 0 if undefined
            data2.total_amount += amount;
        });

        if (data) {
            return response(200, 'data found', { data, data2 });
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

export default details;
