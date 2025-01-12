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

const tableName = 'user_student_parents';
const modelName = 'UserStudentParentsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';
type relation =
    | 'father'
    | 'mother'
    | 'husband'
    | 'brother'
    | 'sister'
    | 'uncle';
type is_parent = 1 | 0;

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare user_student_id: number;
    declare relation: relation;
    declare is_parent: is_parent;
    declare user_parent_id: number;

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
            user_student_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
            },
            relation: {
                type: new DataTypes.ENUM(
                    'father',
                    'mother',
                    'husband',
                    'brother',
                    'sister',
                    'uncle',
                ),
                allowNull: true,
            },
            is_parent: {
                type: new DataTypes.ENUM('1', '0'),
                allowNull: true,
            },
            user_parent_id: {
                type: DataTypes.BIGINT.UNSIGNED,
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
