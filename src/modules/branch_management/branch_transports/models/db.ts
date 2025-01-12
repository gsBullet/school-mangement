import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as branch_transports_model from './branch_transports_model';
import * as branch_transport_drivers_model from './branch_transport_drivers_model';
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
    BranchTransportsModel: typeof branch_transports_model.DataModel;
    BranchTransportDriversModel: typeof branch_transport_drivers_model.DataModel;
    BranchAdminsModel: typeof branch_admin_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const BranchTransportsModel = branch_transports_model.init(sequelize);
    const BranchTransportDriversModel =
        branch_transport_drivers_model.init(sequelize);
    const BranchAdminsModel = branch_admin_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    BranchTransportsModel.hasOne(BranchTransportDriversModel, {
        sourceKey: 'branch_transport_driver_id',
        foreignKey: 'id',
        as: 'driver',
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
        BranchTransportsModel,
        BranchTransportDriversModel,
        BranchAdminsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
