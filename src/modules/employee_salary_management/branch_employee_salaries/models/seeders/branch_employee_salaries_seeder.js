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
            staff_id,
            teacher_id,
            branch_employee_salary_type_id,
            effective_date,
            previous_salary,
            new_salary,
            reason,
            changed_by,
            is_active,
        ) {
            data.push({
                id,
                branch_id,
                staff_id,
                teacher_id,
                branch_employee_salary_type_id,
                effective_date,
                previous_salary,
                new_salary,
                reason,
                changed_by,
                is_active,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 1, 1, 1, '2024-01-12', 20000, 25000, 'yearly', 1, 'yes');
        set_data(2, 2, 2, 2, 2, '2024-01-12', 25000, 30000, 'yearly', 2, 'yes');
        set_data(3, 3, 3, 3, 3, '2024-01-12', 15000, 20000, 'yearly', 3, 'yes');

        await queryInterface.bulkDelete('branch_employee_salaries', null, {});
        await queryInterface.bulkInsert('branch_employee_salaries', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_employee_salaries', null, {});
    },
};
