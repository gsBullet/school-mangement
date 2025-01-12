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
            branch_id,
            branch_student_id,
            score,
            evaluation_date,
        ) {
            data.push({
                id,
                branch_id,
                branch_student_id,
                score,
                evaluation_date,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 1, 78.6, '2024-02-14');
        set_data(2, 2, 2, 75.8, '2024-02-14');
        set_data(3, 3, 3, 80, '2024-02-14');

        await queryInterface.bulkDelete(
            'student_overall_evaluations',
            null,
            {},
        );
        await queryInterface.bulkInsert(
            'student_overall_evaluations',
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
            'student_overall_evaluations',
            null,
            {},
        );
    },
};
