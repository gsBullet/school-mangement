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
            user_student_id,
            previous_institute,
            year_of_leaving,
            result,
            transfer_cirtificate,
        ) {
            data.push({
                id,
                user_student_id,
                previous_institute,
                year_of_leaving,
                result,
                transfer_cirtificate,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,

            1,
            'viqarunnisa',
            '2024-02-14',
            'A+',
            'transcript.pdf',
        );
        set_data(
            2,

            2,
            'Notre dame',
            '2024-12-10',
            'A+',
            'transcript.pdf',
        );
        set_data(
            3,

            3,
            'Pilot',
            '2024-10-09',
            'A-',
            'tljaldslf.pdf',
        );

        await queryInterface.bulkDelete(
            'user_student_educational_backgrounds',
            null,
            {},
        );

        await queryInterface.bulkInsert(
            'user_student_educational_backgrounds',
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
            'user_student_educational_backgrounds',
            null,
            {},
        );
    },
};
