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
        function set_data(id, title) {
            data.push({
                id,
                title,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 'Increment');
        set_data(2, 'Decrement');
        set_data(3, 'Joining');

        await queryInterface.bulkDelete(
            'branch_employee_salary_Types',
            null,
            {},
        );
        await queryInterface.bulkInsert(
            'branch_employee_salary_Types',
            data,
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete(
            'branch_employee_salary_Types',
            null,
            {},
        );
    },
};
