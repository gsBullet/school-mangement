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

const tableName = 'leave_application_paids';
const modelName = 'LeaveApplicationPaidsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type leave_status = 'pending' | 'approved' | 'rejected';
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare branch_teacher_id: number;
    declare branch_staff_id: number;
    declare start_date: string;
    declare end_date: string;
    declare reason: string;
    declare leave_status: leave_status;
    declare attachments: string;
    declare total_days: number;
    declare approved_start_date: string;
    declare approved_end_date: string;

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
            branch_teacher_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            branch_staff_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            start_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            end_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            reason: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            leave_status: {
                type: DataTypes.ENUM('pending', 'approved', 'rejected'),
                allowNull: true,
            },
            attachments: {
                type: DataTypes.STRING(200),
                allowNull: true,
            },
            total_days: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            approved_start_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            approved_end_date: {
                type: DataTypes.DATE,
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
