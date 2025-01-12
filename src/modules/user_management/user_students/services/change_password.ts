import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { body, validationResult } from 'express-validator';
import {
    anyObject,
    responseObject,
    Request,
} from '../../../common_types/object';
import response from '../helpers/response';
import { InferCreationAttributes } from 'sequelize';
import custom_error from '../helpers/custom_error';
import error_trace from '../helpers/error_trace';

async function validate(req: Request) {
    await body('forget_code')
        .not()
        .isEmpty()
        .withMessage('the forget_code field is required')
        .run(req);

    await body('password')
        .not()
        .isEmpty()
        .withMessage('the password field is required')
        .run(req);

    await body('confirm_password')
        .not()
        .isEmpty()
        .withMessage('the confirm_password field is required')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password do not match with confirm_password');
            }
            return true;
        })
        .run(req);

    let result = await validationResult(req);

    return result;
}

async function change_password(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    /** validation */
    let validate_result = await validate(req as Request);
    if (!validate_result.isEmpty()) {
        return response(422, 'validation error', validate_result.array());
    }

    /** initializations */
    let models = await db();
    let body = req.body as anyObject;
    let model = new models.UserStudentsModel();

    let password = null;
    if (body.password) {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        password = await bcrypt.hash(body.password, saltRounds);
    }
    let inputs: InferCreationAttributes<typeof model> = {
        email: body.email,
        password: password,
    };
    // if (password) {
    //     inputs.password = password;
    // }
    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.UserStudentsModel.findOne({
            where: {
                email: body.email,
            },
        });
        if (data) {
            if (data?.forget_code == body.forget_code) {
                data.update(inputs);
                await data.save();
                return response(200, 'data updated', data);
            } else {
                throw new custom_error(
                    'forget code not match',
                    404,
                    'forget code not match',
                );
            }
        } else {
            throw new custom_error('data not found', 404, 'data not found');
        }
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        if (error instanceof custom_error) {
            error.uid = uid;
        } else {
            throw new custom_error('server error', 500, error.message, uid);
        }
        throw error;
    }
}

export default change_password;
