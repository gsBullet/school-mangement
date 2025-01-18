import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import moment from 'moment';
import { Op } from 'sequelize';
import response from '../helpers/response';
import custom_error from '../helpers/custom_error';
import error_trace from '../helpers/error_trace';
import db from '../models/db';

async function get_full_year_attendence(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let body = (await req.body) as any;

    let { currentYear, class_id, branch_student_id } = body;

    // Calculate start and end dates of the year
    const startDate = moment(`${currentYear}-01-01`, 'YYYY-MM-DD');
    const endDate = moment(`${currentYear}-12-31`, 'YYYY-MM-DD');

    interface AttendanceRecord {
        student_id: number;
        year: number; // The year (e.g., 2025)
        months: {
            month: string; // Month name (e.g., "January")
            days: {
                day: number; // Numeric day of the month (e.g., 1, 2, 3)
                status: number; // 1 for present, 0 for absent
                date: string; // Full date in "YYYY-MM-DD" format
                attendance_status: string; // "present" or "absent"
                updated_at: string; //
            }[];
        }[];
    }

    interface AttendanceMap {
        [key: number]: AttendanceRecord;
    }
    try {
        let data = await models.StudentAttendancesModel.findAll({
            where: {
                branch_student_id: branch_student_id,
                class_id: class_id,
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
                'updated_at',
            ],
        });

        if (!data || data.length === 0) {
            throw new custom_error('not found', 404, 'data not found');
        }

        // Generate an array of all dates in the year
        const datesInYear: string[] = [];
        let current = startDate.clone();
        while (current.isSameOrBefore(endDate)) {
            datesInYear.push(current.format('YYYY-MM-DD'));
            current.add(1, 'day');
        }

        // Initialize a map to group by student_id
        const attendanceMap: AttendanceMap = {};

        data.forEach((record: any) => {
            const studentId = record.branch_student_id;
            const attendanceDate = moment(record.date, 'YYYY-MM-DD'); // Convert date
            const monthKey = attendanceDate.format('MMMM'); // Month name (e.g., "January")
            const day = parseInt(attendanceDate.format('DD'), 10); // Day of the month as number

            // If the student_id doesn't exist, initialize it
            if (!attendanceMap[studentId]) {
                attendanceMap[studentId] = {
                    student_id: studentId,
                    year: currentYear,
                    months: [],
                };
            }

            // Check if the month exists in the student's record
            let monthRecord = attendanceMap[studentId].months.find(
                (m) => m.month === monthKey,
            );

            // If the month doesn't exist, initialize it
            if (!monthRecord) {
                monthRecord = { month: monthKey, days: [] };
                attendanceMap[studentId].months.push(monthRecord);
            }

            // Add attendance data for the specific day if not already present
            const existingDay = monthRecord.days.find(
                (d) => d.date === attendanceDate.format('YYYY-MM-DD'),
            );

            if (!existingDay) {
                monthRecord.days.push({
                    day,
                    status: record.attendance_status === 'present' ? 1 : 0, // Convert to 1 (present) or 0 (absent)
                    date: attendanceDate.format('YYYY-MM-DD'),
                    attendance_status: record.attendance_status,
                    updated_at: record.updated_at || '', // Add updated_at if available
                });
            }
        });

        // Ensure every student has a default attendance record for all days in the year
        Object.values(attendanceMap).forEach((studentRecord) => {
            datesInYear.forEach((date) => {
                const attendanceDate = moment(date, 'YYYY-MM-DD');
                const monthKey = attendanceDate.format('MMMM'); // Month name
                const day = parseInt(attendanceDate.format('DD'), 10);

                // Check if the month exists
                let monthRecord = studentRecord.months.find(
                    (m: {
                        month: string;
                        days: {
                            day: number;
                            status: number;
                            date: string;
                            attendance_status: string;
                            updated_at: string;
                        }[];
                    }) => m.month === monthKey,
                );

                // If the month doesn't exist, initialize it
                if (!monthRecord) {
                    monthRecord = { month: monthKey, days: [] };
                    studentRecord.months.push(monthRecord);
                }

                // Check if the day exists
                const dayExists = monthRecord.days.some(
                    (d: {
                        day: number;
                        status: number;
                        date: string;
                        attendance_status: string;
                        updated_at: string;
                    }) => d.date === date,
                );

                // If the day doesn't exist, add a default record
                if (!dayExists) {
                    monthRecord.days.push({
                        day,
                        status: 0, // Default to 0 (absent)
                        date: attendanceDate.format('YYYY-MM-DD'),
                        attendance_status: 'absent',
                        updated_at: '', // Default to an empty string
                    });
                }
            });

            // Sort the days array for each month
            studentRecord.months.forEach((month: any) => {
                month.days.sort((a: any, b: any) => a.day - b.day);
            });
        });

        return response(
            200,
            'find all student attendance',
            Object.values(attendanceMap),
        );
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

export default get_full_year_attendence;
