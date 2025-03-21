import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { anyObject, responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';
import { sequelize } from '../../../../bootstrap/db.sql';

async function classes(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    let educationalBackgroundsModel =
        models.UserStudentEducationalBackgroundsModel;
    let informationsModel = models.UserStudentInformationsModel;
    let studentsModel = models.UserStudentsModel;
    let staffsModel = models.BranchStaffsModel;
    let classesModel = models.BranchClassesModel;
    let classStudentsModel = models.BranchClassStudentsModel;
    let params = req.params as any;
    let user_id = (req as any).user?.id;
    console.log('user', user_id);

    try {
        let data = await informationsModel.findOne({
            order: [['id', 'DESC']], // Adjust this field if necessary
            limit: 1,
            attributes: ['student_id', 'role_no', 'addmission_no'],
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

export default classes;
