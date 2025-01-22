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
// import update from './services/update';
import restore from './services/restore';
import destroy from './services/destroy';
import data_import from './services/import';
import { resourceLimits } from 'worker_threads';
import result from './services/result';
import written from './services/written';
import file_upload from './services/file_upload';

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

        store: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await store(fastify, req);
            res.code(data.status).send(data);
        },
        written: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await written(fastify, req);
            res.code(data.status).send(data);
        },
        file_upload: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await file_upload(fastify, req);
            res.code(data.status).send(data);
        },

        // update: async function (req: FastifyRequest, res: FastifyReply) {
        //     let data: responseObject = await update(fastify, req);
        //     res.code(data.status).send(data);
        // },
        result: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await result(fastify, req);
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
