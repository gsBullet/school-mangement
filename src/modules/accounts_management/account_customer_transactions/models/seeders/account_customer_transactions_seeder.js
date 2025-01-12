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
            account_log_id,
            account_customer_id,
            type,
            amount,
        ) {
            data.push({
                id,
                branch_id,
                account_log_id,
                account_customer_id,
                type,
                amount,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 1, 1, 'income', '4000');
        set_data(2, 1, 2, 1, 'expense', '3000');
        set_data(3, 1, 1, 1, 'income', '5000');

        await queryInterface.bulkDelete(
            'account_customer_transactions',
            null,
            {},
        );
        await queryInterface.bulkInsert(
            'account_customer_transactions',
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
            'account_customer_transactions',
            null,
            {},
        );
    },
};
