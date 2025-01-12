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
            opening_balance,
            title,
            number,
            description,
            date,
        ) {
            data.push({
                id,
                branch_id,
                opening_balance,
                title,
                number,
                description,
                date,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            1,
            4000,
            'Bank',
            '34345445',
            'This is islamin bank account',
            '2024-02-14',
        );
        set_data(
            2,
            2,
            5000,
            'Bkash',
            '021749325',
            'This is mobile banking account',
            '2024-02-14',
        );
        set_data(
            3,
            3,
            4500,
            'Nagad',
            '938574924',
            'This is mobile banking account',
            '2024-02-14',
        );

        await queryInterface.bulkDelete('accounts', null, {});
        await queryInterface.bulkInsert('accounts', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('accounts', null, {});
    },
};
