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
import moment from 'moment/moment';

async function validate(req: Request) {
    await body('name')
        .not()
        .isEmpty()
        .withMessage('the name field is required')
        .run(req);

    await body('branch_code')
        .not()
        .isEmpty()
        .withMessage('the branch_code field is required')
        .run(req);

    await body('logo')
        .not()
        .isEmpty()
        .withMessage('the logo field is required')
        .run(req);

    await body('address')
        .not()
        .isEmpty()
        .withMessage('the address field is required')
        .run(req);

    await body('email')
        .not()
        .isEmpty()
        .withMessage('the email field is required')
        .run(req);

    await body('map')
        .not()
        .isEmpty()
        .withMessage('the map field is required')
        .run(req);

    await body('lat')
        .not()
        .isEmpty()
        .withMessage('the lat field is required')
        .run(req);

    await body('lng')
        .not()
        .isEmpty()
        .withMessage('the lng field is required')
        .run(req);

    let result = await validationResult(req);

    return result;
}

async function store(
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
    let data = new models.BranchesModel();
    let user = (req as any).user;
    let image_path = '';

    if (body['logo']?.ext) {
        image_path =
            'uploads/branch/' +
            moment().format('YYYYMMDDHHmmss') +
            body['logo'].name;
        await (fastify_instance as any).upload(body['logo'], image_path);
    }

    let inputs: InferCreationAttributes<typeof data> = {
        name: body.name,
        branch_code: body.branch_code,
        logo: image_path,
        address: body.address,
        primary_contact: body.primary_contact,
        email: body.email,
        map: body.map,
        lat: body.lat,
        lng: body.lng,
        creator: user?.id || null,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        (await data.update(inputs)).save();
        return response(200, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default store;
