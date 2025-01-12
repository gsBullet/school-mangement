import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

async function getBranchClassRoutine(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let branchClassSubjectsModel = models.BranchClassSubjectsModel;
    let branchClassRoutinesModel = models.BranchClassRoutinesModel;
    let branchClassRoutineDayTimesModel =
        models.BranchClassRoutineDayTimesModel;
    let branchTeachersModel = models.BranchTeachersModel;
    let userTeachersModel = models.UserTeacherModel;
    let branchClassRoomsModel = models.BranchClassRoomsModel;
    let branchBuildingRoomsModel = models.BranchBuildingRoomsModel;
    let body = (await req.body) as any;
    let params = req.params as any;

    try {
        let data = await branchClassSubjectsModel.findAll({
            where: {
                branch_class_id: body.branch_class_id,
                branch_id: body.branch_id,
                branch_class_section_id: body.branch_class_section_id,
            },
            include: [
                {
                    model: branchClassRoutinesModel,
                    as: 'subject_routine',
                    attributes: [
                        'branch_class_subject_id',
                        'branch_class_section_id',
                    ],
                    include: [
                        {
                            model: branchClassRoutineDayTimesModel,
                            as: 'day_time',
                            attributes: [
                                'branch_class_routine_id',
                                'branch_teacher_id',
                                'start_time',
                                'end_time',
                            ],
                        },
                    ],
                },
                {
                    model: models.BranchClassSectionsModel,
                    as: 'subject_section',
                    attributes: ['id', 'title'],
                },

                {
                    model: models.BranchClassesModel,
                    as: 'subject_class',
                    attributes: ['id', 'name'],
                },
            ],
            attributes: ['id', 'level', 'name', 'code'],
        });

        if (data) {
            return response(200, 'data foundeds', data);
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

export default getBranchClassRoutine;
