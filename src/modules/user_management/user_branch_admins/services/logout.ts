import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import response from '../helpers/response';

import { anyObject, responseObject } from '../../../common_types/object';
import custom_error from '../helpers/custom_error';
import error_trace from '../helpers/error_trace';

async function logout(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();

    try {
        let data = await models.UserBranchAdminsModel.findOne({
            where: {
                id: (req as anyObject).user.id,
            },
        });
        if (data) {
            data.token = null;
            data.user_agent = null;
            await data.save();
            return response(200, 'logout', {});
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
