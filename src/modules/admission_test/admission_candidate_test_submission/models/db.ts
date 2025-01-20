import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as admission_candidate_submission from './admission_candidate_submission';
// import * as project_model from '../../user_admin copy/models/project_model';
import * as admission_test_questions_model from './admission_test_question';
import * as admission_test_registration_student_model from './admission_test_registration';
require('dotenv').config();

let host = process?.env.DB_HOST || '';
let post = process?.env.DB_PORT || '';
let user = process?.env.DB_USER || '';
let pass = process?.env.DB_PASSWORD || '';
let database = process?.env.DB_DATABASE || '';

const sequelize = new Sequelize(
    `mysql://${user}:${pass}@${host}:${post}/${database}`,
    {
        logging: false,
    },
);

interface models {
    AssetAuditItemsModel: typeof admission_candidate_submission.DataModel;
    // Project: typeof project_model.DataModel;
    AdmissionTestQuestionsModel: typeof admission_test_questions_model.DataModel;
    AdmissionTestRegistrationStudentModel: typeof admission_test_registration_student_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const AssetAuditItemsModel = admission_candidate_submission.init(sequelize);
    // const Project = project_model.init(sequelize);
    const AdmissionTestQuestionsModel =
        admission_test_questions_model.init(sequelize);

    const AdmissionTestRegistrationStudentModel =
        admission_test_registration_student_model.init(sequelize);

    await sequelize.sync();

    // AssetAuditItemsModel.hasOne(AdmissionTestQuestionsModel, {
    //     foreignKey: 'question_id',
    //     as: 'admissionTestQuestions',
    // });

    AssetAuditItemsModel.hasMany(AdmissionTestRegistrationStudentModel, {
        sourceKey: 'student_id',
        foreignKey: 'id',
        as: 'student',
    });
    AssetAuditItemsModel.hasMany(AdmissionTestQuestionsModel, {
        sourceKey: 'question_id',
        foreignKey: 'id',
        as: 'question_mark',
    });

    // User.hasMany(Project, {
    //     sourceKey: 'id',
    //     foreignKey: 'user_id',
    //     as: 'projects',
    // });

    // User.hasOne(Project, {
    //     sourceKey: 'id',
    //     foreignKey: 'user_id',
    //     as: 'project',
    // });

    // Project.belongsToMany(User, {
    //     through: 'project_user',
    // });
    // User.belongsToMany(Project, {
    //     through: 'project_user',
    // });

    // Project.hasOne(User, {
    //     sourceKey: 'user_id',
    //     foreignKey: 'id',
    //     as: 'user',
    // });

    // User.hasMany(Project, {
    //     sourceKey: 'id',
    //     foreignKey: 'user_id',
    //     as: 'projects',
    // });

    // User.hasOne(Project, {
    //     sourceKey: 'id',
    //     foreignKey: 'user_id',
    //     as: 'project',
    // });

    // Project.belongsToMany(User, {
    //     through: 'project_user',
    // });
    // User.belongsToMany(Project, {
    //     through: 'project_user',
    // });

    let models: models = {
        AssetAuditItemsModel,
        // Project,
        AdmissionTestQuestionsModel,
        AdmissionTestRegistrationStudentModel,
        sequelize,
    };
    return models;
};
export default db;
