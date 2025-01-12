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
    let params = req.params as any;

    try {
        let student = await models.UserStudentsModel.findOne({
            where: {
                id: params.id,
            },
            include: {
                model: models.UserStudentsModel,
                as: 'user_siblings',
                // through: { attributes: [] },
            },
        });
        let background =
            await models.UserStudentEducationalBackgroundsModel.findAll({
                where: {
                    user_student_id: params.id,
                },
                attributes: [
                    'id',
                    'user_student_id',
                    'previous_institute',
                    'year_of_leaving',
                    'result',
                    'status',
                    'result',
                ],
            });
        let information = await models.UserStudentInformationsModel.findOne({
            where: {
                user_student_id: params.id,
            },
            attributes: [
                'id',
                'user_student_id',
                'branch_id',
                'present_address',
                'permanent_address',
                'date_of_birth',
                'gender',
                'nationality',
                'city',
                'state',
                // 'zip_code',
                'post_code',
                'country',
                'medical_condition',
                'current_medications',
                'telegram_name',
                'telegram_id',
                'student_id',
                // 'qr_code',
                'blood_group',
                'student_expire_date',
                'addmission_no',
                'admission_date',
                'role_no',
                // 'class_section',
                'student_category',
                'religion',
                'cast',
                'student_house',
                'living_house_type',
                'height',
                'weight',
                'as_on_date',
            ],
        });
        let document_value =
            await models.UserStudentDocumentValuesModel.findAll({
                where: {
                    user_student_id: params.id,
                },
                // attributes: {
                //     exclude: ['password'],
                // },
                attributes: [
                    'id',
                    'user_student_id',
                    'user_student_document_title_id',
                    'file',
                    'issue_date',
                    'expire_date',
                    'status',
                    'creator',
                ],
            });
        let document_title =
            await models.UserStudentDocumentTitlesModel.findAll({
                where: {
                    user_student_id: params.id,
                },
                attributes: [
                    'id',
                    'user_student_id',
                    'title',
                    'status',
                    'creator',
                ],
            });
        let parent = await models.UserStudentParentsModel.findAll({
            where: {
                user_student_id: params.id,
            },
            attributes: [
                'id',
                'user_student_id',
                'is_parent',
                'status',
                'creator',
            ],
        });

        let hostel = await models.UserStudentHostelsModel.findOne({
            where: {
                user_student_id: params.id,
            },
            attributes: [
                'id',
                'user_student_id',
                'branch_building_id',
                'branch_building_room_id',
                'branch_id',
                'status',
                'creator',
            ],
        });
        let contact_number =
            await models.UserStudentContactNumbersModel.findAll({
                where: {
                    user_student_id: params.id,
                },
                attributes: [
                    'id',
                    'user_student_id',
                    'contact_number',
                    'owner',
                    'branch_id',
                    'status',
                    'creator',
                ],
            });

        let transport = await models.UserStudentTransportsModel.findAll({
            where: {
                user_student_id: params.id,
            },
            attributes: [
                'id',
                'user_student_id',
                'branch_building_id',
                'branch_building_room_id',
                'branch_id',
                'status',
                'creator',
            ],
        });

        let language = await models.UserStudentLanguagesModel.findAll({
            where: {
                user_student_id: params.id,
            },
            attributes: [
                'id',
                'user_student_id',
                'language_title',
                'profeciency',
                'branch_id',
                'status',
                'creator',
            ],
        });

        let skills = await models.UserStudentSkillsModel.findAll({
            where: {
                user_student_id: params.id,
            },
            attributes: [
                'id',
                'user_student_id',
                'title',
                'level',
                'branch_id',
                'status',
                'creator',
            ],
        });

        // if (background) {
        //     return response(200, 'background created', background);
        // } else {
        //     throw new custom_error('not found', 404, 'data not found');
        // }
        // let siblingss = 'aaa';
        return response(200, 'student profile', {
            student,
            background,
            information,
            document_value,
            document_title,
            parent,
            hostel,
            contact_number,
            transport,
            language,
            skills,
        });
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
