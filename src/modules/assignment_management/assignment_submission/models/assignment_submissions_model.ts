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

const tableName = 'assignment_submission';
const modelName = 'AssignmentSubmissionsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id?: number;
    declare assignment_categories_id?: number;
    declare class_id?: number;
    declare student_id?: number;
    declare subject_id?: number;
    declare assignment_id?: number;

    declare attachment?: string;
    declare text?: string;
    declare image?: string;
    declare comments?: string;
    declare marks: number;
    declare submission_date?: string;

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
            assignment_categories_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            class_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            student_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            subject_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            assignment_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            text: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            attachment: {
                type: new DataTypes.STRING(128),
                allowNull: true,
            },
            comments: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            image: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            marks: {
                type: new DataTypes.FLOAT().UNSIGNED,
                allowNull: true,
            },
            submission_date: {
                type: new DataTypes.DATE(),
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
