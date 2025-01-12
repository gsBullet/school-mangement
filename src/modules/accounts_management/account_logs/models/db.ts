import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as account_logs_model from './account_logs_model';
import * as account_categories_model from './account_categories_model';
import * as account_periods_model from './account_periods_model';
import * as accounts_model from './accounts_model';
import * as money_receipt_books_model from './money_receipt_books_model';
import * as account_fees_collections_model from './account_fees_collections_model';
import * as user_student_informations_model from './user_student_informations_model';
import * as account_log_attachments_model from './account_log_attachments_model';
import * as account_fees_collection_details_model from './account_fees_collection_details_model';
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
    AccountLogsModel: typeof account_logs_model.DataModel;
    AccountCategoriesModel: typeof account_categories_model.DataModel;
    AccountPeriodsModel: typeof account_periods_model.DataModel;
    AccountsModel: typeof accounts_model.DataModel;
    MoneyReceiptBooksModel: typeof money_receipt_books_model.DataModel;
    AccountFeeCollectionsModel: typeof account_fees_collections_model.DataModel;
    UserStudentInformationsModel: typeof user_student_informations_model.DataModel;
    AccountLogAttachmentsModel: typeof account_log_attachments_model.DataModel;
    AccountFeesCollectionDetailsModel: typeof account_fees_collection_details_model.DataModel;
    BranchStaffsModel: typeof branch_staffs_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const AccountLogsModel = account_logs_model.init(sequelize);    // work 
    const AccountCategoriesModel = account_categories_model.init(sequelize);
    const AccountPeriodsModel = account_periods_model.init(sequelize);
    const AccountsModel = accounts_model.init(sequelize);
    const MoneyReceiptBooksModel = money_receipt_books_model.init(sequelize);
    const UserStudentInformationsModel =
        user_student_informations_model.init(sequelize);
    const AccountFeeCollectionsModel =
        account_fees_collections_model.init(sequelize);
    const AccountLogAttachmentsModel =
        account_log_attachments_model.init(sequelize);
    const AccountFeesCollectionDetailsModel =
        account_fees_collection_details_model.init(sequelize);
    const BranchStaffsModel = branch_staffs_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    AccountLogsModel.hasOne(AccountsModel, {
        sourceKey: 'account_id',
        foreignKey: 'id',
        as: 'account',
    });
    AccountLogsModel.hasOne(AccountCategoriesModel, {
        sourceKey: 'account_category_id',
        foreignKey: 'id',
        as: 'category',
    });
    AccountFeeCollectionsModel.hasOne(AccountCategoriesModel, {
        sourceKey: 'account_category_id',
        foreignKey: 'id',
        as: 'colection_category',
    });
    AccountFeeCollectionsModel.hasOne(AccountLogsModel, {
        sourceKey: 'account_category_id',
        foreignKey: 'id',
        as: 'colection_logs',
    });

    let models: models = {
        AccountLogsModel,
        AccountCategoriesModel,
        AccountPeriodsModel,
        AccountsModel,
        MoneyReceiptBooksModel,
        AccountFeeCollectionsModel,
        UserStudentInformationsModel,
        AccountLogAttachmentsModel,
        AccountFeesCollectionDetailsModel,
        BranchStaffsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
