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

const tableName = 'loan_applications';
const modelName = 'LoanApplicationsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type loan_status = 'Pending' | 'Approved' | 'Rejected';
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare branch_teacher_id: number;
    declare branch_staff_id: number;
    declare loan_type_id: number;
    declare need_date: string;
    declare application_date: string;
    declare reason: string;
    declare loan_status: loan_status;
    declare attachments: string;
    declare will_pay_date: string;
    declare request_amount: string;
    declare pay_amount: string;
    declare given_date: string;

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
            loan_type_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            need_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            application_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            reason: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            loan_status: {
                type: DataTypes.ENUM('Pending', 'Approved', 'Rejected'),
                allowNull: true,
            },
            attachments: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            will_pay_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            request_amount: {
                type: DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            pay_amount: {
                type: DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            given_date: {
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
