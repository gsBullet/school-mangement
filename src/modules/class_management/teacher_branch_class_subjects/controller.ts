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
import class_routine_details from './services/class_routine_details';
import assignment_class from './services/assignment_class';
import teacher_assignment from './services/teacher_assignment';
import teacher_classes from './services/teacher_classes';
import class_wise_subject from './services/class_wise_subject';
import data_import from './services/import';
import class_wise_teacher from './services/class_wise_teacher';
import all_class from './services/all_class';
import class_sections from './services/class_section';
import all_teacher from './services/all_teacher';
import class_rooms from './services/class_rooms';
import getBranchClassRoutine from './services/getBranchClassRoutine';
import get_teacher_class_subjects from './services/get_teacher_class_subjects';

export default function (fastify: FastifyInstance) {
    return {
        all: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await all(fastify, req);
            res.code(data.status).send(data);
        },
        class_wise_subject: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data: responseObject = await class_wise_subject(fastify, req);
            res.code(data.status).send(data);
        },
        class_wise_teacher: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data: responseObject = await class_wise_teacher(fastify, req);
            res.code(data.status).send(data);
        },
        get_branch_class_routine: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data: responseObject = await getBranchClassRoutine(
                fastify,
                req,
            );
            res.code(data.status).send(data);
        },

        find: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await details(fastify, req);
            res.code(data.status).send(data);
        },
        get_teacher_class_subjects: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await get_teacher_class_subjects(fastify, req);
            res.code(data.status).send(data);
        },

        class_routine_details: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await class_routine_details(fastify, req);
            res.code(data.status).send(data);
        },

        assignment_class: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await assignment_class(fastify, req);
            res.code(data.status).send(data);
        },

        teacher_assignment: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await teacher_assignment(fastify, req);
            res.code(data.status).send(data);
        },

        teacher_classes: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await teacher_classes(fastify, req);
            res.code(data.status).send(data);
        },

        store: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await store(fastify, req);
            res.code(data.status).send(data);
        },

        all_class: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await all_class(fastify, req);
            res.code(data.status).send(data);
        },

        class_sections: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data: responseObject = await class_sections(fastify, req);
            res.code(data.status).send(data);
        },

        all_teacher: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await all_teacher(fastify, req);
            res.code(data.status).send(data);
        },

        class_rooms: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await class_rooms(fastify, req);
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
