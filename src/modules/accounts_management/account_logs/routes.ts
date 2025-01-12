'use strict';
import { FastifyInstance } from 'fastify';
import controller from './controller';
import check_auth from '../../auth_management/authetication/services/check_auth';

module.exports = async function (fastify: FastifyInstance) {
    let prefix: string = '/account-logs';
    const controllerInstance = controller(fastify);

    fastify
        // .addHook('onRequest', check_auth)
        .get(`${prefix}`, controllerInstance.all)
        .post(`${prefix}/credit`, controllerInstance.credit)
        .post(
            `${prefix}/month-wise-statement`,
            controllerInstance.month_wise_statement,
        )
        .post(
            `${prefix}/payment-history/:id`,
            controllerInstance.payment_history,
        )
        .get(`${prefix}/income-statement`, controllerInstance.income_statement)
        .post(`${prefix}/journal`, controllerInstance.journal)
        .post(`${prefix}/profit-loss`, controllerInstance.profit_loss)
        .post(`${prefix}/debit`, controllerInstance.debit)
        .post(`${prefix}/store`, controllerInstance.store)
        .post(`${prefix}/fees-store`, controllerInstance.fees_store)
        .post(`${prefix}/income-store`, controllerInstance.income_store)
        .post(`${prefix}/expense-store`, controllerInstance.expense_store)
        .get(`${prefix}/account/:id`, controllerInstance.account_details)
        .get(
            `${prefix}/get-seven-day-inc-exp`,
            controllerInstance.get_seven_day_inc_exp,
        )
        .get(`${prefix}/categories`, controllerInstance.categories)
        .get(`${prefix}/periods`, controllerInstance.account_periods)
        .get(`${prefix}/receipt-book`, controllerInstance.receipt_books)
        .get(`${prefix}/accounts`, controllerInstance.accounts)
        .post(`${prefix}/fees-payment`, controllerInstance.fees_payment)
        .post(`${prefix}/update`, controllerInstance.update)
        .post(`${prefix}/soft-delete`, controllerInstance.soft_delete)
        .post(`${prefix}/restore`, controllerInstance.restore)
        .post(`${prefix}/destroy`, controllerInstance.destroy)
        .post(`${prefix}/import`, controllerInstance.import)
        .get(`${prefix}/:id`, controllerInstance.find);
};
