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

const tableName = 'asset_depreciations';
const modelName = 'AssetDepreciationsModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type feedback = 'available' | 'lost' | 'waste' | 'date over';
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_id: number;
    declare asset_id: number;
    declare useful_life_months: string;
    declare current_value: string;
    declare last_depreciation_date: string;
    declare after_depreciation_value: string;
    declare depreciation_interval: string;
    declare depreciation_amount: string;
    declare depreciation_unit: string;
    declare approximate_lasting_duration: string;

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
            asset_id: {
                type: new DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            useful_life_months: {
                type: DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            current_value: {
                type: DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            last_depreciation_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            after_depreciation_value: {
                type: DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            depreciation_interval: {
                type: DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            depreciation_amount: {
                type: DataTypes.BIGINT().UNSIGNED,
                allowNull: true,
            },
            depreciation_unit: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            approximate_lasting_duration: {
                type: DataTypes.DATE,
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
