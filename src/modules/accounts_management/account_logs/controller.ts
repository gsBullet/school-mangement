'use strict';
import fastify, {
    FastifyReply,
    FastifyRequest,
    FastifyInstance,
} from 'fastify';
import all from './services/all';
import details from './services/details';
import categories from './services/categories';
import accounts from './services/accounts';
import receipt_books from './services/receipt_books';
import account_periods from './services/account_periods';
import soft_delete from './services/soft_delete';
import store from './services/store';
import fees_payment from './services/fees_payment';
import { responseObject } from '../../common_types/object';
import update from './services/update';
import restore from './services/restore';
import destroy from './services/destroy';
import data_import from './services/import';
import account_details from './services/account_details';
import income_store from './services/income_store';
import expense_store from './services/expense_store';
import credit from './services/credit';
import debit from './services/debit';
import income_statement from './services/income_statement';
import journal from './services/journal';
import profit_loss from './services/profit_and_loss';
import fees_store from './services/fees_store';
import payment_history from './services/payment_history';
import month_wise_statement from './services/month_wise_statement';
import getSevenDaysData from './services/get_seven_days_inc_exp';

export default function (fastify: FastifyInstance) {
    return {
        all: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await all(fastify, req);
            res.code(data.status).send(data);
        },

        month_wise_statement: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data: responseObject = await month_wise_statement(fastify, req);
            res.code(data.status).send(data);
        },

        find: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await details(fastify, req);
            res.code(data.status).send(data);
        },

        income_statement: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await income_statement(fastify, req);
            res.code(data.status).send(data);
        },

        profit_loss: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await profit_loss(fastify, req);
            res.code(data.status).send(data);
        },

        fees_store: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await fees_store(fastify, req);
            res.code(data.status).send(data);
        },

        journal: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await journal(fastify, req);
            res.code(data.status).send(data);
        },

        credit: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await credit(fastify, req);
            res.code(data.status).send(data);
        },

        payment_history: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await payment_history(fastify, req);
            res.code(data.status).send(data);
        },

        debit: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await debit(fastify, req);
            res.code(data.status).send(data);
        },

        account_details: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await account_details(fastify, req);
            res.code(data.status).send(data);
        },
        get_seven_day_inc_exp: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await getSevenDaysData(fastify, req);
            res.code(data.status).send(data);
        },

        categories: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await categories(fastify, req);
            res.code(data.status).send(data);
        },

        receipt_books: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await receipt_books(fastify, req);
            res.code(data.status).send(data);
        },

        account_periods: async function (
            req: FastifyRequest,
            res: FastifyReply,
        ) {
            let data = await account_periods(fastify, req);
            res.code(data.status).send(data);
        },

        accounts: async function (req: FastifyRequest, res: FastifyReply) {
            let data = await accounts(fastify, req);
            res.code(data.status).send(data);
        },

        store: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await store(fastify, req);
            res.code(data.status).send(data);
        },

        income_store: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await income_store(fastify, req);
            res.code(data.status).send(data);
        },

        expense_store: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await expense_store(fastify, req);
            res.code(data.status).send(data);
        },

        fees_payment: async function (req: FastifyRequest, res: FastifyReply) {
            let data: responseObject = await fees_payment(fastify, req);
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
