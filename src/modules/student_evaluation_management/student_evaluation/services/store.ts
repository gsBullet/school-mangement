import db from '../models/db';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { body, validationResult } from 'express-validator';
import {
    anyObject,
    responseObject,
    Request,
} from '../../../common_types/object';
import response from '../helpers/response';
import { InferCreationAttributes } from 'sequelize';
import custom_error from '../helpers/custom_error';
import error_trace from '../helpers/error_trace';

/** validation rules */
async function validate(req: Request) {
    // await body('branch_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the branch_id field is required')
    //     .run(req);

    // await body('branch_student_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the branch_student_id field is required')
    //     .run(req);

    // await body('student_evaluation_criteria_id')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the student_evaluation_criteria_id field is required')
    //     .run(req);

    // await body('score')
    //     .not()
    //     .isEmpty()
    //     .withMessage('the score field is required')
    //     .run(req);

    let result = await validationResult(req);

    return result;
}
// async function store(
//     fastify_instance: FastifyInstance,
//     req: FastifyRequest,
// ): Promise<responseObject> {
//     throw new Error('500 test');
// }
async function store(
    fastify_instance: FastifyInstance,
    req: FastifyRequest,
): Promise<responseObject> {
    /** validation */
    let validate_result = await validate(req as Request);
    if (!validate_result.isEmpty()) {
        return response(422, 'validation error', validate_result.array());
    }

    /** initializations */
    let models = await db();
    let body = req.body as anyObject;
    let data = new models.StudentEvaluationsModel();

    let student_evaluation: anyObject[] = [];
    for (let i = 0; i < parseInt(body.criteria_count); i++) {
        student_evaluation.push({
            student_evaluation_criteria_id: body[`criteria_id${i}`],
            score: body[`score${i}`],
        });
    }

    /** print request data into console */
    // console.clear();
    // (fastify_instance as any).print(inputs);

    /** store data into database */
    try {
        if (student_evaluation) {
            student_evaluation.forEach(async (ss) => {
                let uscn_model = new models.StudentEvaluationsModel();
                let uscn_inputs: InferCreationAttributes<typeof uscn_model> = {
                    branch_id: body.branch_id,
                    branch_student_id: 1,
                    student_evaluation_criteria_id: 1,
                    score: body.score,
                    creator: 1,
                };
                uscn_inputs.branch_id = 1;
                uscn_inputs.branch_student_id = body.student_id;
                uscn_inputs.student_evaluation_criteria_id =
                    ss.student_evaluation_criteria_id;
                uscn_inputs.score = ss.score;
                uscn_inputs.creator = 1;
                (await uscn_model.update(uscn_inputs)).save();
            });
        }
        return response(201, 'data created', data);
    } catch (error: any) {
        let uid = await error_trace(models, error, req.url, req.body);
        throw new custom_error('server error', 500, error.message, uid);
    }
}

export default store;
