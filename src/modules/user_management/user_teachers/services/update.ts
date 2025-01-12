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
import moment from 'moment';

async function validate(req: Request) {
    // await body('id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the id field is required')
    //     .run(req);

    await body('name')
        .not()
        .isEmpty()
        .withMessage('the name field is required')
        .run(req);

    await body('email')
        .not()
        .isEmpty()
        .withMessage('the email field is required')
        .run(req);

    await body('phone_number')
        .not()
        .isEmpty()
        .withMessage('the phone_number field is required')
        .run(req);

    // await body('image')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the image field is required')
    //     .run(req);

    let result = await validationResult(req);

    return result;
}

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
    let data = new models.UserTeachersModel();
    let user_staff = new models.UserTeacherInformationsModel();
    let find_teacher = await models.UserTeachersModel.findByPk(body.id);
    let teacher_info = await models.UserTeacherInformationsModel.findOne({
        where: {
            user_teacher_id: body.id,
        },
    });

    let password = null;
    if (body.password) {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        password = await bcrypt.hash(body.password, saltRounds);
    }

    let user = (req as any).user;
    let auth_user = await models.BranchAdminsModel.findOne({
        where: {
            user_admin_id: (req as any).user?.id || null,
        },
    });

    let teacher_image = '';
    let national_id_image = '';
    let certificate1_image = '';
    let certificate2_image = '';

    if (body['teacher_image']?.ext) {
        teacher_image =
            'uploads/teachers/' +
            moment().format('YYYYMMDDHHmmss') +
            body['teacher_image'].name;
        await (fastify_instance as any).upload(
            body['teacher_image'],
            teacher_image,
        );
    }

    if (body['national_id']?.ext) {
        national_id_image =
            'uploads/teachers/' +
            moment().format('YYYYMMDDHHmmss') +
            body['national_id'].name;
        await (fastify_instance as any).upload(
            body['national_id'],
            national_id_image,
        );
    }

    if (body['certificate_1']?.ext) {
        certificate1_image =
            'uploads/teachers/' +
            moment().format('YYYYMMDDHHmmss') +
            body['certificate_1'].name;
        await (fastify_instance as any).upload(
            body['certificate_1'],
            certificate1_image,
        );
    }

    if (body['certificate_2']?.ext) {
        certificate2_image =
            'uploads/teachers/' +
            moment().format('YYYYMMDDHHmmss') +
            body['certificate_2'].name;
        await (fastify_instance as any).upload(
            body['certificate_2'],
            certificate2_image,
        );
    }

    let inputs: InferCreationAttributes<typeof data> = {
        name: body.name,
        email: body.email,
        phone_number: body.phone_number,
        image: teacher_image || find_teacher?.image,
        password: password || find_teacher?.password,
        creator: user?.id || null,
    };

    console.log('staff from', body);
    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        let data = await models.UserTeachersModel.findByPk(body.id);
        if (data) {
            await data.update(inputs);
            let teacher_info =
                await models.UserTeacherInformationsModel.findOne({
                    where: {
                        user_teacher_id: body.id,
                    },
                });
            if (teacher_info) {
                let uti_model = new models.UserTeacherInformationsModel();
                let uti_inputs: InferCreationAttributes<typeof uti_model> = {
                    user_teacher_id: data.id,
                    parmenent_address: body.parmenent_address,
                    present_address: body.present_address,
                    guardian_contact_number: body.guardian_contact_number,
                    is_married: body.is_married,
                    country: body.country,
                    district: body.district,
                    post_code: body.post_code,
                    gender: body.gender,
                    blood_group: body.blood_group,
                    national_id: national_id_image || teacher_info?.national_id,
                    certificate_no_1:
                        certificate1_image || teacher_info?.certificate_no_1,
                    certificate_no_2:
                        certificate2_image || teacher_info?.certificate_no_2,
                    creator: user?.id || null,
                };
                await teacher_info.update(uti_inputs);
            }

            let teacher_branch = await models.BranchTeachersModel.findOne({
                where: {
                    user_teacher_id: body.id,
                },
            });
            if (teacher_branch) {
                let bt_model = new models.BranchTeachersModel();
                let bt_inputs: InferCreationAttributes<typeof bt_model> = {
                    user_teacher_id: data.id || body.staff_id,
                    class_teacher_id: body.class,
                    joining_date: body.joining_date,
                    department: body.department,
                    branch_id: auth_user?.branch_id || 1,
                    creator: user?.id || null,
                };
                await teacher_branch.update(bt_inputs);
            }
        }
        return response(200, 'data created', { data });
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
