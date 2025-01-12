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

const tableName = 'student_attendances';
const modelName = 'StudentAttendancesModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type attendance_status = 'present' | 'absent' | 'late' | 'leave';
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id?: number;
    declare branch_student_id: number;
    declare teacher_id: number;
    declare class_id: number;
    declare subject_id: number;
    declare start_time?: string;
    declare end_time?: string;
    declare date: string;
    declare attendance_status: attendance_status;
    declare overtime_hours?: number;
    declare fine_amount?: number;
    declare reward_amount?: number;

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
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            branch_student_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            teacher_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            class_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            subject_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            start_time: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            end_time: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            attendance_status: {
                type: new DataTypes.ENUM('present', 'absent', 'late', 'leave'),
                allowNull: true,
            },
            overtime_hours: {
                type: DataTypes.FLOAT.UNSIGNED,
                allowNull: true,
            },
            fine_amount: {
                type: DataTypes.FLOAT.UNSIGNED,
                allowNull: true,
            },
            reward_amount: {
                type: DataTypes.FLOAT.UNSIGNED,
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
