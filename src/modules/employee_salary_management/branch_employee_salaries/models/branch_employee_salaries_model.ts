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

const tableName = 'branch_employee_salaries';
const modelName = 'BranchEmployeeSalariesModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type is_active = 'yes' | 'no';
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare staff_id: number;
    declare teacher_id: number;
    declare branch_employee_salary_type_id: number;
    declare effective_date: string;
    declare previous_salary: string;
    declare new_salary: string;
    declare reason: string;
    declare changed_by: number;
    declare is_active: is_active;

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
            branch_employee_salary_type_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            effective_date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            previous_salary: {
                type: DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            new_salary: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            reason: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            changed_by: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            is_active: {
                type: DataTypes.ENUM('yes', 'no'),
                defaultValue: 'yes',
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
