import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import response from '../helpers/response';
var bcrypt = require('bcrypt');
import { body, validationResult } from 'express-validator';

import {
    anyObject,
    responseObject,
    Request,
} from '../../../common_types/object';
import { env } from 'process';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

async function validate(req: Request) {
    await body('email')
        .not()
        .isEmpty()
        .withMessage('the email field is required')
        .run(req);

    await body('password')
        .not()
        .isEmpty()
        .withMessage('the password field is required')
        .run(req);

    let result = await validationResult(req);

    return result;
}

async function login(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    /** validation */
    let validate_result = await validate(req as Request);
    if (!validate_result.isEmpty()) {
        return response(422, 'validation error', validate_result.array());
    }

    let models = await db();
    let body: anyObject = req.body as anyObject;

    try {
        let data: anyObject | null = {};
        let token: anyObject = {};
        if (body) {
            data = await models.UserParentsModel.findOne({
                where: {
                    email: body.email,
                },
            });
            console.log('body', data);

            if (data) {
                let check_pass = await bcrypt.compare(
                    body.password,
                    data.password,
                );

                if (check_pass) {
                    let jwt = require('jsonwebtoken');
                    const secretKey = env.JTI;
                    const user_agent = req.headers['user-agent'];
                    let secret = Math.random().toString(36).substring(2, 10);
                    token = await jwt.sign(
                        { id: data.id, token: secret, user_agent },
                        secretKey,
                    );

                    data.token = secret;
                    await data.save();
                } else {
                    return response(422, 'wrong password', [
                        {
                            type: 'field',
                            value: '',
                            msg: 'the given password is incorrect',
                            path: 'password',
                            location: 'body',
                        },
                    ]);
                }
            } else {
                return response(422, 'wrong email', [
                    {
                        type: 'field',
                        value: '',
                        msg: 'the given email is incorrect',
                        path: 'email',
                        location: 'body',
                    },
                ]);
            }
        }
        return response(201, 'authentication success', { token });
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
