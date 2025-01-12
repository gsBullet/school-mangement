import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as user_teachers_model from './user_teacher_model';
import * as user_teacher_informations_model from './user_teacher_informations_model';
import * as branch_teachers_model from './branch_teachers_model';
import * as branch_admins_model from './branch_admins_model';
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
    UserTeachersModel: typeof user_teachers_model.DataModel;
    UserTeacherInformationsModel: typeof user_teacher_informations_model.DataModel;
    BranchTeachersModel: typeof branch_teachers_model.DataModel;
    BranchAdminsModel: typeof branch_admins_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const UserTeachersModel = user_teachers_model.init(sequelize);
    const UserTeacherInformationsModel =
        user_teacher_informations_model.init(sequelize);
    const BranchTeachersModel = branch_teachers_model.init(sequelize);
    const BranchAdminsModel = branch_admins_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    UserTeachersModel.hasOne(UserTeacherInformationsModel, {
        sourceKey: 'id',
        foreignKey: 'user_teacher_id',
        as: 'teacher_infos',
    });

    UserTeachersModel.hasOne(BranchTeachersModel, {
        sourceKey: 'id',
        foreignKey: 'user_teacher_id',
        as: 'teachers',
    });
    let models: models = {
        UserTeachersModel,
        UserTeacherInformationsModel,
        BranchTeachersModel,
        BranchAdminsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
