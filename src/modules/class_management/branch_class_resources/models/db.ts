import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as branch_class_resources_model from './branch_class_resources_model';
import * as user_teacher_model from './user_teacher_model';
import * as branch_class_subject_teachers_model from './branch_class_subject_teachers_model';
import * as branch_class_subjects_model from './branch_class_subjects_model';
import * as branch_teachers_model from './branch_teachers_model';
import * as branch_classes_model from './branch_classes_model';
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
    BranchClassResourcessModel: typeof branch_class_resources_model.DataModel;
    UserTeachersModel: typeof user_teacher_model.DataModel;
    BranchClassSubjectTeachersModel: typeof branch_class_subject_teachers_model.DataModel;
    BranchClassSubjectsModel: typeof branch_class_subjects_model.DataModel;
    BranchTeachersModel: typeof branch_teachers_model.DataModel;
    BranchClassesModel: typeof branch_classes_model.DataModel;
    BranchAdminsModel: typeof branch_admin_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const BranchClassResourcessModel =
        branch_class_resources_model.init(sequelize);
    const UserTeachersModel = user_teacher_model.init(sequelize);
    const BranchClassSubjectTeachersModel =
        branch_class_subject_teachers_model.init(sequelize);
    const BranchClassSubjectsModel =
        branch_class_subjects_model.init(sequelize);
    const BranchTeachersModel = branch_teachers_model.init(sequelize);
    branch_class_subjects_model.init(sequelize);
    const BranchClassesModel = branch_classes_model.init(sequelize);
    const BranchAdminsModel = branch_admin_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    BranchClassResourcessModel.hasOne(BranchClassSubjectsModel, {
        sourceKey: 'branch_class_subject_id',
        foreignKey: 'id',
        as: 'subject',
    });

    BranchClassResourcessModel.hasOne(BranchClassesModel, {
        sourceKey: 'branch_class_id',
        foreignKey: 'id',
        as: 'class',
    });

    BranchClassResourcessModel.hasOne(BranchClassSubjectTeachersModel, {
        sourceKey: 'branch_class_subject_id',
        foreignKey: 'branch_class_subject_id',
        as: 'subject_teacher',
    });

    BranchClassSubjectTeachersModel.hasOne(BranchTeachersModel, {
        sourceKey: 'branch_teacher_id',
        foreignKey: 'id',
        as: 'branch_teacher',
    });

    BranchClassSubjectTeachersModel.hasMany(BranchClassResourcessModel, {
        sourceKey: 'branch_class_id',
        foreignKey: 'branch_class_id',
        as: 'class_resources',
    });

    BranchTeachersModel.hasOne(UserTeachersModel, {
        sourceKey: 'user_teacher_id',
        foreignKey: 'id',
        as: 'teacher',
    });

    let models: models = {
        BranchClassResourcessModel,
        BranchClassSubjectsModel,
        BranchClassSubjectTeachersModel,
        BranchTeachersModel,
        UserTeachersModel,
        BranchClassesModel,
        BranchAdminsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
