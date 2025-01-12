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
            let admin = await models.BranchTeachersModel.findOne({
                where: {
                    user_teacher_id: params.teacher_id,
                },
            });
            if (admin) {
                let user = await models.UserTeachersModel.findOne({
                    where: {
                        id: admin.user_teacher_id,
                    },
                });
                if (user) {
                    let information =
                        await models.UserteacherInformationsModel.findOne({
                            where: {
                                user_teacher_id: user.id,
                            },
                            attributes: [
                                'id',
                                'user_teacher_id',
                                'parmenent_address',
                                'present_address',
                                'guardian_contact_number',
                                'graduation',
                                'ismarried',
                            ],
                        });
                    if (information) {
                        return response(200, 'data found', {
                            data,
                            information,
                        });
                    } else {
                        throw new custom_error(
                            'not found',
                            404,
                            'information not found',
                        );
                    }
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
