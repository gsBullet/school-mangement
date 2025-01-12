import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as tasks_model from './tasks_model';
import * as task_variant_tasks_model from './task_variant_tasks_model';
import * as task_group_tasks_model from './task_group_tasks_model';
import * as task_users_model from './task_users_model';
import * as branch_staffs_model from './branch_staffs_model';
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
    TasksModel: typeof tasks_model.DataModel;
    TaskVariantTasksModel: typeof task_variant_tasks_model.DataModel;
    TaskGroupTasksModel: typeof task_group_tasks_model.DataModel;
    TaskUsersModel: typeof task_users_model.DataModel;
    BranchStaffsModel: typeof branch_staffs_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const TasksModel = tasks_model.init(sequelize);
    const TaskVariantTasksModel = task_variant_tasks_model.init(sequelize);
    const TaskGroupTasksModel = task_group_tasks_model.init(sequelize);
    const TaskUsersModel = task_users_model.init(sequelize);
    const BranchStaffsModel = branch_staffs_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

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
        TasksModel,
        TaskVariantTasksModel,
        TaskGroupTasksModel,
        TaskUsersModel,
        BranchStaffsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
