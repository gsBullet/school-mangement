import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as account_fees_collections_model from './account_fees_collections_model';
import * as account_logs_model from './account_logs_model';
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
    AccountFeesCollectionsModel: typeof account_fees_collections_model.DataModel;
    AccountLogsModel: typeof account_logs_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const AccountFeesCollectionsModel =
        account_fees_collections_model.init(sequelize);
    const AccountLogsModel = account_logs_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    AccountFeesCollectionsModel.hasOne(AccountLogsModel, {
        sourceKey: 'account_log_id',
        foreignKey: 'id',
        as: 'payment',
    });

    let models: models = {
        AccountFeesCollectionsModel,
        AccountLogsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
