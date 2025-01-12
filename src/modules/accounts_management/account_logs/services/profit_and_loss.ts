import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject, anyObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';
import { Op } from 'sequelize';

// Define an interface for the Category model
interface Category {
    title: string; // Add other properties if necessary
}

// Define an interface for AccountLog including its relationship with Category
interface AccountLog {
    amount?: number | undefined; // Allow amount to be undefined
    type?: 'income' | 'expense';
    date?: string;
    category?: Category; // Optional because it might not exist

    branch_id: number;
    account_category_id?: number;
    account_id?: number;
    account_period_id?: number;
    money_receipt_book_id?: number;
    receipt_no?: string;
    amount_in_text?: string;
}

// Define a type for category-wise totals
interface CategoryWiseTotals {
    total_income: number;
    total_expense: number;
}

interface Data2 {
    total_expense: number;
    total_income: number;
    total_income_query_days: number;
    total_expense_query_days: number;
    total_income_query_previous_days: number;
    total_expense_query_previous_days: number;
    category_wise_totals: Record<string, CategoryWiseTotals>; // Use Record to allow dynamic keys
}

async function journal(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let body = req.body as anyObject;
    let accountCategoriesModel = models.AccountCategoriesModel;

    let month1 = body.month1 || '2024-09-12'; // Start date
    let month2 = body.month2 || '2024-09-22'; // End date

    const endDate = new Date(month2);
    endDate.setDate(endDate.getDate() + 1); // Increment by one day
    const formattedEndDate = endDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD

    try {
        // Fetch all logs within the specified date range
        let data: AccountLog[] = await models.AccountLogsModel.findAll({
            where: {
                date: {
                    [Op.between]: [month1, formattedEndDate],
                },
            },
            include: [
                {
                    model: accountCategoriesModel,
                    as: 'category',
                },
            ],
            order: [['date', 'ASC']],
        });

        // Normalize data to ensure amount is always a number
        data = data.map((log) => ({
            amount: log.amount ?? 0, // Default to 0 if undefined
            type: log.type,
            branch_id: log.branch_id,
            date: log.date,
            category: log.category,
        }));

        // Initialize data2 object
        let data2: Data2 = {
            total_expense: 0,
            total_income: 0,
            total_income_query_days: 0,
            total_expense_query_days: 0,
            total_income_query_previous_days: 0,
            total_expense_query_previous_days: 0,
            category_wise_totals: {}, // New structure for category-wise totals
        };

        // Process fetched data to calculate category-wise totals
        data.forEach((log) => {
            const amount = log.amount; // Now guaranteed to be a number
            const categoryName = log.category?.title || 'Uncategorized'; // Use optional chaining

            if (log.type === 'income') {
                data2.total_income += amount || 0;
                data2.total_income_query_days += amount || 0;

                // Update category-wise totals
                if (!data2.category_wise_totals[categoryName]) {
                    data2.category_wise_totals[categoryName] = {
                        total_income: 0,
                        total_expense: 0,
                    };
                }
                data2.category_wise_totals[categoryName].total_income +=
                    amount || 0;
            } else if (log.type === 'expense') {
                data2.total_expense += amount || 0;
                data2.total_expense_query_days += amount || 0;

                // Update category-wise totals
                if (!data2.category_wise_totals[categoryName]) {
                    data2.category_wise_totals[categoryName] = {
                        total_income: 0,
                        total_expense: 0,
                    };
                }
                data2.category_wise_totals[categoryName].total_expense +=
                    amount || 0;
            }
        });
        // Convert category_wise_totals object to an array
        const categoryWiseTotalsArray = Object.entries(
            data2.category_wise_totals,
        ).map(([category, totals]) => ({
            category,
            ...totals,
        }));

        // Calculate previous totals before month1
        data2.total_income_query_previous_days =
            await models.AccountLogsModel.sum('amount', {
                where: {
                    type: 'income',
                    date: {
                        [Op.lt]: month1, // Less than month1
                    },
                },
            });

        data2.total_expense_query_previous_days =
            await models.AccountLogsModel.sum('amount', {
                where: {
                    type: 'expense',
                    date: {
                        [Op.lt]: month1, // Less than month1
                    },
                },
            });

        return response(200, 'data created', {
            data,
            data2,
            categoryWiseTotalsArray,
        });
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

export default journal;
