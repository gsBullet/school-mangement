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

const tableName = 'addmission_test';
const modelName = 'AdmissionTestModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type feedback = 'available' | 'lost' | 'waste' | 'date over';
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    // declare admission_test_exam_id?: number;
    declare title?: string;
    declare description?: string;
    declare admission_result_date?: string;
    declare admission_exam_date?: string;
    declare pass_mark?: number;

    declare class?: string;
    // declare feedback: feedback;

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
            // admission_test_exam_id: {
            //     type: DataTypes.INTEGER.UNSIGNED,
            //     autoIncrement: true,
            //     allowNull: true,
            // },
            title: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            description: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            admission_result_date: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            admission_exam_date: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            pass_mark: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            class: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            // feedback: {
            //     type: DataTypes.ENUM('available', 'lost', 'waste', 'date over'),
            //     allowNull: true,
            // },

            status: {
                type: DataTypes.ENUM('active', 'deactive'),
                defaultValue: 'active',
            },
            creator: {
                type: DataTypes.TINYINT(),
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
