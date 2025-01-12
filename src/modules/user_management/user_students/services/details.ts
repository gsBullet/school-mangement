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
    let educationalBackgroundsModel =
        models.UserStudentEducationalBackgroundsModel;
    let informationsModel = models.UserStudentInformationsModel;
    let studentsModel = models.UserStudentsModel;
    let documentTitlesModel = models.UserStudentDocumentTitlesModel;
    let documentValuesModel = models.UserStudentDocumentValuesModel;
    let contactNumbersModel = models.UserStudentContactNumbersModel;
    let skillsModel = models.UserStudentSkillsModel;
    let languagesModel = models.UserStudentLanguagesModel;
    let studentParentsModel = models.UserStudentParentsModel;
    let parentsModel = models.UserParentsModel;
    let branchClassesModel = models.BranchClassesModel;
    let branchClasseSectionsModel = models.BranchClassSectionsModel;
    let branchClasseShiftsModel = models.BranchClassShiftsModel;
    let params = req.params as any;

    try {
        let data = await studentsModel.findOne({
            where: {
                id: params.id,
            },
            attributes: {
                exclude: ['password'],
            },
            include: [
                {
                    model: educationalBackgroundsModel,
                    as: 'educational_background',
                },
                {
                    model: informationsModel,
                    as: 'student_info',
                    include: [
                        {
                            model: branchClassesModel,
                            as: 'class',
                        },
                        {
                            model: branchClasseSectionsModel,
                            as: 'student_section',
                        },
                        {
                            model: branchClasseShiftsModel,
                            as: 'student_shift',
                        },
                    ],
                },
                {
                    model: contactNumbersModel,
                    as: 'student_numbers',
                },
                {
                    model: skillsModel,
                    as: 'skills',
                },
                {
                    model: languagesModel,
                    as: 'languages',
                },
                {
                    model: educationalBackgroundsModel,
                    as: 'educational_backgrounds',
                },
                {
                    model: documentTitlesModel,
                    as: 'document_titles',
                    include: [
                        {
                            model: documentValuesModel,
                            as: 'values_title',
                        },
                    ],
                },
                {
                    model: studentParentsModel,
                    as: 'parents',
                    include: [
                        {
                            model: parentsModel,
                            as: 'parent_details',
                        },
                    ],
                },
            ],
        });

        if (data) {
            return response(200, 'data created', data);
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
