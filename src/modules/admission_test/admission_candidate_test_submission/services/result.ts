import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

async function result(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let params = req.params as any;
    let body = req.body as any;

    try {
        let data = await models.AssetAuditItemsModel.findAll({
            where: {
                // class: body.class,
                branch_id: body.branch_id,
                // student_id: body.student_id,
            },
            include: [
                {
                    model: models.AdmissionTestRegistrationStudentModel,
                    as: 'student',
                    attributes: ['full_name'],
                },
                {
                    model: models.AdmissionTestQuestionsModel,
                    as: 'question_mark',
                    attributes: ['mark'],
                },
            ],
            attributes: [
                'id',
                'branch_id',
                'student_id',
                'class',
                'marks',
                'is_pass',
            ],
        });
        console.log(data);

        if (data) {
            const groupedResult = data.reduce((acc: any, curr: any) => {
                // Create a unique key for each combination of branch_id, student_id, and class
                const key = `${curr.branch_id}-${curr.student_id}-${curr.class}`;

                // If the key doesn't exist, initialize it
                if (!acc[key]) {
                    acc[key] = {
                        branch_id: curr.branch_id,
                        student_id: curr.student_id,
                        class: curr.class,
                        total_marks: 0,
                        marks: 0,
                        student_name: curr.student.length
                            ? curr.student[0].full_name
                            : null,
                        question_answer: 0,
                        correct_answer: 0,
                        wrong_answer: 0,
                    };
                }

                // Add the current marks to the total for this group
                acc[key].marks += curr.marks;
                acc[key].total_marks += curr.question_mark[0].mark;

                acc[key].question_answer += 1;
                if (curr.is_pass) {
                    acc[key].correct_answer += 1;
                } else {
                    acc[key].wrong_answer += 1;
                }

                return acc;
            }, {});
            // return response(200, 'data found', groupedResult);
            return response(200, 'data found', Object.values(groupedResult));
            // return response(200, 'data found', { groupedResult, data });
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

export default result;
