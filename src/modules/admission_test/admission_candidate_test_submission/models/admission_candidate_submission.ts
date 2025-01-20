import {
    DataTypes,
    Model,
    Sequelize,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from 'sequelize';

const tableName = 'admission_candidate_submission';
const modelName = 'AdmissionCandidateSubmissionModel';

type status = 'active' | 'deactive';

class DataModel extends Model<
    InferAttributes<DataModel>,
    InferCreationAttributes<DataModel>
> {
    declare id: CreationOptional<number>;

    declare branch_id?: number;
    declare student_id?: number;
    declare class?: string;

    declare question_id: number;
    declare question_title: string;
    declare question_type: 'quiz' | 'written';
    declare question_written?: string | null;
    declare options1?: string;
    declare options2?: string;
    declare options3?: string;
    declare options4?: string;
    declare is_right_option_1?: boolean;
    declare is_right_option_2?: boolean;
    declare is_right_option_3?: boolean;
    declare is_right_option_4?: boolean;
    declare right_answer?: string;

    declare user_answer?: string;
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
                allowNull: false,
            },
            question_title: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            question_type: {
                type: DataTypes.ENUM('quiz', 'written'),
                allowNull: false,
            },
            question_written: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            options1: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            options2: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            options3: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            options4: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            is_right_option_1: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            is_right_option_2: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            is_right_option_3: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            is_right_option_4: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            right_answer: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            user_answer: {
                type: DataTypes.STRING(255),
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
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
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
