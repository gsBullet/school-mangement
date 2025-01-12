import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as assignment_submissions_model from './assignment_submissions_model';
import * as assignments_model from './assignments_model';
import * as user_students_model from './user_students_model';
// import * as project_model from '../../user_admin copy/models/project_model';
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
    AssignmentSubmissionsModel: typeof assignment_submissions_model.DataModel;
    AssignmentsModel: typeof assignments_model.DataModel;
    UserStudentsModel: typeof user_students_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const AssignmentSubmissionsModel =
        assignment_submissions_model.init(sequelize);
    const AssignmentsModel = assignments_model.init(sequelize);
    const UserStudentsModel = user_students_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    AssignmentSubmissionsModel.hasOne(AssignmentsModel, {
        sourceKey: 'assignment_id',
        foreignKey: 'id',
        as: 'assignment',
    });
    AssignmentSubmissionsModel.hasOne(UserStudentsModel, {
        sourceKey: 'student_id',
        foreignKey: 'id',
        as: 'student',
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

    let models: models = {
        AssignmentSubmissionsModel,
        AssignmentsModel,
        UserStudentsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
