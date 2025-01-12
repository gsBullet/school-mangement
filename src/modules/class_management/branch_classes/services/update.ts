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

/** validation rules */
async function validate(req: Request) {
    await body('id')
        .not()
        .isEmpty()
        .withMessage('the id field is required')
        .run(req);

    await body('name')
        .not()
        .isEmpty()
        .withMessage('the name field is required')
        .run(req);

    await body('code')
        .not()
        .isEmpty()
        .withMessage('the code field is required')
        .run(req);

    await body('capacity')
        .not()
        .isEmpty()
        .withMessage('the capacity field is required')
        .run(req);

    await body('fee')
        .not()
        .isEmpty()
        .withMessage('the fee field is required')
        .run(req);

    await body('prerequisities')
        .not()
        .isEmpty()
        .withMessage('the prerequisities field is required')
        .run(req);

    await body('student_instructions')
        .not()
        .isEmpty()
        .withMessage('the student_instructions field is required')
        .run(req);

    await body('parent_instructions')
        .not()
        .isEmpty()
        .withMessage('the parent_instructions field is required')
        .run(req);

    await body('policies')
        .not()
        .isEmpty()
        .withMessage('the policies field is required')
        .run(req);

    await body('rules')
        .not()
        .isEmpty()
        .withMessage('the rules field is required')
        .run(req);

    await body('waiver_rules')
        .not()
        .isEmpty()
        .withMessage('the waiver_rules field is required')
        .run(req);

    await body('discount_rules')
        .not()
        .isEmpty()
        .withMessage('the discount_rules field is required')
        .run(req);

    let result = await validationResult(req);

    return result;
}

// async function update(
//     fastify_instance: FastifyInstance,
//     req: FastifyRequest,
// ): Promise<responseObject> {
//     throw new Error('500 test');
// }

async function update(
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
    let model = new models.BranchClassesModel();

    let user = (req as any).user;
    let auth_user = await models.BranchAdminsModel.findOne({
        where: {
            user_admin_id: (req as any).user?.id || null,
        },
    });
    let inputs: InferCreationAttributes<typeof model> = {
        branch_id: auth_user?.branch_id || 1,
        name: body.name,
        code: body.code,
        capacity: body.capacity,
        fee: body.fee,
        prerequisities: body.prerequisities,
        student_instructions: body.student_instructions,
        parent_instructions: body.parent_instructions,
        policies: body.policies,
        rules: body.rules,
        waiver_rules: body.waiver_rules,
        discount_rules: body.discount_rules,
        creator: user?.id || null,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.BranchClassesModel.findByPk(body.id);
        if (data) {
            data.update(inputs);
            await data.save();
            return response(201, 'data updated', data);
        } else {
            throw new custom_error(
                'data not found',
                404,
                'operation not possible',
            );
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

export default update;
