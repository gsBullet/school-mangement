import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as exam_routines_model from './exam_routines_model';
import * as exams_model from './exams_model';
import * as exam_hall_guard_plans_model from './exam_hall_guard_plans_model';
import * as branch_building_rooms_model from './branche_building_rooms_model';
import * as branch_class_subjects_model from './branch_class_subjects_model';
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
    ExamRoutinesModel: typeof exam_routines_model.DataModel;
    ExamsModel: typeof exams_model.DataModel;
    ExamGuardPlansModel: typeof exam_hall_guard_plans_model.DataModel;
    BranchBuildingRoomsModel: typeof branch_building_rooms_model.DataModel;
    BrachClassSubjectsModel: typeof branch_class_subjects_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const ExamRoutinesModel = exam_routines_model.init(sequelize);
    const ExamsModel = exams_model.init(sequelize);
    const ExamGuardPlansModel = exam_hall_guard_plans_model.init(sequelize);
    const BranchBuildingRoomsModel =
        branch_building_rooms_model.init(sequelize);
    const BrachClassSubjectsModel = branch_class_subjects_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    // Project.hasOne(User, {
    //     sourceKey: 'user_id',
    //     foreignKey: 'id',
    //     as: 'user',
    // });

    ExamRoutinesModel.hasOne(BrachClassSubjectsModel, {
        sourceKey: 'subject_id',
        foreignKey: 'id',
        as: 'subjects',
    });

    ExamRoutinesModel.hasOne(ExamGuardPlansModel, {
        sourceKey: 'subject_id',
        foreignKey: 'subject_id',
        as: 'guard_plan',
    });

    ExamGuardPlansModel.hasOne(BranchBuildingRoomsModel, {
        sourceKey: 'room_id',
        foreignKey: 'id',
        as: 'room',
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
        ExamRoutinesModel,
        ExamsModel,
        ExamGuardPlansModel,
        BrachClassSubjectsModel,
        BranchBuildingRoomsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
