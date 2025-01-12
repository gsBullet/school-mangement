'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/branch-class-resources';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/classes`, controllerInstance.classes)
        .get(
            `${prefix}/class-wise-subject/:id`,
            controllerInstance.class_wise_subject,
        )
        .get(`${prefix}/:id`, controllerInstance.find)
        .get(
            `${prefix}/academic-resource/:id`,
            controllerInstance.academic_resource,
        )
        .get(
            `${prefix}/teacher-resource/:id`,
            controllerInstance.teacher_resource,
        )
        .get(`${prefix}/subject-wise/:id`, controllerInstance.sub_wise_resource)
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import);
};
