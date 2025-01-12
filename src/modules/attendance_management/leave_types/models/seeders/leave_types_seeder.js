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

        set_data(1, 1, 'sick leave', 'due to illness');
        set_data(
            2,
            2,
            'casual leave',
            'unplanned time off for personal reasons',
        );
        set_data(
            3,
            3,
            'annual leave',
            'personal time, or other non-medical reasons',
        );

        await queryInterface.bulkDelete('leave_types', null, {});
        await queryInterface.bulkInsert('leave_types', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('leave_types', null, {});
    },
};
