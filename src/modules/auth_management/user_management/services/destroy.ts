import { Model } from 'sequelize';
import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';

async function destroy(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let body = req.body as { [key: string]: any };

    let data = await models.User.findOne({
        where: {
            id: body.id,
        },
    });

    if (data) {
        await data.destroy();
        return response(200, 'data deleted', data);
    } else {
        return response(500, 'data delete failed', {});
    }
}

export default destroy;
