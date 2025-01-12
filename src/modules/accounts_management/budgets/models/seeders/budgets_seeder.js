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
            account_category,
            title,
            date,
            year,
            amount,
            description,
        ) {
            data.push({
                id,
                branch_id,
                account_category,
                title,
                date,
                year,
                amount,
                description,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            1,
            1,
            'Admission',
            '2024-02-10',
            '2024-02-10',
            20000,
            'This is admission budgets for 2024',
        );
        set_data(
            2,
            2,
            2,
            'Hostel',
            '2024-03-10',
            '2024-03-10',
            30000,
            'This is Hostel budgets for 2024',
        );
        set_data(
            3,
            3,
            3,
            'Couching',
            '2024-02-10',
            '2024-02-10',
            50000,
            'This is Couching budgets for 2024',
        );

        await queryInterface.bulkDelete('budgets', null, {});
        await queryInterface.bulkInsert('budgets', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('budgets', null, {});
    },
};
