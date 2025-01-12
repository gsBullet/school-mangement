import { Model } from 'sequelize';
import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';

async function restore(
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
        await data.update({
            status: 1,
        });
        await data.save();
        return response(200, 'data restored', data);
    } else {
        return response(500, 'data restoration failed', {});
    }
}

export default restore;
