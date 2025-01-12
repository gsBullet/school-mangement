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
import login from './services/login';
import logout from './services/logout';
import forget from './services/forget';
import change_password from './services/change_password';
import profile from './services/student_profile';
import admit_student_store from './services/admit_student_store';
import students_details from './services/student_details';
import full_details from './services/full_details';
import class_details from './services/class_details';
import class_routine_details from './services/class_routine_details';
import all_class from './services/all_class';
import classes from './services/classes';
import shifts from './services/shifts';
import branches from './services/branches';
import sections from './services/sections';
import full_details_update from './services/admit_student_update';
import academic_informations from './services/academic_informations';
import basic_informations from './services/basic_informations';
import documents from './services/documents';
import skills from './services/skills';
import languages from './services/languages';
import parents from './services/parents';
import contact_numbers from './services/contact_numbers';
import fees_categories from './services/fees_categoies';
import student_class from './services/student_class';
import childrens from './services/childrens';
import educational_backgrounds from './services/educational_backgrounds';
import pre_info from './services/pre_info';
import single_student_details from './services/single_student_details';
import class_wise_student from './services/class_wise_student';
import just_check from './services/just_check';
import children_details from './services/children_details';

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

        children_details: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await children_details(fastify, req);
            res.code(data.status).send(data);
        },

        childrens: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await childrens(fastify, req);
            res.code(data.status).send(data);
        },

        single_student_details: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await single_student_details(fastify, req);
            res.code(data.status).send(data);
        },

        pre_info: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await pre_info(fastify, req);
            res.code(data.status).send(data);
        },

        student_class: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await student_class(fastify, req);
            res.code(data.status).send(data);
        },

        class_wise_student: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await class_wise_student(fastify, req);
            res.code(data.status).send(data);
        },

        fees_categories: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await fees_categories(fastify, req);
            res.code(data.status).send(data);
        },

        academic_informations: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await academic_informations(fastify, req);
            res.code(data.status).send(data);
        },

        basic_informations: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await basic_informations(fastify, req);
            res.code(data.status).send(data);
        },

        documents: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await documents(fastify, req);
            res.code(data.status).send(data);
        },

        parents: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await parents(fastify, req);
            res.code(data.status).send(data);
        },

        skills: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await skills(fastify, req);
            res.code(data.status).send(data);
        },

        languages: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await languages(fastify, req);
            res.code(data.status).send(data);
        },

        contact_numbers: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await contact_numbers(fastify, req);
            res.code(data.status).send(data);
        },

        educational_backgrounds: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await educational_backgrounds(fastify, req);
            res.code(data.status).send(data);
        },

        find_student: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await students_details(fastify, req);
            res.code(data.status).send(data);
        },

        full_details: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await full_details(fastify, req);
            res.code(data.status).send(data);
        },

        just_check: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await just_check(fastify, req);
            res.code(data.status).send(data);
        },

        all_class: async function (req: FastifyRequest, res: FastifyReply) {
            // res.code(200).send('ldsfjdls');
            let data = await all_class(fastify, req);
            res.code(data.status).send(data);
        },

        classes: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await classes(fastify, req);
            res.code(data.status).send(data);
        },

        shifts: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await shifts(fastify, req);
            res.code(data.status).send(data);
        },

        branches: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await branches(fastify, req);
            res.code(data.status).send(data);
        },

        sections: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await sections(fastify, req);
            res.code(data.status).send(data);
        },
        class_details: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await class_details(fastify, req);
            res.code(data.status).send(data);
        },
        class_routine_details: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await class_routine_details(fastify, req);
            res.code(data.status).send(data);
        },

        full_details_update: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await full_details_update(fastify, req);
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

        login: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await login(fastify, req);
            res.code(data.status).send(data);
        },

        logout: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await logout(fastify, req);
            res.code(data.status).send(data);
        },

        forget: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await forget(fastify, req);
            res.code(data.status).send(data);
        },

        profile: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await profile(fastify, req);
            res.code(data.status).send(data);
        },

        admit_student: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await admit_student_store(fastify, req);
            res.code(data.status).send(data);
        },

        change_password: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await change_password(fastify, req);
            res.code(data.status).send(data);
        },
        // export: async function (req: FastifyRequest, res: FastifyReply) {},
    };
}
