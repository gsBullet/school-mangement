import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';
const jwt = require('jsonwebtoken');

async function login(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let params = req.params as any;
    let body = req.body as any;

    console.log(body);

    try {
        let data = await models.AssetAuditItemsModel.findOne({
            where: {
                email: body.email,
            },
            attributes: [
                'id',
                'full_name',
                'email',
                'branch_id',
                'class',
                'section',
                'status',
                'password',
            ],
        });

        if (data) {
            if (body.password && body.password === data.password) {
                let userToken = jwt.sign(
                    {
                        id: data.id,
                        email: data.email,
                        password: data.password,
                        branchId: data.branch_id,
                        class: data.class,
                        sections: data.section,
                        studentNane: data.full_name,
                        status: data.status,
                    },
                    process.env.JTI,
                    // {
                    //     expiresIn: '1h',
                    // },
                );
                return response(200, 'data created', {
                    userToken,
                    user_info: data,
                });
            } else {
                return response(201, 'password does not match', data);
            }
        } else {
            return response(201, 'user does not exist', { data: body });
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

export default login;
