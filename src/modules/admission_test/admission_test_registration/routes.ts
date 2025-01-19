'use strict';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import controller from './controller';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/admission-test-registration';
    const controllerInstance = controller(fastify);

    // Add middleware (hook) for every route in this module
    fastify.addHook(
        'preHandler',
        async (request: FastifyRequest, reply: FastifyReply) => {
            // Example: Authorization check or logging
            // console.log(
            //     `[${request.method}] ${request.url} - Middleware executed`,
            // );

            // Custom logic, e.g., token validation
            const authToken = request.headers['authorization'];
            console.log(authToken);

            // if (!authToken || authToken !== 'your-secret-token') {
            //     reply.code(401).send({ error: 'Unauthorized' });
            // }
        },
    );

    fastify
        .get(`${prefix}`, controllerInstance.all)
        .get(`${prefix}/:id`, controllerInstance.find)
        .post(`${prefix}/login`, controllerInstance.login)
        // .get(`${prefix}/auth-check`, controllerInstance.auth_check)
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import);
};
