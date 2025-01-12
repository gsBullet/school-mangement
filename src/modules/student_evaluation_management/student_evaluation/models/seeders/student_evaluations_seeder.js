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
            student_evaluation_criteria_id,
            score,
        ) {
            data.push({
                id,
                branch_id,
                branch_student_id,
                student_evaluation_criteria_id,
                score,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 1, 1, 78.6);
        set_data(2, 2, 2, 2, 75.8);
        set_data(3, 3, 3, 3, 80);

        await queryInterface.bulkDelete('student_evaluations', null, {});
        await queryInterface.bulkInsert('student_evaluations', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('student_evaluations', null, {});
    },
};
