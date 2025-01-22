// import db from '../models/db';
// import { FastifyInstance, FastifyRequest } from 'fastify';
// import { body, validationResult } from 'express-validator';
// import {
//     anyObject,
//     responseObject,
//     Request,
// } from '../../../common_types/object';
// import response from '../helpers/response';
// import { InferCreationAttributes } from 'sequelize';
// import custom_error from '../helpers/custom_error';
// import error_trace from '../helpers/error_trace';

// async function validate(req: Request) {
//     await body('question_title')
//         .not()
//         .isEmpty()
//         .withMessage('the question_title field is required')
//         .run(req);
//     await body('question_type')
//         .notEmpty()
//         .withMessage('The question_type field is required')
//         .isIn(['quiz', 'written'])
//         .withMessage('The question_type must be either "quiz" or "written"')
//         .run(req);

//     await body('options1')
//         .if(body('question_type').equals('quiz'))
//         .notEmpty()
//         .withMessage('The options1 field is required')
//         .run(req);

//     await body('options2')
//         .if(body('question_type').equals('quiz'))
//         .notEmpty()
//         .withMessage('The options2 field is required')
//         .run(req);

//     await body('options3')
//         .if(body('question_type').equals('quiz'))
//         .notEmpty()
//         .withMessage('The options3 field is required')
//         .run(req);

//     await body('options4')
//         .if(body('question_type').equals('quiz'))
//         .notEmpty()
//         .withMessage('The options4 field is required')
//         .run(req);
//     await body('is_right_option_1')
//         .if(body('question_type').equals('quiz'))
//         .isBoolean()
//         .withMessage('The is_right_option_1 field must be a boolean (0 or 1)')
//         .run(req);

//     await body('is_right_option_2')
//         .if(body('question_type').equals('quiz'))
//         .isBoolean()
//         .withMessage('The is_right_option_2 field must be a boolean (0 or 1)')
//         .run(req);

//     await body('is_right_option_3')
//         .if(body('question_type').equals('quiz'))
//         .isBoolean()
//         .withMessage('The is_right_option_3 field must be a boolean (0 or 1)')
//         .run(req);

//     await body('is_right_option_4')
//         .if(body('question_type').equals('quiz'))
//         .isBoolean()
//         .withMessage('The is_right_option_4 field must be a boolean (0 or 1)')
//         .run(req);

//     await body('right_answer')
//         .if(body('question_type').equals('written')) // Check only for "written" type
//         .notEmpty() // Ensures the field is required for "written"
//         .withMessage('The right_answer field is required for written questions')
//         .isString()
//         .withMessage('The right_answer field must be a string')
//         .run(req);

//     await body('user_answer')
//         .not()
//         .isEmpty()
//         .withMessage('the user_answer field is required')
//         .run(req);

//     await body('marks')
//         .not()
//         .isEmpty()
//         .withMessage('the marks field is required')
//         .run(req);

//     await body('is_pass')
//         .not()
//         .notEmpty()
//         .withMessage('the is_pass field is required')
//         .run(req);
//     await body('given_admission_date')
//         .not()
//         .notEmpty()
//         .withMessage('the given_admission_date field is required')
//         .run(req);
//     await body('comment')
//         .not()
//         .notEmpty()
//         .withMessage('the comment field is required')
//         .run(req);
//     let result = await validationResult(req);

//     return result;
// }

// async function update(
//     fastify_instance: FastifyInstance,
//     req: FastifyRequest,
// ): Promise<responseObject> {
//     /** validation */
//     let validate_result = await validate(req as Request);
//     if (!validate_result.isEmpty()) {
//         return response(422, 'validation error', validate_result.array());
//     }

//     /** initializations */
//     let models = await db();
//     let body = req.body as anyObject;
//     let model = new models.AdmissionCandidateSubmissionModel();

//     let inputs: Partial<InferCreationAttributes<typeof model>> = {
//         question_id: body.question_id,
//         question_title: body.question_title,
//         question_type: body.question_type,
//     };

//     // Conditionally add properties based on question_type
//     if (body.question_type === 'written') {
//         inputs.right_answer = body.right_answer;
//         inputs.user_answer = body.user_answer;
//         inputs.marks = body.marks;
//         inputs.is_pass = body.is_pass;
//         inputs.given_admission_date = body.given_admission_date;
//         inputs.comment = body.comment;
//     }

//     if (body.question_type === 'quiz') {
//         inputs.options1 = body.options1;
//         inputs.options2 = body.options2;
//         inputs.options3 = body.options3;
//         inputs.options4 = body.options4;
//         inputs.is_right_option_1 = body.is_right_option_1;
//         inputs.is_right_option_2 = body.is_right_option_2;
//         inputs.is_right_option_3 = body.is_right_option_3;
//         inputs.is_right_option_4 = body.is_right_option_4;
//         inputs.right_answer = body.right_answer;
//         inputs.user_answer = body.user_answer;
//         inputs.marks = body.marks;
//         inputs.is_pass = body.is_pass;
//         inputs.given_admission_date = body.given_admission_date;
//         inputs.comment = body.comment;
//     }

//     /** print request data into console */
//     // console.clear();
//     // (fastify_instance as any).print(inputs);

//     /** store data into database */
//     try {
//         let data = await models.AdmissionCandidateSubmissionModel.findByPk(
//             body.id,
//         );
//         if (data) {
//             data.update(inputs);
//             await data.save();
//             return response(200, 'data updated', data);
//         } else {
//             throw new custom_error('Forbidden', 403, 'operation not possible');
//         }
//     } catch (error: any) {
//         let uid = await error_trace(models, error, req.url, req.body);
//         if (error instanceof custom_error) {
//             error.uid = uid;
//         } else {
//             throw new custom_error('server error', 500, error.message, uid);
//         }
//         throw error;
//     }
// }

// export default update;
