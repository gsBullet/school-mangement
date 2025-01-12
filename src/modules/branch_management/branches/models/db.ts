import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as branches_model from './branches_model';
import * as branch_admins_model from './branch_admins_model';
import * as branch_parents_model from './branch_parents_model';
import * as branch_staffs_model from './branch_staffs_model';
import * as branch_students_model from './branch_students_model';
import * as branch_teachers_model from './branch_teachers_model';
import * as user_parents_model from '../../../user_management/user_parents/models/user_parents_model';
import * as user_admins_model from '../../../user_management/user_admin/models/user_admins_model';
import * as user_staffs_model from '../../../user_management/user_staffs/models/user_staffs_model';
import * as user_teachers_model from '../../../user_management/user_teachers/models/user_teacher_model';
import * as user_students_model from '../../../user_management/user_students/models/user_students_model';
import * as user_student_educational_backgrounds_model from '../../../user_management/user_students/models/user_student_educational_backgrounds_model';
import * as user_student_informations_model from '../../../user_management/user_students/models/user_student_informations_model';
import * as user_staff_informations_model from '../../../user_management/user_staffs/models/user_staff_informations_model';
import * as user_teacher_informations_model from '../../../user_management/user_teachers/models/user_teacher_informations_model';
import * as user_parent_informations_model from '../../../user_management/user_parents/models/user_parent_informations_model';
import * as branch_transport_drivers_model from '../../../branch_management/branch_transport_drivers/models/branch_transport_drivers_model';
import * as branch_transports_model from '../../../branch_management/branch_transports/models/branch_transports_model';
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
    BranchesModel: typeof branches_model.DataModel;
    BranchAdminsModel: typeof branch_admins_model.DataModel;
    BranchParentsModel: typeof branch_parents_model.DataModel;
    BranchStaffsModel: typeof branch_staffs_model.DataModel;
    BranchStudentsModel: typeof branch_students_model.DataModel;
    BranchTeachersModel: typeof branch_teachers_model.DataModel;
    UserAdminsModel: typeof user_admins_model.DataModel;
    UserStaffsModel: typeof user_staffs_model.DataModel;
    UserTeachersModel: typeof user_teachers_model.DataModel;
    UserStudentsModel: typeof user_students_model.DataModel;
    UserParentsModel: typeof user_parents_model.DataModel;
    UserStudentEducationalBackgroundsModel: typeof user_student_educational_backgrounds_model.DataModel;
    UserStudentInformationsModel: typeof user_student_informations_model.DataModel;
    UserStaffsInformationsModel: typeof user_staff_informations_model.DataModel;
    UserteacherInformationsModel: typeof user_teacher_informations_model.DataModel;
    UserParentInformationsModel: typeof user_parent_informations_model.DataModel;
    BranchTransportDriversModel: typeof branch_transport_drivers_model.DataModel;
    BranchTransportsModel: typeof branch_transports_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const BranchesModel = branches_model.init(sequelize);
    const BranchAdminsModel = branch_admins_model.init(sequelize);
    const BranchParentsModel = branch_parents_model.init(sequelize);
    const BranchStaffsModel = branch_staffs_model.init(sequelize);
    const BranchStudentsModel = branch_students_model.init(sequelize);
    const BranchTeachersModel = branch_teachers_model.init(sequelize);
    const UserAdminsModel = user_admins_model.init(sequelize);
    const UserStaffsModel = user_staffs_model.init(sequelize);
    const UserTeachersModel = user_teachers_model.init(sequelize);
    const UserStudentsModel = user_students_model.init(sequelize);
    const UserParentsModel = user_parents_model.init(sequelize);
    const UserStudentEducationalBackgroundsModel =
        user_student_educational_backgrounds_model.init(sequelize);
    const UserStudentInformationsModel =
        user_student_informations_model.init(sequelize);
    const UserStaffsInformationsModel =
        user_staff_informations_model.init(sequelize);
    const UserteacherInformationsModel =
        user_teacher_informations_model.init(sequelize);
    const UserParentInformationsModel =
        user_parent_informations_model.init(sequelize);
    const BranchTransportDriversModel =
        branch_transport_drivers_model.init(sequelize);
    const BranchTransportsModel = branch_transports_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync();

    BranchAdminsModel.belongsTo(UserAdminsModel, {
        foreignKey: 'user_admin_id',
        as: 'user_admin',
    });

    BranchStaffsModel.belongsTo(UserStaffsModel, {
        foreignKey: 'user_staff_id',
        as: 'user_staff',
    });

    BranchTeachersModel.belongsTo(UserTeachersModel, {
        foreignKey: 'user_teacher_id',
        as: 'user_teacher',
    });

    BranchStudentsModel.belongsTo(UserStudentsModel, {
        foreignKey: 'user_student_id',
        as: 'user_student',
    });

    BranchParentsModel.belongsTo(UserParentsModel, {
        foreignKey: 'user_parent_id',
        as: 'user_parent',
    });

    BranchTransportDriversModel.hasMany(BranchTransportsModel, {
        foreignKey: 'branch_transport_driver_id',
        as: 'driver_transports',
    });

    // Project.hasOne(User, {
    //     sourceKey: 'user_id',
    //     foreignKey: 'id',
    //     as: 'user',
    // });

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
        BranchesModel,
        BranchAdminsModel,
        BranchParentsModel,
        BranchStaffsModel,
        BranchStudentsModel,
        BranchTeachersModel,
        UserAdminsModel,
        UserStaffsModel,
        UserTeachersModel,
        UserStudentsModel,
        UserParentsModel,
        UserStudentEducationalBackgroundsModel,
        UserStudentInformationsModel,
        UserStaffsInformationsModel,
        UserteacherInformationsModel,
        UserParentInformationsModel,
        BranchTransportDriversModel,
        BranchTransportsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
