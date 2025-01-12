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
    await body('branch_class_id')
        .not()
        .isEmpty()
        .withMessage('the branch_class_id field is required')
        .run(req);

    await body('branch_class_section_id')
        .not()
        .isEmpty()
        .withMessage('the branch_class_section_id field is required')
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

    await body('level')
        .not()
        .isEmpty()
        .withMessage('the level field is required')
        .run(req);

    await body('credit')
        .not()
        .isEmpty()
        .withMessage('the credit field is required')
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
    let user = (req as any).user;
    let model = new models.BranchClassSubjectsModel();
    let auth_user = await models.BranchAdminsModel.findOne({
        where: {
            user_admin_id: (req as any).user?.id || null,
        },
    });

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.BranchClassSubjectsModel.findByPk(body.id);
        let data1 = await models.BranchClassRoutineDayTimesModel.findOne({
            where: {
                branch_class_subject_id: body.id,
            },
        });
        let data2 = await models.BranchClassSubjectTeachersModel.findOne({
            where: {
                branch_class_subject_id: body.id,
            },
        });
        if (data && data1 && data2) {
            let inputs: InferCreationAttributes<typeof model> = {
                branch_id: auth_user?.branch_id || 1,
                branch_class_id: body.branch_class_id,
                branch_class_section_id: body.branch_class_section_id,
                name: body.name,
                code: body.code,
                level: body.level,
                description: body.description,
                credit: body.credit,
                additional_info: body.additional_info,
                creator: user?.id || null,
            };
            (await data.update(inputs)).save();
            let day_times_inputs: InferCreationAttributes<typeof data1> = {
                branch_id: auth_user?.branch_id || 1,
                branch_class_room_id: body.room_id,
                branch_class_routine_id: data1.branch_class_routine_id || 0,
                branch_teacher_id: body.user_teacher_id,
                day: body.day,
                start_time: body.start_time,
                end_time: body.end_time,
                branch_class_subject_id: data1.branch_class_subject_id || 0,
                creator: user?.id || null,
            };
            (await data1.update(day_times_inputs)).save();
            let subject_teachers_inputs: InferCreationAttributes<typeof data2> =
                {
                    branch_id: auth_user?.branch_id || 1,
                    branch_class_id: body.branch_class_id,
                    branch_teacher_id: body.user_teacher_id,
                    branch_class_room_id: body.room_id,
                    branch_class_section_id: body.branch_class_section_id,
                    branch_class_subject_id: data2.branch_class_subject_id || 0,
                    description: body.teacher_description,
                    creator: user?.id || null,
                };
            (await data2.update(subject_teachers_inputs)).save();
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
