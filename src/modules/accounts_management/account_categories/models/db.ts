import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as account_categories_model from './account_categories_model';
import * as account_logs_model from './account_logs_model';
import * as branches_model from './branches_model';
import * as branch_admin_model from './branch_admin_model';
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
    AccountCategoriesModel: typeof account_categories_model.DataModel;
    AccountLogsModel: typeof account_logs_model.DataModel;
    BranchesModel: typeof branches_model.DataModel;
    BranchAdminsModel: typeof branch_admin_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const AccountCategoriesModel = account_categories_model.init(sequelize);
    const AccountLogsModel = account_logs_model.init(sequelize);
    const BranchesModel = branches_model.init(sequelize);
    const BranchAdminsModel = branch_admin_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    AccountCategoriesModel.hasOne(BranchesModel, {
        sourceKey: 'branch_id',
        foreignKey: 'id',
        as: 'branch',
    });

    let models: models = {
        AccountCategoriesModel,
        AccountLogsModel,
        BranchesModel,
        BranchAdminsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
