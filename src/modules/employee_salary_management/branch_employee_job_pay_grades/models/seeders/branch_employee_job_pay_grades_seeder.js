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
        function set_data(id, grade_name, min_salary, max_salary) {
            data.push({
                id,
                grade_name,
                min_salary,
                max_salary,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 'A-Grade', 25000, 75000);
        set_data(2, 'b-Grade', 15000, 25000);
        set_data(3, 'A-Grade', 7000, 15000);

        await queryInterface.bulkDelete(
            'branch_employee_job_pay_grades',
            null,
            {},
        );
        await queryInterface.bulkInsert(
            'branch_employee_job_pay_grades',
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
            'branch_employee_job_pay_grades',
            null,
            {},
        );
    },
};
