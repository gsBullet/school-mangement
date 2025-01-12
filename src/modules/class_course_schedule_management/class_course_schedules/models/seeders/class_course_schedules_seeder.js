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
            date,
            topic,
            completion_date,
            is_complete,
            class_type,
            description,
        ) {
            data.push({
                id,
                branch_id,
                class_id,
                subject_id,
                teacher_id,
                date,
                topic,
                completion_date,
                is_complete,
                class_type,
                description,
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
            '2024-02-02',
            'Bnagla',
            '2024-02-02',
            'no',
            'lecture',
            'On 14 March first Bangla lecture',
        );
        set_data(
            2,
            2,
            2,
            2,
            2,
            '2024-03-02',
            'Bnagla',
            '2024-03-02',
            'no',
            'exam',
            'On 14 March first Bangla Exam',
        );
        set_data(
            3,
            3,
            3,
            3,
            3,
            '2024-02-02',
            'English',
            '2024-02-02',
            'no',
            'exam',
            'On 14 March first Bangla Exam',
        );

        await queryInterface.bulkDelete('class_course_schedules', null, {});
        await queryInterface.bulkInsert('class_course_schedules', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('class_course_schedules', null, {});
    },
};
