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
    // await body('branch_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the branch_id field is required')
    //     .run(req);

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
// async function store(
//     fastify_instance: FastifyInstance,
//     req: FastifyRequest,
// ): Promise<responseObject> {
//     throw new Error('500 test');
// }
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
    let data = new models.BranchClassSubjectsModel();
    let room_model = new models.BranchClassRoomsModel();
    let day_times_model = new models.BranchClassRoutineDayTimesModel();
    let routine_model = new models.BranchClassRoutinesModel();
    let subject_teachers_model = new models.BranchClassSubjectTeachersModel();
    let user = (req as any).user;
    let auth_user = await models.BranchAdminsModel.findOne({
        where: {
            user_admin_id: (req as any).user?.id || null,
        },
    });

    let inputs: InferCreationAttributes<typeof data> = {
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

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        (await data.update(inputs)).save();
        if (data) {
            let routine_inputs: InferCreationAttributes<typeof routine_model> =
                {
                    branch_id: auth_user?.branch_id || 1,
                    branch_class_id: body.branch_class_id,
                    branch_class_section_id: body.branch_class_section_id,
                    branch_teacher_id: body.user_teacher_id,
                    branch_class_subject_id: data.id || 0,
                    creator: user?.id || null,
                };
            (await routine_model.update(routine_inputs)).save();
            if (routine_model) {
                let day_times_inputs: InferCreationAttributes<
                    typeof day_times_model
                > = {
                    branch_id: auth_user?.branch_id || 1,
                    branch_class_room_id: body.room_id,
                    branch_class_routine_id: routine_model.id || 0,
                    branch_teacher_id: body.user_teacher_id,
                    day: body.day,
                    start_time: body.start_time,
                    end_time: body.end_time,
                    branch_class_subject_id: data.id || 0,
                    creator: user?.id || null,
                };
                (await day_times_model.update(day_times_inputs)).save();

                let room_inputs: InferCreationAttributes<typeof room_model> = {
                    branch_id: auth_user?.branch_id || 1,
                    branch_class_id: body.branch_class_id,
                    branch_class_section_id: body.branch_class_section_id,
                    branch_building_room_id: body.room_id,
                    branch_class_subject_id: data.id || 0,
                    creator: user?.id || null,
                };
                (await room_model.update(room_inputs)).save();

                let subject_teachers_inputs: InferCreationAttributes<
                    typeof subject_teachers_model
                > = {
                    branch_id: auth_user?.branch_id || 1,
                    branch_class_id: body.branch_class_id,
                    branch_teacher_id: body.user_teacher_id,
                    branch_class_room_id: body.room_id,
                    branch_class_section_id: body.branch_class_section_id,
                    branch_class_subject_id: data.id || 0,
                    description: body.teacher_description,
                    creator: user?.id || null,
                };
                (
                    await subject_teachers_model.update(subject_teachers_inputs)
                ).save();
            }
        }
        return response(201, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default store;
