import {
    // Model,
    Sequelize,
} from 'sequelize';
import * as user_students_model from './user_students_model';
import * as user_student_educational_backgrounds_model from './user_student_educational_backgrounds_model';
import * as user_student_informations_model from './user_student_informations_model';
import * as user_student_document_values_model from './user_student_document_values_model';
import * as user_student_parents_model from './user_student_parents_model';
import * as user_student_hostels_model from './user_student_hostels_model';
import * as user_student_transports_model from './user_student_transports_model';
import * as user_student_contact_numbers_model from './user_student_contact_numbers_model';
import * as user_student_skills_model from './user_student_skills_model';
import * as user_student_languages_model from './user_student_languages_model';
import * as user_student_document_titles_model from './user_student_document_titles_model';
import * as user_student_siblings_model from './user_student_siblings_model';
import * as branch_class_students_model from './branch_class_students_model';
import * as branch_classes_model from './branch_classes_model';
import * as branch_staffs_model from './branch_staffs_model';
import * as branch_class_sections_model from './branch_class_sections_model';
import * as branch_class_shifts_model from './branch_class_shifts_model';
import * as branches_model from './branches_model';
import * as user_parents_model from './user_parents_model';
import * as branch_class_subjects_model from './branch_class_subjects_model';
import * as branch_class_fees_model from './branch_class_fees_model';
import * as branch_class_fee_types_model from './branch_class_fee_types_model';
import * as user_student_complain_review_model from './user_student_complain_review_model';
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
    UserStudentsModel: typeof user_students_model.DataModel;
    UserStudentEducationalBackgroundsModel: typeof user_student_educational_backgrounds_model.DataModel;
    UserStudentInformationsModel: typeof user_student_informations_model.DataModel;
    UserStudentDocumentValuesModel: typeof user_student_document_values_model.DataModel;
    UserStudentParentsModel: typeof user_student_parents_model.DataModel;
    UserStudentHostelsModel: typeof user_student_hostels_model.DataModel;
    UserStudentTransportsModel: typeof user_student_transports_model.DataModel;
    UserStudentContactNumbersModel: typeof user_student_contact_numbers_model.DataModel;
    UserStudentSkillsModel: typeof user_student_skills_model.DataModel;
    UserStudentLanguagesModel: typeof user_student_languages_model.DataModel;
    UserStudentDocumentTitlesModel: typeof user_student_document_titles_model.DataModel;
    UserStudentSiblingsModel: typeof user_student_siblings_model.DataModel;
    BranchClassStudentsModel: typeof branch_class_students_model.DataModel;
    BranchClassesModel: typeof branch_classes_model.DataModel;
    BranchStaffsModel: typeof branch_staffs_model.DataModel;
    BranchClassSectionsModel: typeof branch_class_sections_model.DataModel;
    BranchClassShiftsModel: typeof branch_class_shifts_model.DataModel;
    BranchesModel: typeof branches_model.DataModel;
    UserParentsModel: typeof user_parents_model.DataModel;
    BranchClassSubjectsModel: typeof branch_class_subjects_model.DataModel;
    BranchClassFeesModel: typeof branch_class_fees_model.DataModel;
    BranchClassFeeTypesModel: typeof branch_class_fee_types_model.DataModel;
    UserStudentComplainReviewsModel: typeof user_student_complain_review_model.DataModel;
    // Project: typeof project_model.DataModel;
    sequelize: Sequelize;
}
const db = async function (): Promise<models> {
    const UserStudentsModel = user_students_model.init(sequelize);
    const UserStudentEducationalBackgroundsModel =
        user_student_educational_backgrounds_model.init(sequelize);
    const UserStudentInformationsModel =
        user_student_informations_model.init(sequelize);
    const UserStudentDocumentValuesModel =
        user_student_document_values_model.init(sequelize);
    const UserStudentParentsModel = user_student_parents_model.init(sequelize);
    const UserStudentHostelsModel = user_student_hostels_model.init(sequelize);
    const UserStudentTransportsModel =
        user_student_transports_model.init(sequelize);
    const UserStudentContactNumbersModel =
        user_student_contact_numbers_model.init(sequelize);
    const UserStudentSkillsModel = user_student_skills_model.init(sequelize);
    const UserStudentLanguagesModel =
        user_student_languages_model.init(sequelize);
    const UserStudentDocumentTitlesModel =
        user_student_document_titles_model.init(sequelize);
    const UserStudentSiblingsModel =
        user_student_siblings_model.init(sequelize);
    const BranchClassStudentsModel =
        branch_class_students_model.init(sequelize);
    const BranchClassesModel = branch_classes_model.init(sequelize);
    const BranchStaffsModel = branch_staffs_model.init(sequelize);
    const BranchClassSectionsModel =
        branch_class_sections_model.init(sequelize);
    const BranchClassShiftsModel = branch_class_shifts_model.init(sequelize);
    const BranchesModel = branches_model.init(sequelize);
    const UserParentsModel = user_parents_model.init(sequelize);
    const BranchClassSubjectsModel =
        branch_class_subjects_model.init(sequelize);
    const BranchClassFeesModel = branch_class_fees_model.init(sequelize);
    const BranchClassFeeTypesModel =
        branch_class_fee_types_model.init(sequelize);
    const UserStudentComplainReviewsModel =
        user_student_complain_review_model.init(sequelize);
    // const Project = project_model.init(sequelize);

    await sequelize.sync({ force: false });
    BranchClassesModel.hasMany(BranchClassStudentsModel, {
        sourceKey: 'id',
        foreignKey: 'branch_class_id',
        as: 'branch_classes',
    });

    UserStudentsModel.hasOne(UserStudentEducationalBackgroundsModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'educational_background',
    });

    UserStudentsModel.hasOne(UserStudentInformationsModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'student_info',
    });

    UserStudentInformationsModel.hasOne(BranchClassesModel, {
        sourceKey: 's_class',
        foreignKey: 'id',
        as: 'class',
    });

    BranchClassFeesModel.belongsTo(BranchClassFeeTypesModel, {
        foreignKey: 'fee_type_id',
        as: 'fees_types',
    });

    UserStudentInformationsModel.belongsTo(BranchClassesModel, {
        foreignKey: 's_class',
        as: 'children_class',
    });

    UserStudentParentsModel.belongsTo(UserStudentsModel, {
        foreignKey: 'user_student_id',
        as: 'children_basic',
    });

    UserStudentParentsModel.hasOne(UserStudentInformationsModel, {
        foreignKey: 'user_student_id',
        sourceKey: 'user_student_id',
        as: 'children_info',
    });

    UserStudentInformationsModel.hasOne(BranchClassShiftsModel, {
        sourceKey: 'shift',
        foreignKey: 'id',
        as: 'student_shift',
    });

    UserStudentInformationsModel.hasOne(BranchClassSectionsModel, {
        sourceKey: 'section',
        foreignKey: 'id',
        as: 'student_section',
    });

    UserStudentsModel.hasMany(UserStudentInformationsModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'student_infos',
    });

    UserStudentsModel.hasMany(UserStudentContactNumbersModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'student_numbers',
    });

    UserStudentsModel.hasMany(UserStudentDocumentTitlesModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'document_titles',
    });

    UserStudentDocumentTitlesModel.hasOne(UserStudentDocumentValuesModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_document_title_id',
        as: 'values_title',
    });

    UserStudentsModel.hasMany(UserStudentDocumentValuesModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'document_values',
    });

    UserStudentsModel.hasMany(UserStudentEducationalBackgroundsModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'educational_backgrounds',
    });

    UserStudentsModel.hasMany(UserStudentLanguagesModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'languages',
    });

    UserStudentsModel.hasMany(UserStudentParentsModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'parents',
    });

    UserStudentParentsModel.hasOne(UserParentsModel, {
        sourceKey: 'user_parent_id',
        foreignKey: 'id',
        as: 'parent_details',
    });

    UserStudentsModel.hasMany(UserStudentSkillsModel, {
        sourceKey: 'id',
        foreignKey: 'user_student_id',
        as: 'skills',
    });

    UserStudentInformationsModel.belongsTo(UserStudentsModel, {
        foreignKey: 'user_student_id',
        as: 'student',
    });

    BranchClassStudentsModel.hasOne(UserStudentInformationsModel, {
        sourceKey: 'branch_student_id',
        foreignKey: 'user_student_id',
        as: 'infostudent',
    });

    BranchClassStudentsModel.hasOne(UserStudentsModel, {
        sourceKey: 'branch_student_id',
        foreignKey: 'id',
        as: 'branchstudent',
    });

    UserStudentsModel.belongsToMany(UserStudentsModel, {
        through: 'user_student_siblings',
        foreignKey: 'user_student_id',
        otherKey: 'sibling_student_id',
        as: 'user_siblings',
    });

    let models: models = {
        UserStudentsModel,
        UserStudentEducationalBackgroundsModel,
        UserStudentInformationsModel,
        UserStudentDocumentValuesModel,
        UserStudentParentsModel,
        UserStudentHostelsModel,
        UserStudentTransportsModel,
        UserStudentContactNumbersModel,
        UserStudentLanguagesModel,
        UserStudentSkillsModel,
        UserStudentDocumentTitlesModel,
        UserStudentSiblingsModel,
        BranchClassStudentsModel,
        BranchClassesModel,
        BranchStaffsModel,
        BranchClassSectionsModel,
        BranchClassShiftsModel,
        BranchesModel,
        UserParentsModel,
        BranchClassSubjectsModel,
        BranchClassFeesModel,
        BranchClassFeeTypesModel,
        UserStudentComplainReviewsModel,
        // Project,

        sequelize,
    };
    return models;
};
export default db;
