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
        function set_data(id, branch_id, year_month, description) {
            data.push({
                id,
                branch_id,
                year_month,
                description,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, '2020-02-14', 'This is islamin bank account');
        set_data(2, 2, '2022-02-14', 'This is mobile banking account');
        set_data(3, 3, '2024-02-14', 'This is mobile banking account');

        await queryInterface.bulkDelete('account_periods', null, {});
        await queryInterface.bulkInsert('account_periods', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('account_periods', null, {});
    },
};
