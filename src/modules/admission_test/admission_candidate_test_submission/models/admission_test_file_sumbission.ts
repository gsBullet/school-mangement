import {
    DataTypes,
    Model,
    Sequelize,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';

const tableName = 'admission_test_file_submission';
const modelName = 'AdmissionTestFileSubmissionModel';

type status = 'active' | 'deactive';
type question_types = 'quiz' | 'written';

class DataModel extends Model<
    InferAttributes<DataModel>,
    InferCreationAttributes<DataModel>
> {
    declare id: CreationOptional<number>;

    declare branch_id?: number;
    declare student_id?: number;
    declare class?: string;

    declare question_id?: number;
    declare question_title?: string;
    declare question_type?: question_types;

    declare user_answer_file?: string;
    declare marks?: number;
    declare is_pass?: boolean;
    declare given_admission_date?: string;
    declare comment?: string;

    declare status?: status;
    declare creator?: number;

    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
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
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            student_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            class: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            question_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
            },
            question_title: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            question_type: {
                type: DataTypes.ENUM('quiz', 'written'),
                allowNull: true,
            },
            user_answer_file: {
                type: new DataTypes.STRING(255), // Supports storing arrays of objects
                allowNull: true,
            },
            marks: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            is_pass: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            given_admission_date: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            comment: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            status: {
                type: DataTypes.ENUM('active', 'deactive'),
                defaultValue: 'active',
            },
            creator: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: tableName,
            modelName: modelName,
            sequelize,
            underscored: true,
            timestamps: true, // Ensures created_at and updated_at are managed automatically
        },
    );

    return DataModel;
}

export { init, DataModel };
