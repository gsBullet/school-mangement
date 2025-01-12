import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

async function just_check(
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
            },
        });

        // if (background) {
        //     return response(200, 'background created', background);
        // } else {
        //     throw new custom_error('not found', 404, 'data not found');
        // }
        // let siblingss = 'aaa';
        return response(200, 'student profile', {
            student,
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

export default just_check;
