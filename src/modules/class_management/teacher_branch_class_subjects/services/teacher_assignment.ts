import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

// async function details(
//     fastify_instance: FastifyInstance,
//     req: FastifyRequest,
// ): Promise<responseObject> {
//     throw new Error('500 test');
// }

async function details(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let branchClassSubjectsModel = models.BranchClassSubjectsModel;
    let params = req.params as any;

    try {
        let data = await models.BranchClassSubjectTeachersModel.findAll({
            where: {
                branch_teacher_id: 1, // Filter by teacher ID
                branch_class_id: params.id, // Use dynamic teacher ID
            },
            include: [
                {
                    model: branchClassSubjectsModel,
                    as: 'subject', // Alias for the subject model
                    attributes: ['id', 'name'], // Include both id and name attributes of the subject
                },
            ],
            attributes: [
                [
                    models.sequelize.fn(
                        'COUNT',
                        models.sequelize.col('subject.name'),
                    ),
                    'subject_count',
                ],
            ],
            group: ['subject.id', 'subject.name'], // Group by subject.id to get subject_id in the result
            raw: true,
        });

        if (data) {
            const subjectsData = data.map((item: any) => ({
                subject_id: item['subject.id'], // Get subject ID
                subject_name: item['subject.name'], // Get subject name
                count: item.subject_count, // Get subject count
            }));

            return response(200, 'data found', subjectsData);
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

export default details;
