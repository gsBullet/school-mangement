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
        function set_data(
            id,
            user_staff_id,
            status,
            branch_id,
            possition,
            joining_date,
            department,
        ) {
            data.push({
                id,
                user_staff_id,
                status,
                branch_id,
                possition,
                joining_date,
                department,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 'active', 1, 'junior', '2024-02-14', 'marketing');
        set_data(2, 2, 'deactive', 2, 'senior', '2024-03-15', 'english');
        set_data(3, 3, 'active', 3, 'junior', '2024-12-19', 'It');

        queryInterface.bulkDelete('branch_staffs');
        await queryInterface.bulkInsert('branch_staffs', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_staffs', null, {});
    },
};
