'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/leave-applications';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/:id`, controllerInstance.find)
        .get(`${prefix}/approved/:id`, controllerInstance.approved)
        .get(`${prefix}/pending/:id`, controllerInstance.pending)
        .get(`${prefix}/rejected/:id`, controllerInstance.rejected)
        .get(
            `${prefix}/teacher-approved/:id`,
            controllerInstance.teacher_approved,
        )
        .get(
            `${prefix}/teacher-pending/:id`,
            controllerInstance.teacher_pending,
        )
        .get(
            `${prefix}/teacher-rejected/:id`,
            controllerInstance.teacher_rejected,
        )
        .get(`${prefix}/staff/:type/:id`, controllerInstance.staff_leave)
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/student-store`, controllerInstance.student_store)
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import);
};
