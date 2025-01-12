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

    // await body('gender')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the gender field is required')
    //     .run(req);
    await body('image')
        .not()
        .isEmpty()
        .withMessage('the image field is required')
        .run(req);
    await body('password')
        .not()
        .isEmpty()
        .withMessage('the password field is required')
        .run(req);
    await body('admission_no')
        .not()
        .isEmpty()
        .withMessage('the admission_no field is required')
        .run(req);
    await body('role_no')
        .not()
        .isEmpty()
        .withMessage('the role_no field is required')
        .run(req);
    await body('student_id')
        .not()
        .isEmpty()
        .withMessage('the student_id field is required')
        .run(req);
    await body('admission_date')
        .not()
        .isEmpty()
        .withMessage('the admission_date field is required')
        .run(req);
    await body('class')
        .not()
        .isEmpty()
        .withMessage('the class field is required')
        .run(req);
    await body('gender')
        .not()
        .isEmpty()
        .withMessage('the gender field is required')
        .run(req);
    await body('present_address')
        .not()
        .isEmpty()
        .withMessage('the present_address field is required')
        .run(req);
    await body('permanent_address')
        .not()
        .isEmpty()
        .withMessage('the permanent_address field is required')
        .run(req);
    await body('date_of_birth')
        .not()
        .isEmpty()
        .withMessage('the date_of_birth field is required')
        .run(req);
    await body('religion')
        .not()
        .isEmpty()
        .withMessage('the religion field is required')
        .run(req);
    await body('nationality')
        .not()
        .isEmpty()
        .withMessage('the nationality field is required')
        .run(req);
    // await body('division')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the division field is required')
    //     .run(req);
    await body('city')
        .not()
        .isEmpty()
        .withMessage('the city field is required')
        .run(req);
    await body('post_code')
        .not()
        .isEmpty()
        .withMessage('the post_code field is required')
        .run(req);
    await body('country')
        .not()
        .isEmpty()
        .withMessage('the country field is required')
        .run(req);
    await body('telegram_name')
        .not()
        .isEmpty()
        .withMessage('the telegram_name field is required')
        .run(req);
    await body('telegram_id')
        .not()
        .isEmpty()
        .withMessage('the telegram_id field is required')
        .run(req);
    await body('blood_group')
        .not()
        .isEmpty()
        .withMessage('the blood_group field is required')
        .run(req);
    await body('student_expire_date')
        .not()
        .isEmpty()
        .withMessage('the student_expire_date field is required')
        .run(req);
    await body('height')
        .not()
        .isEmpty()
        .withMessage('the height field is required')
        .run(req);
    await body('weight')
        .not()
        .isEmpty()
        .withMessage('the weight field is required')
        .run(req);
    await body('as_on_date')
        .not()
        .isEmpty()
        .withMessage('the as_on_date field is required')
        .run(req);
    // await body('family_information')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the family_information field is required')
    //     .run(req);
    // await body('shibling_information')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the shibling_information field is required')
    //     .run(req);
    // await body('living_house_type')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the living_house_type field is required')
    //     .run(req);
    // await body('student_house_type')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the student_house_type field is required')
    //     .run(req);
    await body('birth_certificate')
        .not()
        .isEmpty()
        .withMessage('the birth_certificate field is required')
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
    let data = new models.UserStudentsModel();
    let usi_model = new models.UserStudentInformationsModel();
    let bcs_model = new models.BranchClassStudentsModel();

    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    let password = await bcrypt.hash(body.password, saltRounds);

    let image_path = 'avatar.png';
    let birth_certi_image = 'avatar.png';
    let national_id_image = 'avatar.png';
    let aheight;
    let aweight;

    if (body.height) {
        aheight = body.height;
    } else {
        aheight = 0;
    }

    if (body.weight) {
        aweight = body.weight;
    } else {
        aweight = 0;
    }

    if (body['image']?.ext) {
        image_path =
            'uploads/students/' +
            moment().format('YYYYMMDDHHmmss') +
            body['image'].name;
        await (fastify_instance as any).upload(body['image'], image_path);
    }

    if (body['national_id']?.ext) {
        national_id_image =
            'uploads/students/' +
            moment().format('YYYYMMDDHHmmss') +
            body['national_id'].name;
        await (fastify_instance as any).upload(
            body['national_id'],
            national_id_image,
        );
    }

    if (body['birth_certificate']?.ext) {
        birth_certi_image =
            'uploads/students/' +
            moment().format('YYYYMMDDHHmmss') +
            body['birth_certificate'].name;
        await (fastify_instance as any).upload(
            body['birth_certificate'],
            birth_certi_image,
        );
    }

    let inputs: InferCreationAttributes<typeof data> = {
        // parent_id: body.parent_id,
        name: body.name,
        email: body.email,
        phone_number: body.phone_number,
        whatsapp_number: body.whatsapp_number,
        image: image_path,
        password: password,
    };

    let bcs_inputs: InferCreationAttributes<typeof bcs_model> = {
        // parent_id: body.parent_id,
        branch_id: body.branch_id,
        branch_class_id: body.class,
        branch_student_id: 1,
        branch_class_section_id: body.section,
    };

    let eductional_bc: anyObject[] = [];
    for (let i = 0; i < parseInt(body.educational_background_count); i++) {
        let image_path = ``;
        let image_file =
            body[`educational_background_transfer_cirtificate_${i}`];
        if (image_file?.ext) {
            image_path =
                '/uploads/users/cirtificates/' +
                moment().format('YYYYMMDDHHmmss') +
                image_file.name;
            await (fastify_instance as any).upload(image_file, image_path);
        }
        eductional_bc.push({
            previous_institute:
                body[`educational_background_previous_institute_${i}`],
            year_of_leaving:
                body[`educational_background_year_of_leaving_${i}`],
            result: body[`educational_background_result_${i}`],
            file: image_path,
        });
    }

    let student_document: anyObject[] = [];
    for (let i = 0; i < parseInt(body.total_docement_count); i++) {
        let image_path = ``;
        let image_file = body[`document_file${i}`];
        if (image_file?.ext) {
            image_path =
                '/uploads/users/document/' +
                moment().format('YYYYMMDDHHmmss') +
                image_file.name;
            await (fastify_instance as any).upload(image_file, image_path);
        }
        student_document.push({
            title: body[`document_title${i}`],
            file: image_path,
            issue_date: body[`issue_date${i}`],
            expire_date: body[`expire_date${i}`],
        });
    }

    let student_guardians: anyObject[] = [];
    for (let i = 0; i < parseInt(body.totalParent_count); i++) {
        let image_path = ``;
        let image_file = body[`parent_image${i}`];
        if (image_file?.ext) {
            image_path =
                '/uploads/users/parents/' +
                moment().format('YYYYMMDDHHmmss') +
                image_file.name;
            await (fastify_instance as any).upload(image_file, image_path);
        }
        student_guardians.push({
            relation: body[`relation${i}`],
            is_parent: body[`is_parent${i}`],
            name: body[`parent_name${i}`],
            email: body[`parent_email${i}`],
            phone_number: body[`parent_phone_number${i}`],
            image: image_path,
            password: body[`parent_password${i}`],
            user_parent_id: body[`user_parent_id${i}`],
        });
    }

    console.log(body);
    // console.log(body.file);
    console.log(eductional_bc);

    let student_skills: anyObject[] = [];
    for (let i = 0; i < parseInt(body.student_skills_count); i++) {
        student_skills.push({
            title: body[`skills_title${i}`],
            level: body[`skills_level${i}`],
        });
    }

    let student_language: anyObject[] = [];
    for (let i = 0; i < parseInt(body.student_language_count); i++) {
        student_language.push({
            language_title: body[`language_title${i}`],
            profeciency: body[`language_profeciency${i}`],
        });
    }

    let student_number: anyObject[] = [];
    for (let i = 0; i < parseInt(body.contact_number_count); i++) {
        student_number.push({
            contact_number: body[`contact_number${i}`],
            owner: body[`number_owner${i}`],
        });
    }

    let usi_inputs: InferCreationAttributes<typeof usi_model> = {
        user_student_id: 1,
        branch_id: body.branch_id,
        present_address: body.present_address,
        permanent_address: body.permanent_address,
        date_of_birth: body.date_of_birth,
        gender: body.gender,
        nationality: body.nationality,
        city: body.city,
        state: body.state,
        post_code: body.post_code,
        country: body.country,
        medical_condition: body.medical_condition,
        current_medications: body.current_medications,
        telegram_name: body.telegram_name,
        telegram_id: body.telegram_id,
        student_id: body.student_id,
        blood_group: body.blood_group,
        student_expire_date: body.student_expire_date,
        admission_date: body.admission_date,
        addmission_no: body.admission_no,
        role_no: body.role_no,
        section: body.section,
        s_class: body.class,
        shift: body.shift,
        division: body.division,
        family_information: body.family_information,
        shibling_information: body.shibling_information,
        birth_certificate: birth_certi_image,
        national_id: national_id_image,
        student_category: body.student_category,
        religion: body.religion,
        cast: body.cast,
        student_house: body.student_house_type,
        living_house_type: body.living_house_type,
        height: aheight,
        weight: aweight,
        as_on_date: body.as_on_date,
    };

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        (await data.update(inputs)).save();
        if (data) {
            usi_inputs.user_student_id = data.id || 1;
            (await usi_model.update(usi_inputs)).save();
            bcs_inputs.branch_student_id = data.id || 1;
            (await bcs_model.update(bcs_inputs)).save();
            if (eductional_bc) {
                eductional_bc.forEach(async (edbc) => {
                    let useb_model =
                        new models.UserStudentEducationalBackgroundsModel();
                    let useb_inputs: InferCreationAttributes<
                        typeof useb_model
                    > = {
                        user_student_id: 1,
                        previous_institute: body.previous_institute,
                        year_of_leaving: body.year_of_leaving,
                        result: body.result,
                        transfer_cirtificate: '',
                    };
                    useb_inputs.user_student_id = data.id || 1;
                    useb_inputs.previous_institute = edbc.previous_institute;
                    useb_inputs.year_of_leaving = edbc.year_of_leaving;
                    useb_inputs.result = edbc.result;
                    useb_inputs.transfer_cirtificate = edbc.file;
                    (await useb_model.update(useb_inputs)).save();
                });
            }
            if (student_skills) {
                student_skills.forEach(async (ss) => {
                    let uss_model = new models.UserStudentSkillsModel();
                    let uss_inputs: InferCreationAttributes<typeof uss_model> =
                        {
                            user_student_id: 1,
                            title: body.skills_title,
                            level: body.level,
                            branch_id: body.branch_id,
                        };
                    uss_inputs.user_student_id = data.id || 1;
                    uss_inputs.title = ss.title;
                    uss_inputs.level = ss.level;
                    uss_inputs.branch_id = body.branch_id;
                    (await uss_model.update(uss_inputs)).save();
                });
            }
            if (student_language) {
                student_language.forEach(async (ss) => {
                    let usl_model = new models.UserStudentLanguagesModel();
                    let usl_inputs: InferCreationAttributes<typeof usl_model> =
                        {
                            user_student_id: 1,
                            language_title: body.language_title,
                            profeciency: body.profeciency,
                            branch_id: body.branch_id,
                        };
                    usl_inputs.user_student_id = data.id || 1;
                    usl_inputs.language_title = ss.language_title;
                    usl_inputs.profeciency = ss.profeciency;
                    usl_inputs.branch_id = body.branch_id;
                    (await usl_model.update(usl_inputs)).save();
                });
            }
            if (student_number) {
                student_number.forEach(async (ss) => {
                    let uscn_model =
                        new models.UserStudentContactNumbersModel();
                    let uscn_inputs: InferCreationAttributes<
                        typeof uscn_model
                    > = {
                        user_student_id: 1,
                        contact_number: body.contact_number,
                        owner: body.owner,
                        branch_id: body.branch_id,
                    };
                    uscn_inputs.user_student_id = data.id || 1;
                    uscn_inputs.contact_number = ss.contact_number;
                    uscn_inputs.owner = ss.owner;
                    uscn_inputs.branch_id = body.branch_id;
                    (await uscn_model.update(uscn_inputs)).save();
                });
            }
            if (student_guardians) {
                student_guardians.forEach(async (ss) => {
                    let usp_model = new models.UserStudentParentsModel();
                    let up_model = new models.UserParentsModel();
                    let up_inputs: InferCreationAttributes<typeof up_model> = {
                        name: body.parent_name,
                        email: body.parent_email,
                        phone_number: body.parent_phone_number,
                        image: '',
                        password: body.parent_password,
                    };
                    up_inputs.name = ss.name;
                    up_inputs.email = ss.email;
                    up_inputs.phone_number = ss.phone_number;
                    up_inputs.image = ss.image;
                    up_inputs.password = await bcrypt.hash(
                        ss.password,
                        saltRounds,
                    );
                    (await up_model.update(up_inputs)).save();
                    if (up_model) {
                        let usp_inputs: InferCreationAttributes<
                            typeof usp_model
                        > = {
                            user_student_id: 1,
                            relation: body.relation,
                            is_parent: body.is_parent,
                            user_parent_id: body.user_parent_id,
                        };
                        // eslint-disable-next-line no-redeclare
                        // let id = up_model.id;
                        usp_inputs.user_student_id = data.id || 1;
                        usp_inputs.relation = ss.relation;
                        usp_inputs.is_parent = ss.is_parent;
                        usp_inputs.user_parent_id = up_model.id || 1;
                        // console.log('parent id', up_model.id);

                        (await usp_model.update(usp_inputs)).save();
                    }
                });
            }
            if (student_document) {
                student_document.forEach(async (ss) => {
                    let usdt_model =
                        new models.UserStudentDocumentTitlesModel();
                    let usdv_model =
                        new models.UserStudentDocumentValuesModel();
                    let usdt_inputs: InferCreationAttributes<
                        typeof usdt_model
                    > = {
                        user_student_id: 1,
                        title: body.document_title,
                    };
                    let usdv_inputs: InferCreationAttributes<
                        typeof usdv_model
                    > = {
                        user_student_id: 1,
                        user_student_document_title_id: 1,
                        file: '',
                        issue_date: body.issue_date,
                        expire_date: body.expire_date,
                    };
                    usdt_inputs.user_student_id = data.id || 1;
                    usdt_inputs.title = ss.title;
                    (await usdt_model.update(usdt_inputs)).save();
                    if (usdt_model) {
                        usdv_inputs.user_student_id = data.id || 1;
                        usdv_inputs.file = ss.file;
                        usdv_inputs.issue_date = ss.issue_date;
                        usdv_inputs.expire_date = ss.expire_date;
                        usdv_inputs.user_student_document_title_id =
                            usdt_model.id || 1;
                        (await usdv_model.update(usdv_inputs)).save();
                    }
                });
            }
        }
        return response(200, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default store;
