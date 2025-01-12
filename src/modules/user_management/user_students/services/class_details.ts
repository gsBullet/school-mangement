import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

async function class_details(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let informationsModel = models.UserStudentInformationsModel;
    let studentsModel = models.UserStudentsModel;
    let classesModel = models.BranchClassesModel;
    let classStudentsModel = models.BranchClassStudentsModel;
    let params = req.params as any;
    console.log('this is class ok', params.id);

    try {
        let data = await classStudentsModel.findAll({
            where: {
                branch_class_id: params.id,
            },
            attributes: {
                exclude: ['password'],
            },
            include: [
                {
                    model: studentsModel,
                    as: 'branchstudent',
                },
                {
                    model: informationsModel,
                    as: 'infostudent',
                    include: [
                        {
                            model: classesModel,
                            as: 'class',
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

export default class_details;
