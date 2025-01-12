'use strict';
import fastify, {
    FastifyReply,
    FastifyRequest,
    FastifyInstance,
} from 'fastify';
import all from './services/all';
import details from './services/details';
import soft_delete from './services/soft_delete';
import store from './services/store';
import { responseObject } from '../../common_types/object';
import update from './services/update';
import restore from './services/restore';
import destroy from './services/destroy';
import data_import from './services/import';
import academic_resource from './services/academic_resource';
import teacher_resource from './services/teacher_resource';
import sub_wise_resource from './services/sub_wise_resource';
import classes from '../../user_management/user_students/services/classes';
import class_wise_subject from './services/class_wise_subject';

export default function (fastify: FastifyInstance) {
    return {
        all: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await all(fastify, req);
            res.code(data.status).send(data);
        },

        find: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await details(fastify, req);
            res.code(data.status).send(data);
        },

        academic_resource: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await academic_resource(fastify, req);
            res.code(data.status).send(data);
        },

        teacher_resource: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await teacher_resource(fastify, req);
            res.code(data.status).send(data);
        },

        sub_wise_resource: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await sub_wise_resource(fastify, req);
            res.code(data.status).send(data);
        },

        store: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await store(fastify, req);
            res.code(data.status).send(data);
        },

        classes: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await classes(fastify, req);
            res.code(data.status).send(data);
        },

        class_wise_subject: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data: responseObject = await class_wise_subject(fastify, req);
            res.code(data.status).send(data);
        },

        update: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await update(fastify, req);
            res.code(data.status).send(data);
        },

        soft_delete: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await soft_delete(fastify, req);
            res.code(data.status).send(data);
        },

        restore: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await restore(fastify, req);
            res.code(data.status).send(data);
        },

        destroy: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await destroy(fastify, req);
            res.code(data.status).send(data);
        },

        import: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await data_import(fastify, req);
            res.code(data.status).send(data);
        },

        // export: async function (req: FastifyRequest, res: FastifyReply) {},
    };
}
