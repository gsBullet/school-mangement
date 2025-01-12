'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/user-staffs';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/staff-all`, controllerInstance.staff_all)
        .get(`${prefix}/:id`, controllerInstance.find)
        .get(
            `${prefix}/basic-information/:id`,
            controllerInstance.basic_information,
        )
        .post(`${prefix}/profile-update`, controllerInstance.profile_update)
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import)
        .post(`${prefix}/login`, controllerInstance.login)
        .post(`${prefix}/forget`, controllerInstance.forget)
        .post(`${prefix}/logout`, controllerInstance.logout);
};
