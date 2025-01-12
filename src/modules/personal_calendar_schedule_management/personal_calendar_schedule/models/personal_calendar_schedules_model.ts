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

const tableName = 'personal_calendar_schedules';
const modelName = 'PersonalCalendarSchedulesModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';
type is_complete = 'pending' | 'running' | 'completed';
type priority = 'high' | 'medium' | 'low';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare admin_id: number;
    declare staff_id: number;
    declare teacher_id: number;
    declare student_id: number;
    declare parent_id: number;

    declare title: string;
    declare description: string;
    declare date: string;
    declare reminder_date: string;
    declare is_complete: is_complete; ///enum
    declare priority?: priority;
    declare location: string;
    declare map_link: string;

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
            admin_id: {
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
            student_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            parent_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },

            title: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            description: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            reminder_date: {
                type: new DataTypes.DATE(),
                allowNull: true,
            },
            is_complete: {
                type: new DataTypes.ENUM('pending', 'running', 'completed'),
                allowNull: true,
            },
            priority: {
                type: new DataTypes.ENUM('high', 'medium', 'low'),
                defaultValue: 'high',
            },
            location: {
                type: new DataTypes.STRING(150),
                allowNull: true,
            },
            map_link: {
                type: new DataTypes.STRING(),
                allowNull: true,
            },
            creator: {
                type: new DataTypes.TINYINT(),
                allowNull: true,
                defaultValue: null,
            },
            status: {
                type: new DataTypes.ENUM('active', 'deactive'),
                defaultValue: 'active',
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
