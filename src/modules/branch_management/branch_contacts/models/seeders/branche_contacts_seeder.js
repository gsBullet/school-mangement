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
        function set_data(id, branch_id, title, value) {
            data.push({
                id,
                branch_id,
                title,
                value,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 'spoken', 'addmission issues');
        set_data(2, 2, 'english', 'next week mocktest');
        set_data(3, 3, 'it', 'project meating');

        await queryInterface.bulkDelete('branch_contacts', null, {});
        await queryInterface.bulkInsert('branch_contacts', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_contacts', null, {});
    },
};
