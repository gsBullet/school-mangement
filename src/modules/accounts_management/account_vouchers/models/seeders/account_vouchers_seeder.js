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
            account_log_id,
            teacher_id,
            staff_id,
            amount,
            amount_in_text,
            is_approved,
            date,
            description,
            attachment,
        ) {
            data.push({
                id,
                branch_id,
                account_category_id,
                account_log_id,
                teacher_id,
                staff_id,
                amount,
                amount_in_text,
                is_approved,
                date,
                description,
                attachment,
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
            20000,
            'Twenty thousand taka only',
            'pending',
            '2024-02-10',
            'This is house rent',
            'assets/images/file.pdf',
        );
        set_data(
            2,
            2,
            2,
            2,
            2,
            2,
            30000,
            'Thirty thousand taka only',
            'accepted',
            '2024-02-10',
            'This is salary',
            'assets/images/file.pdf',
        );
        set_data(
            3,
            3,
            3,
            3,
            3,
            3,
            40000,
            'Fourty thousand taka only',
            'pending',
            '2024-02-10',
            'This is monthly utilities bill',
            'assets/images/file.pdf',
        );

        await queryInterface.bulkDelete('account_vouchers', null, {});
        await queryInterface.bulkInsert('account_vouchers', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('account_vouchers', null, {});
    },
};
