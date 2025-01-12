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
            let transports = await models.BranchTransportDriversModel.findAll({
                where: {
                    branch_id: data.id,
                },
                attributes: [
                    'id',
                    'branch_id',
                    'name',
                    'driver_number',
                    'assistant_number_1',
                    'assistant_number_2',
                    'present_address',
                    'driver_licence',
                    'permanent_address',
                    'status',
                ],
                include: [
                    {
                        model: models.BranchTransportsModel,
                        as: 'driver_transports',
                        attributes: [
                            'id',
                            'branch_id',
                            'branch_transport_driver_id',
                            'title',
                            'type',
                            'status',
                        ],
                    },
                ],
            });
            return response(200, 'transports found', { data, transports });
        } else {
            throw new custom_error('not found', 404, 'transports not found');
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
