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
            branch_teacher_id,
            branch_staff_id,
            loan_type_id,
            application_date,
            need_date,
            reason,
            loan_status,
            attachments,
            will_pay_date,
            request_amount,
            pay_amount,
            given_date,
        ) {
            data.push({
                id,
                branch_id,
                branch_teacher_id,
                branch_staff_id,
                loan_type_id,
                application_date,
                need_date,
                reason,
                loan_status,
                attachments,
                will_pay_date,
                request_amount,
                pay_amount,
                given_date,
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
            '2024-07-12',
            '2024-05-12',
            'home loan',
            'Pending',
            'asset/file.pdf',
            '2024-10-12',
            '20000',
            '20000',
            '2024-08-12',
        );
        set_data(
            2,
            2,
            2,
            2,
            2,
            '2023-07-12',
            '2023-05-12',
            'Education loan',
            'Approved',
            'asset/file2.pdf',
            '2023-10-12',
            '20000',
            '20000',
            '2023-08-12',
        );
        set_data(
            3,
            3,
            3,
            3,
            3,
            '2024-09-12',
            '2024-06-12',
            'Education loan',
            'Pending',
            'asset/file3.pdf',
            '2024-10-12',
            '20000',
            '20000',
            '2024-08-12',
        );

        await queryInterface.bulkDelete('loan_applications', null, {});
        await queryInterface.bulkInsert('loan_applications', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('loan_applications', null, {});
    },
};
