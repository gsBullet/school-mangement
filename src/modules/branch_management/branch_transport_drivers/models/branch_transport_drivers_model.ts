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

const tableName = 'branch_transport_drivers';
const modelName = 'BranchTransportDriversModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare name: string;
    declare driver_number: string;
    declare assistant_number_1: string;
    declare assistant_number_2: string;
    declare present_address: string;
    declare driver_licence: string;
    declare licence_number: string;
    declare permanent_address: string;

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
            driver_number: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            assistant_number_1: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            assistant_number_2: {
                type: new DataTypes.STRING(20),
                allowNull: true,
            },
            present_address: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            driver_licence: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            licence_number: {
                type: new DataTypes.STRING(100),
                allowNull: true,
            },
            permanent_address: {
                type: new DataTypes.STRING(100),
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
