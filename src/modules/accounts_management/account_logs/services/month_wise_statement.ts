import { FastifyInstance, FastifyRequest } from 'fastify';
import { Op, Sequelize } from 'sequelize';
import { anyObject } from '../../../common_types/object';
import db from '../models/db'; // Your database connection setup
import response from '../helpers/response'; // Helper functions for response and error handling
import error_trace from '../helpers/error_trace'; // Helper functions for response and error handling
import custom_error from '../helpers/custom_error'; // Helper functions for response and error handling
import moment from 'moment/moment';

interface responseObject {
    status: number;
    message: string;
    data: {
        [key: string]: any;
    };
}

async function month_wise_statement(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let body = req.body as anyObject;
    let params = req.params as any;

    // Use the values from the request body or default values
    let month1 =
        body.month1 || moment().subtract(12, 'months').format('YYYY-MM');
    let month2 = moment().format('YYYY-MM');
    console.log('month 1, 2', month1, month2);
    // Format the dates to cover the entire month for `month2`
    const startOfMonth1 = moment(month1, 'YYYY-MM')
        .startOf('month')
        .format('YYYY-MM-DD');
    const endOfMonth2 = moment(month2, 'YYYY-MM')
        .endOf('month')
        .format('YYYY-MM-DD');

    try {
        // Query to calculate month-wise totals for income and expense
        let data = await models.AccountLogsModel.findAll({
            attributes: [
                [
                    Sequelize.fn('DATE_FORMAT', Sequelize.col('date'), '%Y-%m'),
                    'month',
                ], // Extract month and year
                [
                    Sequelize.literal(
                        "SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END)",
                    ),
                    'total_income',
                ],
                [
                    Sequelize.literal(
                        "SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END)",
                    ),
                    'total_expense',
                ],
            ],
            where: {
                date: {
                    // [Op.between]: [month1, month2],
                    [Op.between]: [startOfMonth1, endOfMonth2],
                },
                status: 'active',
            },
            group: ['month'],
            order: [['month', 'ASC']],
        });
        // Query to calculate the grand totals for income and expense
        const totals = await models.AccountLogsModel.findOne({
            attributes: [
                [
                    Sequelize.literal(
                        "SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END)",
                    ),
                    'grand_total_income',
                ],
                [
                    Sequelize.literal(
                        "SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END)",
                    ),
                    'grand_total_expense',
                ],
            ],
            where: {
                date: {
                    [Op.between]: [startOfMonth1, endOfMonth2], // Inclusive range
                },
                status: 'active',
            },
        });

        if (data.length > 0) {
            return response(200, 'Monthly totals fetched successfully', {
                data,
                grand_totals: totals,
            });
        } else {
            throw new custom_error(
                'not found',
                404,
                'No data found for the given period',
            );
        }
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.params);
        if (error instanceof custom_error) {
            error.uid = uid;
        } else {
            throw new custom_error('server error', 500, error.message, uid);
        }
        throw error;
    }
}

export default month_wise_statement;
