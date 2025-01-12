import {
    // Association,
    DataTypes,
    // HasManyAddAssociationMixin,
    // HasManyCountAssociationsMixin,
    // HasManyCreateAssociationMixin,
    // HasManyGetAssociationsMixin,
    // HasManyHasAssociationMixin,
    // HasManySetAssociationsMixin,
    // HasManyAddAssociationsMixin,
    // HasManyHasAssociationsMixin,
    // HasManyRemoveAssociationMixin,
    // HasManyRemoveAssociationsMixin,
    Model,
    // ModelDefined,
    // Optional,
    Sequelize,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DefaultSetOptions,
    // NonAttribute,
    // ForeignKey,
} from 'sequelize';

const tableName = 'user_teacher_informations';
const modelName = 'UserTeacherInformationsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';
type gender = 'male' | 'female';
type blood_group = 'A+' | 'B+' | 'AB+' | 'A-' | 'B-' | 'AB-' | 'O-' | 'O+';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare user_teacher_id?: number;
    declare parmenent_address: string;
    declare present_address: string;
    declare guardian_contact_number?: string;
    declare country?: string;
    declare district?: string;
    declare post_code?: string;
    declare gender?: gender;
    declare joining_date?: string;
    declare department?: string;
    declare is_married?: boolean;
    declare blood_group?: blood_group;
    declare national_id?: string;
    declare certificate_no_1?: string;
    declare certificate_no_2?: string;
    declare status?: status;

    declare creator?: number;

    declare created_at?: CreationOptional<Date>;
    declare updated_at?: CreationOptional<Date>;
}

function init(sequelize: Sequelize) {
    DataModel.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            user_teacher_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
            },
            parmenent_address: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            present_address: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            guardian_contact_number: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            country: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            district: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            post_code: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            gender: {
                type: new DataTypes.ENUM('male', 'female'),
                allowNull: true,
            },
            // joining_date: {
            //     type: new DataTypes.STRING(20),
            //     allowNull: true,
            // },
            // department: {
            //     type: new DataTypes.STRING(20),
            //     allowNull: true,
            // },
            // position: {
            //     type: new DataTypes.STRING(200),
            //     allowNull: true,
            // },
            national_id: {
                type: new DataTypes.STRING(250),
                allowNull: true,
            },
            certificate_no_1: {
                type: new DataTypes.STRING(250),
                allowNull: true,
            },
            certificate_no_2: {
                type: new DataTypes.STRING(250),
                allowNull: true,
            },
            blood_group: {
                type: new DataTypes.ENUM(
                    'A+',
                    'B+',
                    'AB+',
                    'A-',
                    'B-',
                    'AB-',
                    'O-',
                    'O+',
                ),
                defaultValue: 'B+',
            },
            is_married: {
                type: new DataTypes.BOOLEAN(),
                allowNull: true,
            },
            status: {
                type: new DataTypes.ENUM('active', 'deactive'),
                defaultValue: 'active',
            },

            creator: {
                type: new DataTypes.TINYINT(),
                allowNull: true,
                defaultValue: null,
            },
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            tableName: tableName,
            modelName: modelName,
            sequelize, // passing the `sequelize` instance is required
            underscored: true,
        },
    );

    return DataModel;
}

export { init, DataModel };
