import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as meetings_model from './meetings_model';
import * as branch_staffs_model from './branch_staffs_model';
import * as meeting_agendas_model from './meeting_agendas_model';
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
    MeetingsModel: typeof meetings_model.DataModel;
    BranchStaffsModel: typeof branch_staffs_model.DataModel;
    MeetignAgendasModel: typeof meeting_agendas_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const MeetingsModel = meetings_model.init(sequelize);
    const BranchStaffsModel = branch_staffs_model.init(sequelize);
    const MeetignAgendasModel = meeting_agendas_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    MeetingsModel.hasMany(MeetignAgendasModel, {
        sourceKey: 'id',
        foreignKey: 'meeting_id',
        as: 'agendas',
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
        MeetingsModel,
        BranchStaffsModel,
        MeetignAgendasModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
