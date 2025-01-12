'use strict';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import check_auth_and_redirect from '../modules/auth_management/authetication/services/check_auth_and_redirect';
import minified_view from '../helpers/minified_view';
import check_auth from '../modules/auth_management/authetication/services/check_auth';
import check_account_auth from '../modules/auth_management/authetication/services/check_account_auth';
// import check_is_admin_and_redirect from '../modules/user_management/user_admin/services/check_is_admin_and_redirect';
// const fs = require('node:fs');
module.exports = async function (fastify: FastifyInstance) {
    fastify
        .get('/', async (_req: FastifyRequest, reply: FastifyReply) => {
            // return reply.view('website/index.ejs');
            return reply.redirect('/super-admin');
        })
        .get('/login', async (_req: FastifyRequest, reply: FastifyReply) => {
            // return reply.view('website/pages/login.ejs');
            return reply.view('auth/super_admin_login.ejs');
        })

        .get(
            '/super-admin',
            // { preHandler: check_is_admin_and_redirect },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/super_admin_uni.ejs');
            },
        )

        .get(
            '/admin',
            // { preHandler: check_is_admin_and_redirect },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/admin.ejs');
            },
        )
        .get(
            '/super-admin/login',
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('auth/super_admin_login.ejs');
            },
        )
        .get(
            '/student',
            // { preHandler: check_auth_and_redirect },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/student_uni.ejs');
            },
        )
        .get(
            '/parent',
            // { preHandler: check_auth_and_redirect },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/parent_uni.ejs');
            },
        )
        .get(
            '/teacher',
            // { preHandler: check_auth_and_redirect },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/teacher_uni.ejs');
            },
        )
        .get(
            '/account',
            // { preHandler: check_auth_and_redirect },
            { preHandler: check_account_auth },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/account_uni.ejs');
            },
        )
        .get(
            '/account/login',
            // { preHandler: check_auth_and_redirect },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('auth/account_login.ejs');
            },
        )
        .get(
            '/admission-officer',
            // { preHandler: check_auth_and_redirect },
            { preHandler: check_auth },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/admission_officer_uni.ejs');
            },
        )

        .get(
            '/admission-officer/login',
            async (_req: FastifyRequest, reply: FastifyReply) => {
                // return reply.view('website/pages/login.ejs');
                return reply.view('auth/admission_officer_login.ejs');
            },
        )
        .get(
            '/hostel-super',
            // { preHandler: check_auth_and_redirect },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/hostel_super_uni.ejs');
            },
        )
        .get(
            '/librarian',
            // { preHandler: check_auth_and_redirect },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/librarian_uni.ejs');
            },
        )
        .get(
            '/staff',
            // { preHandler: check_auth_and_redirect },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/staff_uni.ejs');
            },
        )
        .get(
            '/super-admin/analysis',
            // { preHandler: check_auth_and_redirect },
            async (_req: FastifyRequest, reply: FastifyReply) => {
                return reply.view('dashboard/analysis.ejs');
            },
        )

        .get(
            '/dashboard/login',
            async (_req: FastifyRequest, reply: FastifyReply) => {
                let html = await minified_view(fastify, 'auth/login.ejs');
                return reply.type('text/html').send(html);
            },
        );
};
