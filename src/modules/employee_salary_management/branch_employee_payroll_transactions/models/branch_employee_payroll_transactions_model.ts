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

const tableName = 'branch_employee_payroll_transactions';
const modelName = 'BranchEmployeePayrollTransactionsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type payment_type =
    | 'Regular'
    | 'Overtime'
    | 'Bonus'
    | 'Commission'
    | 'Advanced';
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare staff_id: number;
    declare teacher_id: number;
    declare account_log_id: number;
    declare transaction_date: string;
    declare base_salary: string;
    declare deductions: string;
    declare pay_amount: string;
    declare bonuses: number;
    declare payment_type: payment_type;

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
            staff_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            teacher_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            account_log_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            transaction_date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            base_salary: {
                type: DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            deductions: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            pay_amount: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            bonuses: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            payment_type: {
                type: DataTypes.ENUM(
                    'Regular',
                    'Overtime',
                    'Bonus',
                    'Commission',
                    'Advanced',
                ),
                defaultValue: 'Regular',
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
