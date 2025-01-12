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
            class_id,
            subject_id,
            teacher_id,
            class_course_schedule_id,
            attachment,
        ) {
            data.push({
                id,
                branch_id,
                class_id,
                subject_id,
                teacher_id,
                class_course_schedule_id,
                attachment,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 1, 1, 1, 1, 'file.pdf');
        set_data(2, 2, 2, 2, 2, 2, 'file.pdf');
        set_data(3, 3, 3, 3, 3, 3, 'file.pdf');

        await queryInterface.bulkDelete(
            'class_course_schedule_attachments',
            null,
            {},
        );
        await queryInterface.bulkInsert(
            'class_course_schedule_attachments',
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
            'class_course_schedule_attachments',
            null,
            {},
        );
    },
};
