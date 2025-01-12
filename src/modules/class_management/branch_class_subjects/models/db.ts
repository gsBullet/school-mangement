import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as branch_class_subjects_model from './branch_class_subjects_model';
import * as branch_class_subject_teachers_model from './branch_class_subject_teachers_model';
import * as user_teacher_model from './user_teacher_model';
import * as branch_teachers_model from './branch_teachers_model';
import * as branch_class_routines_model from './branch_class_routines_model';
import * as branch_class_routine_day_times_model from './branch_class_routine_day_times_model';
import * as branch_building_rooms_model from './branche_building_rooms_model';
import * as branch_class_rooms_model from './branch_class_rooms_model';
import * as branch_classes_model from './branch_classes_model';
import * as user_student_informations_model from './user_student_informations_model';
import * as branch_class_sections_model from './branch_class_sections_model';
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
    BranchClassSubjectsModel: typeof branch_class_subjects_model.DataModel;
    BranchClassSubjectTeachersModel: typeof branch_class_subject_teachers_model.DataModel;
    UserTeacherModel: typeof user_teacher_model.DataModel;
    BranchTeachersModel: typeof branch_teachers_model.DataModel;
    BranchClassRoutinesModel: typeof branch_class_routines_model.DataModel;
    BranchClassRoutineDayTimesModel: typeof branch_class_routine_day_times_model.DataModel;
    BranchBuildingRoomsModel: typeof branch_building_rooms_model.DataModel;
    BranchClassRoomsModel: typeof branch_class_rooms_model.DataModel;
    BranchClassesModel: typeof branch_classes_model.DataModel;
    UserStudentInformationsModel: typeof user_student_informations_model.DataModel;
    BranchClassSectionsModel: typeof branch_class_sections_model.DataModel;
    BranchAdminsModel: typeof branch_admin_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const BranchClassSubjectsModel =
        branch_class_subjects_model.init(sequelize);
    const BranchClassSubjectTeachersModel =
        branch_class_subject_teachers_model.init(sequelize);
    const UserTeacherModel = user_teacher_model.init(sequelize);
    const BranchTeachersModel = branch_teachers_model.init(sequelize);
    const BranchClassRoutinesModel =
        branch_class_routines_model.init(sequelize);
    const BranchClassRoutineDayTimesModel =
        branch_class_routine_day_times_model.init(sequelize);
    const BranchBuildingRoomsModel =
        branch_building_rooms_model.init(sequelize);
    const BranchClassRoomsModel = branch_class_rooms_model.init(sequelize);
    const BranchClassesModel = branch_classes_model.init(sequelize);
    const UserStudentInformationsModel =
        user_student_informations_model.init(sequelize);
    const BranchClassSectionsModel =
        branch_class_sections_model.init(sequelize);
    const BranchAdminsModel = branch_admin_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync({ force: false });

    // UserStudentsModel.hasOne(UserStudentInformationsModel, {
    //     sourceKey: 'id',
    //     foreignKey: 'user_student_id',
    //     as: 'student_info',
    // });

    BranchClassRoutineDayTimesModel.hasOne(BranchClassRoomsModel, {
        sourceKey: 'branch_class_room_id',
        foreignKey: 'id',
        as: 'class_room',
    });

    BranchClassRoomsModel.hasOne(BranchBuildingRoomsModel, {
        sourceKey: 'branch_building_room_id',
        foreignKey: 'id',
        as: 'building_room',
    });

    BranchClassRoutineDayTimesModel.hasOne(BranchTeachersModel, {
        sourceKey: 'branch_teacher_id',
        foreignKey: 'id',
        as: 'branch_teacher',
    });

    BranchClassSubjectTeachersModel.hasOne(BranchClassesModel, {
        sourceKey: 'branch_class_id',
        foreignKey: 'id',
        as: 'a_class',
    });

    BranchClassSubjectTeachersModel.hasOne(BranchClassSubjectsModel, {
        sourceKey: 'branch_class_subject_id',
        foreignKey: 'id',
        as: 'subject',
    });

    BranchTeachersModel.hasOne(UserTeacherModel, {
        sourceKey: 'user_teacher_id',
        foreignKey: 'id',
        as: 'user_teacher',
    });

    BranchClassSubjectsModel.hasOne(BranchClassRoutinesModel, {
        sourceKey: 'id',
        foreignKey: 'branch_class_subject_id',
        as: 'subject_routine',
    });

    BranchClassSubjectsModel.hasOne(BranchClassRoutineDayTimesModel, {
        sourceKey: 'id',
        foreignKey: 'branch_class_subject_id',
        as: 'routine_day',
    });

    BranchClassSubjectsModel.hasOne(BranchClassSubjectTeachersModel, {
        sourceKey: 'id',
        foreignKey: 'branch_class_subject_id',
        as: 'subject_teacher',
    });

    BranchClassSubjectsModel.hasOne(BranchClassesModel, {
        sourceKey: 'id',
        foreignKey: 'id',
        as: 'subject_class',
    });

    BranchClassSubjectsModel.hasOne(BranchClassSectionsModel, {
        sourceKey: 'branch_class_section_id',
        foreignKey: 'id',
        as: 'subject_section',
    });

    BranchClassRoutinesModel.hasMany(BranchClassRoutineDayTimesModel, {
        sourceKey: 'id',
        foreignKey: 'branch_class_routine_id',
        as: 'day_time',
    });

    BranchClassesModel.hasMany(UserStudentInformationsModel, {
        sourceKey: 'id',
        foreignKey: 's_class',
        as: 'students',
    });

    let models: models = {
        BranchClassSubjectsModel,
        BranchClassSubjectTeachersModel,
        UserTeacherModel,
        BranchTeachersModel,
        BranchClassRoutinesModel,
        BranchClassRoutineDayTimesModel,
        BranchBuildingRoomsModel,
        BranchClassRoomsModel,
        BranchClassesModel,
        UserStudentInformationsModel,
        BranchClassSectionsModel,
        BranchAdminsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
