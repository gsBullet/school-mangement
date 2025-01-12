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
            account_category_id,
            account_id,
            account_period_id,
            money_receipt_book_id,
            receipt_no,
            date,
            amount,
            amount_in_text,
            type,
        ) {
            data.push({
                id,
                branch_id,
                account_category_id,
                account_id,
                account_period_id,
                money_receipt_book_id,
                receipt_no,
                date,
                amount,
                amount_in_text,
                type,
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
            1,
            'A123',
            '2024-09-11',
            20000,
            'Twenty thousand taka only',
            'income',
        );
        set_data(
            2,
            2,
            2,
            2,
            2,
            2,
            'B123',
            '2024-09-12',
            30000,
            'Therty thousand taka only',
            'expense',
        );
        set_data(
            3,
            3,
            3,
            3,
            3,
            3,
            'A123',
            '2024-09-14',
            40000,
            'Fourty thousand taka only',
            'income',
        );
        set_data(
            4,
            4,
            2,
            2,
            2,
            2,
            'A324',
            '2024-09-22',
            2000,
            'Two thousand taka only',
            'income',
        );
        set_data(
            5,
            1,
            3,
            2,
            4,
            4,
            'A233',
            '2024-08-24',
            5000,
            'Five thousand taka only',
            'income',
        );
        set_data(
            6,
            1,
            1,
            3,
            1,
            1,
            'C534',
            '2024-08-25',
            3000,
            'Three thousand taka only',
            'income',
        );
        set_data(
            7,
            1,
            1,
            1,
            1,
            1,
            'A123',
            '2024-08-12',
            9000,
            'Nine thousand taka only',
            'expense',
        );
        set_data(
            8,
            1,
            1,
            1,
            1,
            1,
            'B463',
            '2024-08-02',
            2000,
            'Two thousand taka only',
            'income',
        );
        set_data(
            9,
            1,
            1,
            2,
            1,
            1,
            'B973',
            '2024-09-02',
            2300,
            'Two thousand three hundred taka only',
            'income',
        );

        await queryInterface.bulkDelete('account_logs', null, {});
        await queryInterface.bulkInsert('account_logs', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('account_logs', null, {});
    },
};
