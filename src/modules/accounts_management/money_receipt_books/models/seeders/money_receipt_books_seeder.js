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
        function set_data(id, branch_id, book_no, start_serial, end_serial) {
            data.push({
                id,
                branch_id,
                book_no,
                start_serial,
                end_serial,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 'A101', '101', '151');
        set_data(2, 2, 'A101', '152', '200');
        set_data(3, 3, 'A101', '101', '251');

        await queryInterface.bulkDelete('money_receipt_books', null, {});
        await queryInterface.bulkInsert('money_receipt_books', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('money_receipt_books', null, {});
    },
};
