import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

async function details(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let params = req.params as any;
    let studentsModel = models.UserStudentsModel;
    let studentInformationsModel = models.UserStudentInformationsModel;
    let classesModel = models.BranchClassesModel;
    console.log('children params id', params.id);

    try {
        let data = await models.UserStudentParentsModel.findAll({
            where: { user_parent_id: params.id },
            attributes: {
                exclude: ['password'],
            },
            include: [
                {
                    model: studentsModel,
                    as: 'children_basic',
                },
                {
                    model: studentInformationsModel,
                    as: 'children_info',
                    include: [
                        {
                            model: classesModel,
                            as: 'children_class',
                        },
                    ],
                },
            ],
        });

        if (data) {
            return response(200, 'data founded', data);
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
