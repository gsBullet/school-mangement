import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import moment from 'moment';
import { Op } from 'sequelize';
import response from '../helpers/response';
import custom_error from '../helpers/custom_error';
import error_trace from '../helpers/error_trace';
import db from '../models/db';

async function get_30_days_attendence(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let body = (await req.body) as any;
    console.log(body);

    let { month, class_id, subject_id, branch_id } = body;

    // Calculate start and end dates of the month as moment objects
    const startDate = moment(month, 'MMM-YYYY').startOf('month');
    const endDate = moment(month, 'MMM-YYYY').endOf('month');

    interface AttendanceRecord {
        student_id: number;
        attendance: {
            [key: string]: {
                day: string;
                status: number;
            };
        };
    }

    interface AttendanceMap {
        [key: number]: AttendanceRecord;
    }

    try {
        let data = await models.StudentAttendancesModel.findAll({
            where: {
                subject_id: subject_id,
                class_id: class_id,
                branch_id: branch_id,
                status: 'active',
                date: {
                    [Op.between]: [
                        startDate.format('YYYY-MM-DD'),
                        endDate.format('YYYY-MM-DD'),
                    ],
                },
            },
            attributes: [
                'branch_id',
                'class_id',
                'branch_student_id',
                'attendance_status',
                'date',
            ],
        });

        if (data) {
            // Generate an array of all dates in the month
            const datesInMonth: string[] = [];
            let current = startDate.clone(); // Ensure startDate is a moment object
            while (current.isSameOrBefore(endDate)) {
                datesInMonth.push(current.format('YYYY-MM-DD'));
                current.add(1, 'day');
            }

            // Initialize a map to group by student_id
            const attendanceMap: Record<number, any> = {};

            data.forEach((record: any) => {
                const studentId = record.branch_student_id;
                const attendanceDate = moment(record.date, 'YYYY-MM-DD'); // Convert date
                const day = attendanceDate.format('ddd'); // Get day name (e.g., "Fri")
                const dateKey = attendanceDate.format('DD'); // Get day of the month (e.g., "10")

                // If the student_id doesn't exist, initialize it
                if (!attendanceMap[studentId]) {
                    attendanceMap[studentId] = {
                        student_id: studentId,
                        attendance: {},
                    };
                }

                // Add attendance data for the specific date
                attendanceMap[studentId].attendance[dateKey] = {
                    date: parseInt(dateKey, 10), // Store date as a number
                    day: day,
                    status: record.attendance_status === 'present' ? 1 : 0, // Convert to 1 (present) or 0 (absent)
                };
            });

            // Ensure every student has a default attendance record for all days in the month
            Object.values(attendanceMap).forEach((studentRecord: any) => {
                datesInMonth.forEach((date) => {
                    const dateKey = moment(date).format('DD');
                    const day = moment(date).format('ddd');

                    // If no attendance data exists for this date, default to 0 (absent)
                    if (!studentRecord.attendance[dateKey]) {
                        studentRecord.attendance[dateKey] = {
                            date: parseInt(dateKey, 10), // Store date as a number
                            day: day,
                            status: 0, // Default to 0 (absent)
                        };
                    }
                });
            });

            return response(
                200,
                'find all student attendance',
                Object.values(attendanceMap),
            );
        } else {
            throw new custom_error('not found', 404, 'data not found');
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

export default get_30_days_attendence;
