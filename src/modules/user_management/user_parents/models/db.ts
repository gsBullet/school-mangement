import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as user_parents_model from './user_parents_model';
import * as user_parent_informations_model from './user_parent_informations_model';
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
    UserParentsModel: typeof user_parents_model.DataModel;
    UserParentInformationsModel: typeof user_parent_informations_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const UserParentsModel = user_parents_model.init(sequelize);
    const UserParentInformationsModel =
        user_parent_informations_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    UserParentsModel.hasOne(UserParentInformationsModel, {
        sourceKey: 'id',
        foreignKey: 'user_parent_id',
        as: 'parent_infos',
    });

    let models: models = {
        UserParentsModel,
        UserParentInformationsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
