'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:1234@localhost:3306/institute_management');


class user_admin extends Model {
    static associate(models) {
    }
}
user_admin.init({}, {
    sequelize,
    modelName: 'user_model',
    tableName: 'user_models',
    underscored: true,
    timestamps: true,
    updated_at: 'updateTimestamp',
});

(async function () {
    let data = await user_admin.findOne({where:{id:1}, attributes: ['id','name','preferred_name']});
    console.log(data);
})();
