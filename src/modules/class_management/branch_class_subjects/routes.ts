'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/branch-class-subjects';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/classes`, controllerInstance.all_class)
        .get(`${prefix}/sections`, controllerInstance.class_sections)
        .get(`${prefix}/rooms`, controllerInstance.class_rooms)
        .get(`${prefix}/teachers`, controllerInstance.all_teacher)
        .get(`${prefix}/:id`, controllerInstance.find)
        .get(
            `${prefix}/class-routine/:id`,
            controllerInstance.class_routine_details,
        )
        .get(
            `${prefix}/assignment-class/:id`,
            controllerInstance.assignment_class,
        )
        .get(
            `${prefix}/teacher-assignment/:id`,
            controllerInstance.teacher_assignment,
        )
        .get(
            `${prefix}/teacher-classes/:id`,
            controllerInstance.teacher_classes,
        )
        .get(
            `${prefix}/class-wise-subject/:id`,
            controllerInstance.class_wise_subject,
        )
        .get(
            `${prefix}/class-wise-teacher`,
            controllerInstance.class_wise_teacher,
        )
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import);
};
