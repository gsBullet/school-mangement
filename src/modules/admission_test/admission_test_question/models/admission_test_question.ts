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

const tableName = 'admission_test_question';
const modelName = 'AdmissionTestQuestionModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type feedback = 'available' | 'lost' | 'waste' | 'date over';
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare question_title: string;
    declare question_type: string;
    declare question_written: string;
    declare question_options: string;
    declare is_right_option: boolean;
    declare right_answer: boolean;

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
            question_title: {
                type: new DataTypes.STRING(255),
                allowNull: true,
            },
            question_type: {
                type: new DataTypes.ENUM('quiz', 'written'),
                allowNull: true,
            },
            question_written: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            question_options: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            is_right_option: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            right_answer: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },

            // feedback: {
            //     type: DataTypes.ENUM('available', 'lost', 'waste', 'date over'),
            //     allowNull: true,
            // },

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
