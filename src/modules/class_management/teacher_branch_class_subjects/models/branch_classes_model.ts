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

// import {DataModel as Project} from "./project_model"
const tableName = 'branch_classes';
const modelName = 'BranchClassesModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare name: string;
    declare code: string;
    declare capacity: number;
    declare fee: number;
    declare prerequisities: string;
    declare student_instructions: string;
    declare parent_instructions: string;
    declare policies: string;
    declare rules: string;
    declare waiver_rules: string;
    declare discount_rules: string;

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
            name: {
                type: new DataTypes.STRING(40),
                allowNull: true,
            },
            code: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            capacity: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            fee: {
                type: DataTypes.FLOAT.UNSIGNED,
                allowNull: true,
            },
            prerequisities: {
                type: new DataTypes.STRING(120),
                allowNull: true,
            },
            student_instructions: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            parent_instructions: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            policies: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            rules: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            waiver_rules: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            discount_rules: {
                type: new DataTypes.TEXT(),
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
