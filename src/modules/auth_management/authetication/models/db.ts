import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as user_model from './user_model';
import * as user_staff_model from './user_staff_model';
import * as user_students_model from './user_students_model';
require('dotenv').config();

let host = process?.env.DB_HOST || '';
let post = process?.env.DB_PORT || '';
let user = process?.env.DB_USER || '';
let pass = process?.env.DB_PASSWORD || '';
let database = process?.env.DB_DATABASE || '';

const sequelize = new Sequelize(
    `mysql://${user}:${pass}@${host}:${post}/${database}`,
);

interface models {
    User: typeof user_model.DataModel;
    UserStaffsModel: typeof user_staff_model.DataModel;
    UserStudentsModel: typeof user_students_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const User = user_model.init(sequelize);
    const UserStaffsModel = user_staff_model.init(sequelize);
    const UserStudentsModel = user_students_model.init(sequelize);
    await sequelize.sync();
    let models: models = {
        User,
        UserStaffsModel,
        UserStudentsModel,
        sequelize,
    };
    return models;
};
export default db;
