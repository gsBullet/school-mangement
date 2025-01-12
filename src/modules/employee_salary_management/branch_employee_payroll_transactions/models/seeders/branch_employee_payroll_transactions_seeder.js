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
            account_log_id,
            transaction_date,
            base_salary,
            deductions,
            bonuses,
            pay_amount,
            payment_type,
        ) {
            data.push({
                id,
                branch_id,
                staff_id,
                teacher_id,
                account_log_id,
                transaction_date,
                base_salary,
                deductions,
                bonuses,
                pay_amount,
                payment_type,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            1,
            1,
            1,
            1,
            '2024-01-12',
            20000,
            2000,
            5000,
            23000,
            'Regular',
        );
        set_data(
            2,
            2,
            2,
            2,
            2,
            '2024-01-12',
            25000,
            3000,
            3000,
            25000,
            'Overtime',
        );
        set_data(
            3,
            3,
            3,
            3,
            3,
            '2024-01-12',
            15000,
            1000,
            2000,
            16000,
            'Bonus',
        );

        await queryInterface.bulkDelete(
            'branch_employee_payroll_transactions',
            null,
            {},
        );
        await queryInterface.bulkInsert(
            'branch_employee_payroll_transactions',
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
            'branch_employee_payroll_transactions',
            null,
            {},
        );
    },
};
