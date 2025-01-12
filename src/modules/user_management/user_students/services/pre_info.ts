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
    let informationsModel = models.UserStudentInformationsModel;
    let user_id = (req as any).user?.id;
    console.log('user', user_id);

    try {
        let data = await informationsModel.findOne({
            order: [['id', 'DESC']],
            limit: 1,
            attributes: ['student_id', 'role_no', 'addmission_no'], // Corrected spelling from 'addmission_no'
        });

        if (data) {
            // Function to safely extract numeric part and increment by one
            const increment = (value?: string): string => {
                if (!value) return value || ''; // Return undefined if value is missing
                const numericPart = parseInt(value.replace(/\D/g, ''), 10); // Extract numeric part
                return `${value.replace(/\d+/, (num) => (numericPart + 1).toString())}`; // Increment numeric part and replace it
            };

            // Transform the data
            const transformedData = {
                student_id: increment(data.student_id as string),
                role_no: increment(data.role_no as string),
                admission_no: increment(data.addmission_no as string), // Corrected spelling from 'addmission_no'
            };

            return response(200, 'data created', transformedData);
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
