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
        function set_data(id, branch_id, title, description) {
            data.push({
                id,
                branch_id,
                title,
                description,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 'Hostel bill', 'This is hostel bill account');
        set_data(2, 2, 'Admission bill', 'This is admission bill account');
        set_data(3, 3, 'Couching bill', 'This is couching bill account');

        await queryInterface.bulkDelete('account_categories', null, {});
        await queryInterface.bulkInsert('account_categories', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('account_categories', null, {});
    },
};
