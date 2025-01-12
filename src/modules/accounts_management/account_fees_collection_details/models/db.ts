import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as account_fees_collection_details_model from './account_fees_collection_details_model';
import * as branch_class_fees_model from './branch_class_fees_model';
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
    AccountFeesCollectionDetailsModel: typeof account_fees_collection_details_model.DataModel;
    BranchClassFeesModel: typeof branch_class_fees_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const AccountFeesCollectionDetailsModel =
        account_fees_collection_details_model.init(sequelize);
    const BranchClassFeesModel = branch_class_fees_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    AccountFeesCollectionDetailsModel.hasOne(BranchClassFeesModel, {
        sourceKey: 'branch_class_fees_id',
        foreignKey: 'id',
        as: 'class_fees',
    });

    let models: models = {
        AccountFeesCollectionDetailsModel,
        BranchClassFeesModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
