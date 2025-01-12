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

const tableName = 'user_parent_informations';
const modelName = 'UserParentInformationsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare user_parent_id: number;
    declare parmenent_address: string;
    declare present_address: string;
    declare guardian_contact_number?: string;
    declare ismarried?: boolean;
    declare graduation?: string;
    declare occupation?: string;
    declare status?: status;
    declare token?: string | null;
    declare forget_code?: string | null;
    declare user_agent?: string | null;

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
            user_parent_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: true,
            },
            parmenent_address: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            present_address: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            guardian_contact_number: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            ismarried: {
                type: new DataTypes.BOOLEAN(),
                allowNull: true,
            },
            graduation: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            occupation: {
                type: new DataTypes.STRING(40),
                allowNull: true,
            },
            status: {
                type: new DataTypes.ENUM('active', 'deactive'),
                defaultValue: 'active',
            },
            token: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            forget_code: {
                type: new DataTypes.STRING(10),
                allowNull: true,
            },
            user_agent: {
                type: new DataTypes.STRING(150),
                allowNull: true,
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
