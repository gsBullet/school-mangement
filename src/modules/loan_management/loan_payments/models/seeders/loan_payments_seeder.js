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
            loan_id,
            account_log_id,
            date,
            amount,
            next_payment_date,
            rest_amount,
            paid_amount,
            received_by,
        ) {
            data.push({
                id,
                branch_id,
                loan_id,
                account_log_id,
                date,
                amount,
                next_payment_date,
                rest_amount,
                paid_amount,
                received_by,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            1,
            1,
            1,
            '2024-07-12',
            '20000',
            '2024-08-12',
            '15000',
            '5000',
            1,
        );
        set_data(
            2,
            2,
            2,
            2,
            '2024-07-12',
            '25000',
            '2024-08-12',
            '15000',
            '10000',
            2,
        );
        set_data(
            3,
            3,
            3,
            3,
            '2024-07-12',
            '30000',
            '2024-08-12',
            '20000',
            '10000',
            3,
        );

        await queryInterface.bulkDelete('loan_payments', null, {});
        await queryInterface.bulkInsert('loan_payments', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('loan_payments', null, {});
    },
};
