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
    let branchClassesModel = models.BranchClassesModel;
    let branchClassSubjectsModel = models.BranchClassSubjectsModel;
    let params = req.params as any;

    try {
        let data = await models.BranchClassSubjectTeachersModel.findAll({
            where: {
                branch_teacher_id: params.id,
            },
            include: [
                {
                    model: branchClassesModel,
                    as: 'a_class',
                },
                {
                    model: branchClassSubjectsModel,
                    as: 'subject', // Alias for the subject model
                    attributes: ['name'], // Only include the name attribute of the subject
                },
            ],
            attributes: {
                exclude: ['password'],
            },
        });

        if (data) {
            // Step 1: Group by class
            const groupedData = data.reduce((acc: any, item: any) => {
                const classId = item.a_class.id;

                if (!acc[classId]) {
                    acc[classId] = {
                        classDetails: item.a_class,
                        subjects: [],
                    };
                }

                acc[classId].subjects.push({
                    id: item.id,
                    branch_class_subject_id: item.branch_class_subject_id,
                    subject_name: item.subject?.name || null, // Include subject name if available
                    description: item.description,
                    branch_class_section_id: item.branch_class_section_id,
                    branch_class_room_id: item.branch_class_room_id,
                    status: item.status,
                    created_at: item.created_at,
                    updated_at: item.updated_at,
                });

                return acc;
            }, {});

            // Step 2: Convert the grouped data into an array
            const responseData = Object.values(groupedData);

            return response(200, 'data found', responseData);
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
