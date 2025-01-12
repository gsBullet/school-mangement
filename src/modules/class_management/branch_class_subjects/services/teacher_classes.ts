import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';
import { Sequelize } from 'sequelize';

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
    let userStudentInformationsModel = models.UserStudentInformationsModel; // Assuming this is your model
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
                    attributes: {
                        include: [
                            // Subquery to count students for each class
                            [
                                models.sequelize.literal(`(
                                    SELECT COUNT(*)
                                    FROM user_student_informations
                                    WHERE user_student_informations.s_class = a_class.id
                                )`),
                                'student_count',
                            ],
                        ],
                    },
                },
            ],
            attributes: {
                exclude: ['password'],
            },
        });

        if (data) {
            const groupedData = data.reduce((acc: any, item: any) => {
                const classId = item.a_class.id;

                if (!acc[classId]) {
                    acc[classId] = item.a_class;
                }

                return acc;
            }, {});

            const responseData = Object.values(groupedData);

            return response(200, 'data found', responseData);
        } else {
            throw new custom_error(
                'not founddfdsfds',
                404,
                'datadgfghf not found',
            );
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
