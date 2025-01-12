'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';
import check_auth from '../../auth_management/authetication/services/check_auth';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/accounts';
    const controllerInstance = controller(fastify);

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/all`, controllerInstance.all_accounts)
        .get(`${prefix}/accounts`, controllerInstance.accounts)
        .get(`${prefix}/:id`, controllerInstance.find)
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import);
};
