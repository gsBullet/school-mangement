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
            event_type_id,
            event_name,
            date,
            description,
        ) {
            data.push({
                id,
                branch_id,
                event_type_id,
                event_name,
                date,
                description,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            1,
            1,
            'First term exam',
            '2024-12-12',
            'On 14 March first term exam',
        );
        set_data(
            2,
            2,
            2,
            'Mid term exam',
            '2024-12-12',
            'On 14 april first term exam',
        );
        set_data(
            3,
            3,
            3,
            'Final exam',
            '2024-12-12',
            'On 14 december final exam',
        );

        await queryInterface.bulkDelete('academic_calendars', null, {});
        await queryInterface.bulkInsert('academic_calendars', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('academic_calendars', null, {});
    },
};
