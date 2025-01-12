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

const tableName = 'branches';
const modelName = 'BranchesModel';

type Infer = InferAttributes<DataModel>;
type InferCreation = InferCreationAttributes<DataModel>;
type status = 'active' | 'deactive';

class DataModel extends Model<Infer, InferCreation> {
    declare id?: CreationOptional<number>;

    declare branch_code: string;
    declare name: string;
    declare logo: string | null;
    declare address: string;
    declare primary_contact: string;
    declare email: string | null;
    declare map: string | null;
    declare lat: string | null;
    declare lng: string | null;

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
            branch_code: {
                type: new DataTypes.STRING(50),
                allowNull: true,
            },
            name: {
                type: new DataTypes.STRING(40),
                allowNull: true,
            },
            logo: {
                type: new DataTypes.STRING(120),
                allowNull: true,
            },
            address: {
                type: new DataTypes.STRING(120),
                allowNull: true,
            },
            primary_contact: {
                type: new DataTypes.STRING(30),
                allowNull: true,
            },
            email: {
                type: new DataTypes.STRING(40),
                allowNull: true,
            },
            map: {
                type: new DataTypes.TEXT(),
                allowNull: true,
            },
            lat: {
                type: new DataTypes.STRING(120),
                allowNull: true,
            },
            lng: {
                type: new DataTypes.STRING(120),
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
