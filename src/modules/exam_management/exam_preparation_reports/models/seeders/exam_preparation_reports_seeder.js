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
        function set_data(id, branch_id, text, attachment, comments, approved) {
            data.push({
                id,
                branch_id,
                text,
                attachment,
                comments,
                approved,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 'Something', 'file.pdf', 'This is very good', 'yes');
        set_data(2, 2, 'English', 'file.pdf', 'This is excilent', 'yes');
        set_data(3, 3, 'Math', 'file.pdf', 'This is also good', 'no');

        await queryInterface.bulkDelete('exam_preparation_reports', null, {});
        await queryInterface.bulkInsert('exam_preparation_reports', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('exam_preparation_reports', null, {});
    },
};
