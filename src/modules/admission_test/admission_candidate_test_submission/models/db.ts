import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as admission_candidate_submission from './admission_candidate_submission';
// import * as project_model from '../../user_admin copy/models/project_model';
import * as admission_test_questions_model from './admission_test_question';
import * as admission_test_registration_student_model from './admission_test_registration';
import * as admission_test_file_submission from './admission_test_file_sumbission';
import * as admission_test_model from './admission_test';
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
    AdmissionCandidateSubmissionModel: typeof admission_candidate_submission.DataModel;
    // Project: typeof project_model.DataModel;
    AdmissionTestQuestionsModel: typeof admission_test_questions_model.DataModel;
    AdmissionTestRegistrationStudentModel: typeof admission_test_registration_student_model.DataModel;
    AdmissionTestFileSubmissionModel: typeof admission_test_file_submission.DataModel;
    AdmissionTestModel: typeof admission_test_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const AdmissionCandidateSubmissionModel =
        admission_candidate_submission.init(sequelize);
    // const Project = project_model.init(sequelize);
    const AdmissionTestQuestionsModel =
        admission_test_questions_model.init(sequelize);

    const AdmissionTestRegistrationStudentModel =
        admission_test_registration_student_model.init(sequelize);
    const AdmissionTestFileSubmissionModel =
        admission_test_file_submission.init(sequelize);
    const AdmissionTestModel = admission_test_model.init(sequelize);

    await sequelize.sync();

    // AdmissionCandidateSubmissionModel.hasOne(AdmissionTestQuestionsModel, {
    //     foreignKey: 'question_id',
    //     as: 'admissionTestQuestions',
    // });

    AdmissionCandidateSubmissionModel.hasMany(
        AdmissionTestRegistrationStudentModel,
        {
            sourceKey: 'student_id',
            foreignKey: 'id',
            as: 'student',
        },
    );
    AdmissionCandidateSubmissionModel.hasMany(AdmissionTestQuestionsModel, {
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
        AdmissionCandidateSubmissionModel,
        // Project,
        AdmissionTestQuestionsModel,
        AdmissionTestRegistrationStudentModel,
        AdmissionTestFileSubmissionModel,
        AdmissionTestModel,
        sequelize,
    };
    return models;
};
export default db;
