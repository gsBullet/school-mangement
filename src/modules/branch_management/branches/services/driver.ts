import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

async function details(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let params = req.params as any;

    try {
        let data = await models.BranchesModel.findOne({
            where: {
                id: params.branch_id,
            },
            attributes: [
                'id',
                'branch_code',
                'name',
                'logo',
                'address',
                'primary_contact',
                'email',
                'map',
                'lat',
                'lng',
                'status',
            ],
        });

        if (data) {
            let admin = await models.BranchTransportDriversModel.findOne({
                where: {
                    id: params.driver_id,
                },
            });
            if (admin) {
                let user = await models.BranchTransportsModel.findAll({
                    where: {
                        branch_transport_driver_id: admin.id,
                    },
                    attributes: [
                        'id',
                        'branch_id',
                        'branch_transport_driver_id',
                        'title',
                        'type',
                        'status',
                    ],
                });
                if (user) {
                    return response(200, 'driver found', { data, user });
                } else {
                    throw new custom_error(
                        'not found',
                        404,
                        'driver not found',
                    );
                }
            } else {
                /**if branch admin not found */
                throw new custom_error(
                    'not found',
                    404,
                    'branch admin not found',
                );
            }
        } else {
            /**if branch not fournd */
            throw new custom_error('not found', 404, 'branch not found');
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
