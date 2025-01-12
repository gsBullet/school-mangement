import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';
import moment from 'moment';
import { Op } from 'sequelize';

async function get_academic_event_by_month(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let params = req.params as any;
    let body = (await req.body) as any;

    const { month, branch_id } = body;

    const startDate = moment(month, 'MMM-YYYY')
        .startOf('month')
        .format('YYYY-MM-DD');
    const endDate = moment(month, 'MMM-YYYY')
        .endOf('month')
        .format('YYYY-MM-DD');

    try {
        // Fetch the events for the specified month
        const events = await models.AcademicCalendarsModel.findAll({
            where: {
                branch_id,
                start_date: {
                    [Op.gte]: startDate,
                    [Op.lte]: endDate,
                },
            },
            attributes: [
                'branch_id',
                'start_date',
                'end_date',
                'event_name',
                'days',
            ],
        });

        // Generate all dates in the specified month
        const daysInMonth: {
            date: string;
            event_name: string | null;
            days: number | null; // Corrected property name
        }[] = [];
        let currentDay = moment(startDate);

        while (currentDay.isSameOrBefore(endDate)) {
            daysInMonth.push({
                date: currentDay.format('YYYY-MM-DD'),
                event_name: null,
                days: null, // Corrected property name
            });
            currentDay.add(1, 'day');
        }

        // Map events to their respective days with incrementing `days` values
        events.forEach((event: any) => {
            const eventStart = moment(event.start_date);
            const eventEnd = moment(event.end_date);

            let dayCounter = 1; // Initialize day counter for each event

            daysInMonth.forEach((day) => {
                const dayMoment = moment(day.date);

                if (dayMoment.isBetween(eventStart, eventEnd, 'day', '[]')) {
                    day.event_name = event.event_name;
                    day.days = dayCounter; // Corrected property name
                    dayCounter++;
                }
            });
        });
        return response(
            200,
            'Data retrieved for the specified month',
            daysInMonth,
        );
    } catch (error: any) {
        console.error('Error occurred:', error);

        const uid = await error_trace(models, error, req.url, req.params);
        if (error instanceof custom_error) {
            error.uid = uid;
        } else {
            throw new custom_error('Server Error', 500, error.message, uid);
        }
        throw error;
    }
}

export default get_academic_event_by_month;
