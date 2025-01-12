import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';
import { Op } from 'sequelize';

async function getSevenDaysData(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();

    // Calculate the fixed 7-day range (e.g., from today)
    const today = new Date(); // Current date
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 days before today

    // Format dates for the SQL query
    const formattedStartDay = sevenDaysAgo.toISOString().split('T')[0];
    const formattedEndDay = today.toISOString().split('T')[0];

    console.log('Formatted Start Day:', formattedStartDay);
    console.log('Formatted End Day:', formattedEndDay);

    try {
        // Query the database for the fixed 7-day range
        let data = await models.AccountLogsModel.findAll({
            where: {
                date: {
                    [Op.between]: [formattedStartDay, formattedEndDay],
                },
                amount: {
                    [Op.ne]: 0, // Only fetch records where 'amount' is NOT zero
                },
                type: {
                    [Op.in]: ['expense', 'income'], // Filter data by type
                },
            },
            attributes: ['id', 'date', 'amount', 'type'], // Only return these fields
            order: [['date', 'ASC']], // Sort data by date
        });

        if (data && data.length > 0) {
            // Process the data into the desired format
            const result: any = {
                income: {},
                expense: {},
            };

            data.forEach((entry: any) => {
                const date = new Date(entry.date);
                const dayOfWeek = date
                    .toLocaleDateString('en-US', {
                        weekday: 'short', // e.g., "Sun", "Mon"
                    })
                    .toLowerCase();

                const type = entry.type; // "income" or "expense"
                const amount = entry.amount;

                if (!result[type][dayOfWeek]) {
                    result[type][dayOfWeek] = 0;
                }
                result[type][dayOfWeek] += amount; // Sum amounts for the same day
            });

            return response(200, 'Data fetched successfully', result);
        } else {
            throw new custom_error(
                'Not Found',
                404,
                'No data found for the last 7 days',
            );
        }
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.params);
        if (error instanceof custom_error) {
            error.uid = uid;
        } else {
            throw new custom_error('Server Error', 500, error.message, uid);
        }
        throw error;
    }
}

export default getSevenDaysData;
