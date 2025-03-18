import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

interface RoutineDay {
    id: number;
    day: string | null;
    day_name: string;
    day_no: number;
    start_time: string;
    end_time: string;
    branch_class_room_id: number | null;
}

interface Subject {
    id: number;
    name: string;
    code: string;
    routine_day: RoutineDay[];
}

interface AClass {
    id: number;
    name: string;
    code: string;
}

interface OutputItem {
    subject: string;
    class: string;
    rowspan: number;
    [key: string]: any;
}

async function get_teacher_class_subjects(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    const models = await db();
    const params = req.params as { id: number };
    console.log(params, 'teacher-branch-sub-class');

    try {
        const data = await models.BranchClassSubjectTeachersModel.findAll({
            where: {
                branch_teacher_id: params.id,
            },
            include: [
                {
                    model: models.BranchClassesModel,
                    as: 'a_class',
                    attributes: ['id', 'name', 'code'],
                },
                {
                    model: models.BranchClassSubjectsModel,
                    as: 'subject',
                    include: [
                        {
                            model: models.BranchClassRoutineDayTimesModel,
                            as: 'routine_day',
                            attributes: [
                                'id',
                                'day',
                                'day_name',
                                'day_no',
                                'start_time',
                                'end_time',
                                'branch_class_room_id',
                            ],
                        },
                    ],
                    attributes: ['id', 'name', 'code'],
                },
            ],
            attributes: ['id'],
        });

        if (data) {
            const WEEK_DAYS = [
                'saturday',
                'sunday',
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
            ];

            const to12Hour = (timeStr: string) => {
                const [h, m] = timeStr.split(':');
                const hour = parseInt(h);
                const period = hour >= 12 ? 'pm' : 'am';
                const hour12 = hour % 12 === 0 ? 12 : hour % 12;
                return `${hour12}:${m}${period}`;
            };

            const capitalize = (str: string) =>
                str.charAt(0).toUpperCase() + str.slice(1);

            // Step 1: Flatten the data
            const flattened = data.flatMap((item: any) => {
                if (item.subject && item.subject.name) {
                    const base: OutputItem = {
                        subject: item.subject.name.toLowerCase(),
                        class: item.a_class.name.toLowerCase(),
                        rowspan: 1, // default, will update later
                    };

                    WEEK_DAYS.forEach((day) => {
                        base[capitalize(day)] = null;
                    });

                    item.subject.routine_day?.forEach((r: any) => {
                        const dayKey = capitalize(r.day_name);
                        base[dayKey] = {
                            time: `${to12Hour(r.start_time)} - ${to12Hour(r.end_time)}`,
                            class_room: r.branch_class_room_id ?? 'N/A',
                        };
                    });

                    return base;
                } else {
                    return [];
                }
            });

            // Step 2: Count occurrences of each subject across different classes
            const subjectCountMap = new Map<string, number>();

            flattened.forEach((item) => {
                const subjectClassKey = `${item.subject}_${item.class}`;
                if (!subjectCountMap.has(item.subject)) {
                    subjectCountMap.set(item.subject, 0);
                }
                subjectCountMap.set(
                    item.subject,
                    subjectCountMap.get(item.subject)! + 1,
                );
            });

            // Step 3: Apply the rowspan for each subject
            const finalOutput: OutputItem[] = flattened.map((item) => {
                // Get the count of occurrences of the subject
                const rowspan = subjectCountMap.get(item.subject)!;

                return {
                    ...item,
                    rowspan: rowspan,
                };
            });
            // Return output instead of data
            return response(200, 'data found', finalOutput);
        } else {
            throw new custom_error('not found', 404, 'data not found');
        }
    } catch (error: any) {
        const uid = await error_trace(models, error, req.url, req.params);
        if (error instanceof custom_error) {
            error.uid = uid;
        } else {
            throw new custom_error('server error', 500, error.message, uid);
        }
        throw error;
    }
}

export default get_teacher_class_subjects;
