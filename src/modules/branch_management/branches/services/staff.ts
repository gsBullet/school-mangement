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
        });

        if (data) {
            let admin = await models.BranchStaffsModel.findOne({
                where: {
                    user_staff_id: params.staff_id,
                },
            });
            if (admin) {
                let user = await models.UserStaffsModel.findOne({
                    where: {
                        id: admin.user_staff_id,
                    },
                    attributes: [
                        'id',
                        'name',
                        'email',
                        'phone_number',
                        'image',
                    ],
                });
                if (user) {
                    return response(200, 'data found', { data, user });
                } else {
                    throw new custom_error('not found', 404, 'user not found');
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
