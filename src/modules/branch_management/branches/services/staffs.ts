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
            let admins = await models.BranchStaffsModel.findAll({
                where: {
                    branch_id: data.id,
                },
                attributes: ['id', 'user_staff_id', 'branch_id', 'status'],
                include: [
                    {
                        model: models.UserStaffsModel,
                        as: 'user_staff',
                        attributes: [
                            'id',
                            'name',
                            'email',
                            'phone_number',
                            'image',
                        ],
                    },
                ],
            });
            return response(200, 'staff found', { data, admins });
        } else {
            throw new custom_error('not found', 404, 'staff not found');
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
