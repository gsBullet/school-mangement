'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/student-attendances';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/:id`, controllerInstance.find)
        .get(
            `${prefix}/student-attendance/:id`,
            controllerInstance.student_attendance,
        )
        .get(
            `${prefix}/student-attendances/:id`,
            controllerInstance.student_attendances,
        )
        .post(`${prefix}/store`, controllerInstance.store)
        .post(
            `${prefix}/get-30days-attendence`,
            controllerInstance.get_30days_attendence,
        )
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import);
};
