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
            user_student_id,
            user_student_document_title_id,
            file,
            issue_date,
            expire_date,
        ) {
            data.push({
                id,
                user_student_id,
                user_student_document_title_id,
                file,
                issue_date,
                expire_date,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 1, 'file1.pdf', '2024-02-14', '2024-02-14');
        set_data(2, 2, 2, 'file2.pdf', '2024-12-10', '2024-02-14');
        set_data(3, 3, 3, 'file3.pdf', '2024-10-09', '2024-02-14');

        await queryInterface.bulkDelete(
            'user_student_document_values',
            null,
            {},
        );

        await queryInterface.bulkInsert(
            'user_student_document_values',
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
            'user_student_document_values',
            null,
            {},
        );
    },
};
