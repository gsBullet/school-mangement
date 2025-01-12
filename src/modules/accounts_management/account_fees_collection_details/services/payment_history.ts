import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { responseObject } from '../../../common_types/object';
import response from '../helpers/response';
import error_trace from '../helpers/error_trace';
import custom_error from '../helpers/custom_error';

async function payment_history(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    let models = await db();
    // let branchClassSubjectsModel = models.BranchClassSubjectsModel;
    // let branchClassRoutinesModel = models.BranchClassRoutinesModel;
    // let branchClassRoutineDayTimesModel =
    //     models.BranchClassRoutineDayTimesModel;
    // let branchTeachersModel = models.BranchTeachersModel;
    // let userTeachersModel = models.UserTeacherModel;
    let feeCollectionDetailsModel = models.AccountFeesCollectionDetailsModel;
    let branchClassFeesModel = models.BranchClassFeesModel;
    let params = req.params as any;
    console.log('class', params.id);

    try {
        let data = await feeCollectionDetailsModel.findAll({
            where: {
                branch_student_id: params.id,
            },
            include: [
                {
                    model: branchClassFeesModel,
                    as: 'class_fees',
                },
            ],
            // order: [['id', 'ASC']],
        });
        // console.log('data', data);

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

export default payment_history;
