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
import student_store from './services/student_store';
import approved from './services/approved';
import pending from './services/pending';
import rejected from './services/rejected';
import teacher_approved from './services/teacher_approved';
import teacher_rejected from './services/teacher_rejected';
import teacher_pending from './services/teacher_pending';
import staff_leave from './services/staff_leave';

export default function (fastify: FastifyInstance) {
    return {
        all: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await all(fastify, req);
            res.code(data.status).send(data);
        },
        staff_leave: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await staff_leave(fastify, req);
            res.code(data.status).send(data);
        },

        find: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await details(fastify, req);
            res.code(data.status).send(data);
        },

        rejected: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await rejected(fastify, req);
            res.code(data.status).send(data);
        },

        pending: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await pending(fastify, req);
            res.code(data.status).send(data);
        },

        approved: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await approved(fastify, req);
            res.code(data.status).send(data);
        },

        teacher_approved: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await teacher_approved(fastify, req);
            res.code(data.status).send(data);
        },

        teacher_pending: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await teacher_pending(fastify, req);
            res.code(data.status).send(data);
        },

        teacher_rejected: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await teacher_rejected(fastify, req);
            res.code(data.status).send(data);
        },

        store: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await store(fastify, req);
            res.code(data.status).send(data);
        },

        student_store: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await student_store(fastify, req);
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
