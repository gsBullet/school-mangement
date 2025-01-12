'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/branches';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/branches`, controllerInstance.branches)
        .get(`${prefix}/:id`, controllerInstance.find)
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import)

        .get(`${prefix}/:branch_id/admins`, controllerInstance.admins)
        .get(`${prefix}/:branch_id/admins/:admin_id`, controllerInstance.admin)

        .get(`${prefix}/:branch_id/staffs`, controllerInstance.staffs)
        .get(`${prefix}/:branch_id/staffs/:staff_id`, controllerInstance.staff)
        .get(
            `${prefix}/:branch_id/staffs/:staff_id/informations`,
            controllerInstance.staff_information,
        )

        .get(`${prefix}/:branch_id/teachers`, controllerInstance.teachers)
        .get(
            `${prefix}/:branch_id/teachers/:teacher_id`,
            controllerInstance.teacher,
        )
        .get(
            `${prefix}/:branch_id/teachers/:teacher_id/informations`,
            controllerInstance.teacher_information,
        )

        .get(`${prefix}/:branch_id/students`, controllerInstance.students)
        .get(
            `${prefix}/:branch_id/students/:student_id/educational-background`,
            controllerInstance.background,
        )
        .get(
            `${prefix}/:branch_id/students/:student_id/informations`,
            controllerInstance.student_information,
        )

        .get(`${prefix}/:branch_id/parents`, controllerInstance.parents)
        .get(
            `${prefix}/:branch_id/parents/:parent_id/informations`,
            controllerInstance.parent_information,
        )

        .get(`${prefix}/:branch_id/drivers`, controllerInstance.drivers)
        .get(
            `${prefix}/:branch_id/drivers/:driver_id`,
            controllerInstance.driver,
        );
};
