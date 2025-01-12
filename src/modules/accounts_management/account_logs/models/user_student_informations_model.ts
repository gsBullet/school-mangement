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

const tableName = 'user_student_informations';
const modelName = 'UserStudentInformationsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type blood_group = 'A+' | 'B+' | 'AB+' | 'A-' | 'B-' | 'AB-' | 'O-' | 'O+';
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare user_student_id: number;
    declare present_address?: string;
    declare permanent_address?: string;
    declare date_of_birth?: Date;
    declare gender: string | null;
    declare nationality?: string | null;
    declare city?: string | null;
    declare state?: string | null;
    declare post_code?: string | null;
    declare country?: string | null;
    declare medical_condition?: string | null;
    declare current_medications?: string | null;
    declare telegram_name?: string | null;
    declare telegram_id?: string | null;
    declare student_id?: string | null;
    declare blood_group?: blood_group;
    declare student_expire_date?: string | null;
    declare admission_date?: string | null;
    declare addmission_no?: string | null;
    declare role_no: string | null;
    declare section?: string | null;
    declare s_class?: number;
    declare shift?: string | null;
    declare division?: string | null;
    declare family_information?: string | null;
    declare shibling_information?: string | null;
    declare birth_certificate?: string | null;
    declare national_id?: string | null;
    declare student_category?: string | null;
    declare religion?: string | null;
    declare cast?: string | null;
    declare student_house?: string | null;
    declare living_house_type?: string | null;
    declare height?: number | null;
    declare weight?: number | null;
    declare as_on_date?: string;

    declare token?: string | null;
    declare forget_code?: string | null;
    declare user_agent?: string | null;

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
            branch_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
            },
            user_student_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
            },
            present_address: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            permanent_address: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            date_of_birth: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            gender: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            nationality: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            city: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            state: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            post_code: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            country: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            medical_condition: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            current_medications: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            telegram_name: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            telegram_id: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            student_id: {
                type: new DataTypes.STRING(100),
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
            student_expire_date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            admission_date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            addmission_no: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            role_no: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            section: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            division: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            family_information: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            shibling_information: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            birth_certificate: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            national_id: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            shift: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            s_class: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
            },
            student_category: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            religion: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            cast: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            student_house: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            living_house_type: {
                type: new DataTypes.STRING(40),
                allowNull: true,
            },
            height: {
                type: new DataTypes.FLOAT(),
                allowNull: true,
            },
            weight: {
                type: new DataTypes.FLOAT(),
                allowNull: true,
            },
            as_on_date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },

            token: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            forget_code: {
                type: new DataTypes.STRING(10),
                allowNull: true,
            },
            user_agent: {
                type: new DataTypes.STRING(150),
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
