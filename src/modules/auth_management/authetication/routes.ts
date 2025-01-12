'use strict';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import controller from './controller';
import check_auth from './services/check_auth';
import check_account_auth from './services/check_account_auth';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/auth';
    const controllerInstance = controller(fastify);
    console.log('account longin');
    /** public routes */
    fastify.register(
        async (route, opts) => {
            route
                .post(
                    `/admission-officer/login`,
                    controllerInstance.admission_login,
                )
                .post(`/account/login`, controllerInstance.account_login)
                .post(`/login`, controllerInstance.login)
                .post(`/register`, controllerInstance.register)
                .post(`/forget`, controllerInstance.forget);
        },
        { prefix },
    );

    /** auth routes */
    fastify.register(
        async (route, opts) => {
            route
                // .addHook('preHandler', check_auth)
                .post(
                    `/logout`,
                    { preHandler: check_account_auth },
                    controllerInstance.logout,
                )
                .get(`/info`, controllerInstance.auth_user);
        },
        { prefix },
    );
};
