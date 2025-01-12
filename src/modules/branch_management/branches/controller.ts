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
import admins from './services/admins';
import admin from './services/admin';
import staffs from './services/staffs';
import staff from './services/staff';
import teachers from './services/teachers';
import teacher from './services/teacher';
import students from './services/students';
import parents from './services/parents';
import background from './services/student_edu_background';
import student_information from './services/student_information';
import staff_information from './services/staff_information';
import teacher_information from './services/teacher_information';
import parent_information from './services/parent_information';
import drivers from './services/drivers';
import driver from './services/driver';
import branches from './services/branches';

export default function (fastify: FastifyInstance) {
    return {
        all: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await all(fastify, req);
            res.code(data.status).send(data);
        },
        branches: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await branches(fastify, req);
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

        admins: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await admins(fastify, req);
            res.code(data.status).send(data);
        },

        admin: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await admin(fastify, req);
            res.code(data.status).send(data);
        },

        staffs: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await staffs(fastify, req);
            res.code(data.status).send(data);
        },

        staff: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await staff(fastify, req);
            res.code(data.status).send(data);
        },

        teachers: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await teachers(fastify, req);
            res.code(data.status).send(data);
        },

        teacher: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await teacher(fastify, req);
            res.code(data.status).send(data);
        },

        students: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await students(fastify, req);
            res.code(data.status).send(data);
        },

        parents: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await parents(fastify, req);
            res.code(data.status).send(data);
        },

        background: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await background(fastify, req);
            res.code(data.status).send(data);
        },

        student_information: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await student_information(fastify, req);
            res.code(data.status).send(data);
        },

        staff_information: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await staff_information(fastify, req);
            res.code(data.status).send(data);
        },

        teacher_information: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await teacher_information(fastify, req);
            res.code(data.status).send(data);
        },

        parent_information: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await parent_information(fastify, req);
            res.code(data.status).send(data);
        },

        drivers: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await drivers(fastify, req);
            res.code(data.status).send(data);
        },

        driver: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await driver(fastify, req);
            res.code(data.status).send(data);
        },

        // export: async function (req: FastifyRequest, res: FastifyReply) {},
    };
}
