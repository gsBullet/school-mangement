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
            branch_id,
            assignment_categories_id,
            class_id,
            student_id,
            assignment_id,
            attachment,
            text,
            image,
            comments,
            marks,
            submission_date,
        ) {
            data.push({
                branch_id,
                assignment_categories_id,
                class_id,
                student_id,
                assignment_id,
                attachment,
                text,
                image,
                comments,
                marks,
                submission_date,
                status: 'active',
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
            'attachment',
            'Math assignment submition',
            'image.png',
            'Math assignment',
            60.5,
            '2024-02-14',
        );
        set_data(
            2,
            2,
            2,
            2,
            2,
            'attachment',
            'Math assignment submition',
            'image.png',
            'Math assignment',
            60.5,
            '2024-02-14',
        );
        set_data(
            3,
            3,
            3,
            3,
            3,
            'attachment',
            'Math assignment submition',
            'image.png',
            'Math assignment',
            60.5,
            '2024-02-14',
        );

        await queryInterface.bulkDelete('assignment_submission', null, {});
        await queryInterface.bulkInsert('assignment_submission', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('assignment_submission', null, {});
    },
};
