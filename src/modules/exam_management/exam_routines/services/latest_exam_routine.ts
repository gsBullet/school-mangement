import { FastifyInstance, FastifyRequest } from 'fastify';
import db from '../models/db';
import response from '../helpers/response';
import { responseObject } from '../../../common_types/object';
import custom_error from '../helpers/custom_error';
import error_trace from '../helpers/error_trace';

async function latest_exam_routine(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    const models = await db();
    const body = (await req.body) as any;

    try {
        let data = await models.ExamRoutinesModel.findAll({
            where: {
                branch_id: body.branch_id,
            },
            include: [
                {
                    model: models.BrachClassSubjectsModel,
                    as: 'subjects',
                    attributes: ['branch_class_id', 'name', 'code'],
                },
                {
                    model: models.ExamGuardPlansModel,
                    as: 'guard_plan',
                    attributes: ['building_id', 'room_id', 'subject_id'],
                },
            ],

            attributes: [
                'branch_id',
                'exam_id',
                'subject_id',
                'start_time',
                'end_time',
                'date',
            ],
        });

        if (data) {
            let result = data.map((item: any) => ({
                time: item.start_time,
                subject: item.subjects.name,
                room: item.guard_plan.room_id,
                building: item.guard_plan.building_id,
            }));

            return response(200, 'data created', result);
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

export default latest_exam_routine;
