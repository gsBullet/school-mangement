'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        let data = [];
        function set_data(branch_id, title, description) {
            data.push({
                branch_id,
                title,
                description,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 'break', "it's time to break for lunch");
        set_data(2, 'break', "it's time to break for lunch");
        set_data(3, 'break', "it's time to break for lunch");

        await queryInterface.bulkDelete('notice_categorys', null, {});
        await queryInterface.bulkInsert('notice_categorys', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('notice_categorys', null, {});
    },
};
