import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import response from '../helpers/response';

import {
    anyObject,
    responseObject,
    Request,
} from '../../../common_types/object';
import custom_error from '../helpers/custom_error';
import error_trace from '../helpers/error_trace';

async function logout(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    console.log('auth account user id', (req as anyObject).user.id);
    let authUser = (req as anyObject).user;
    console.log('auth account user id', authUser);

    try {
        if (authUser.user_type === 'staff') {
            let data = await models.UserStaffsModel.findOne({
                where: {
                    id: (req as anyObject).user.id,
                },
            });
            if (data) {
                data.token = null;
                data.user_agent = null;
                await data.save();
                return response(217, 'logout', {});
                // return response(122, 'ghyhr', {});
            } else {
                throw new custom_error(
                    'Expectation Failed',
                    417,
                    'action not possible',
                );
            }
        } else if (authUser.user_type === 'student') {
            let data = await models.UserStudentsModel.findOne({
                where: {
                    id: (req as anyObject).user.id,
                },
            });
            if (data) {
                data.token = null;
                data.user_agent = null;
                await data.save();
                return response(217, 'logout', {});
                // return response(122, 'ghyhr', {});
            } else {
                throw new custom_error(
                    'Expectation Failed',
                    417,
                    'action not possible',
                );
            }
        } else {
            throw new custom_error(
                'Expectation Failed',
                417,
                'action not possible',
            );
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

export default logout;
