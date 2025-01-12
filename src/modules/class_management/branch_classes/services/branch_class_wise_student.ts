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

async function branch_class_wise_student(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let studentsModel = models.UserStudentsModel;
    let studentInformationsModel = models.UserStudentInformationsModel;
    let body = req.body as { [key: string]: any };
    let params = req.params as any;
    console.log('form body', body);

    try {
        let data = await models.BranchClassStudentsModel.findAll({
            where: {
                branch_id: body.branch,
                branch_class_id: body.classes,
            },
            include: [
                {
                    model: studentsModel,
                    as: 'info',
                    attributes: {
                        exclude: [
                            'password',
                            'parent_id',
                            'phone_number',
                            'whatsapp_number',
                            'image',
                            'token',
                        ],
                    },
                },
                {
                    model: studentInformationsModel,
                    as: 'info_details',
                    attributes: {
                        exclude: [
                            'telegram_name',
                            'current_medications',
                            'medical_condition',
                            'country',
                            'post_code',
                            'city',
                            'nationality',
                            'gender',
                            'date_of_birth',
                            'permanent_address',
                            'present_address',
                            'present_address',
                            'as_on_date',
                            'weight',
                            'height',
                            'living_house_type',
                            'student_house',
                            'cast',
                            'religion',
                            'student_category',
                            's_class',
                            'shift',
                            'national_id',
                            'birth_certificate',
                            'shibling_information',
                            'family_information',
                            'division',
                            'section',
                            'addmission_no',
                            'admission_date',
                            'student_expire_date',
                            'blood_group',
                            'student_id',
                            'telegram_id',
                        ],
                    },
                },
            ],
            attributes: {
                exclude: ['password'],
            },
        });

        if (data) {
            return response(200, 'data found', data);
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

export default branch_class_wise_student;
