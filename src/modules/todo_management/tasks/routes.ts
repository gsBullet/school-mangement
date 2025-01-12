'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/tasks';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/:id`, controllerInstance.find)
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/task-assign`, controllerInstance.task_assign)
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import);

    // .get(`${prefix}/teacher/all`, controllerInstance.all)
    // .get(`${prefix}/teacher/:id`, controllerInstance.find)
    // .post(`${prefix}/teacher/seen`, controllerInstance.store)
    // .post(`${prefix}/teacher/unseen`, controllerInstance.update)
};
