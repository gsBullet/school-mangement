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
            branch_student_id,
            leave_type_id,
            start_date,
            end_date,
            reason,
            leave_status,
            attachments,
            total_days,
            approved_start_date,
            approved_end_date,
        ) {
            data.push({
                id,
                branch_id,
                branch_teacher_id,
                branch_staff_id,
                branch_student_id,
                leave_type_id,
                start_date,
                end_date,
                reason,
                leave_status,
                attachments,
                total_days,
                approved_start_date,
                approved_end_date,
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
            '2024-02-14',
            '2024-02-16',
            'due to illness',
            'approved',
            'file1.pdf',
            2,
            '2024-02-14',
            '2024-02-16',
        );
        set_data(
            2,
            2,
            2,
            2,
            2,
            2,
            '2024-02-14',
            '2024-02-16',
            'For personal problem',
            'pending',
            'file2.pdf',
            2,
            '2024-02-14',
            '2024-02-16',
        );
        set_data(
            3,
            3,
            3,
            3,
            3,
            3,
            '2024-02-14',
            '2024-02-15',
            'For personal problem',
            'rejected',
            'file2.pdf',
            1,
            '2024-02-14',
            '2024-02-15',
        );

        await queryInterface.bulkDelete('leave_applications', null, {});
        await queryInterface.bulkInsert('leave_applications', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('leave_applications', null, {});
    },
};
