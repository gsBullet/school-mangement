'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';
import check_staff_auth from '../../auth_management/authetication/services/chech_staff_auth';
import check_auth from '../../auth_management/authetication/services/check_auth';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/user-students';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(
            `${prefix}/classes`,
            { preHandler: [check_staff_auth] },
            controllerInstance.classes,
        )
        .get(`${prefix}/just-check/:id`, controllerInstance.just_check)
        .get(
            `${prefix}/children-details/:id`,
            controllerInstance.children_details,
        )
        .get(
            `${prefix}/pre-info`,
            { preHandler: [check_staff_auth] },
            controllerInstance.pre_info,
        )
        .get(
            `${prefix}/fees-categories/:id`,
            // { preHandler: [check_staff_auth] },
            controllerInstance.fees_categories,
        )
        .get(
            `${prefix}/student-class/:id`,
            // { preHandler: [check_staff_auth] },
            controllerInstance.student_class,
        )
        .get(
            `${prefix}/shifts`,
            { preHandler: [check_staff_auth] },
            controllerInstance.shifts,
        )
        .get(
            `${prefix}/branches`,
            { preHandler: [check_staff_auth] },
            controllerInstance.branches,
        )
        .get(
            `${prefix}/sections`,
            { preHandler: [check_staff_auth] },
            controllerInstance.sections,
        )
        .get(
            `${prefix}/all-class`,
            { preHandler: [check_staff_auth] },
            controllerInstance.all_class,
        )
        .get(
            `${prefix}/class-routine/:id`,
            controllerInstance.class_routine_details,
        )
        .get(
            `${prefix}/class-wise-student/:id`,
            controllerInstance.class_wise_student,
        )
        .get(`${prefix}/parent/childrens/:id`, controllerInstance.childrens)
        .get(`${prefix}/:id`, controllerInstance.find)
        .get(`${prefix}/class-details/:id`, controllerInstance.class_details)
        .get(`${prefix}/students/:id`, controllerInstance.find_student)
        .get(
            `${prefix}/academic-information/:id`,
            controllerInstance.academic_informations,
        )
        .get(
            `${prefix}/basic-information/:id`,
            controllerInstance.basic_informations,
        )
        .get(`${prefix}/documents/:id`, controllerInstance.documents)
        .get(
            `${prefix}/single-student-details/:id`,
            controllerInstance.single_student_details,
        )
        .get(`${prefix}/parents/:id`, controllerInstance.parents)
        .get(`${prefix}/skills/:id`, controllerInstance.skills)
        .get(`${prefix}/languages/:id`, controllerInstance.languages)
        .get(`${prefix}/contact-number/:id`, controllerInstance.contact_numbers)
        .get(
            `${prefix}/educational-background/:id`,
            controllerInstance.educational_backgrounds,
        )
        .get(`${prefix}/full-details/:id`, controllerInstance.full_details)
        .post(`${prefix}/store`, controllerInstance.store)
        // .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/update`, controllerInstance.full_details_update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import)
        .post(`${prefix}/login`, controllerInstance.login)
        .post(`${prefix}/forget`, controllerInstance.forget)
        .post(`${prefix}/change-password`, controllerInstance.change_password)
        .post(`${prefix}/logout`, controllerInstance.logout)
        .post(`${prefix}/admit`, controllerInstance.admit_student)
        .get(`${prefix}/:id/profile`, controllerInstance.profile);
};
