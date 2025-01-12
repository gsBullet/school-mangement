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
            meeting_id,
            title,
            description,
            is_complete,
        ) {
            data.push({
                branch_id,
                meeting_id,
                title,
                description,
                is_complete,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            1,
            'Teacher meatings',
            'On sunday will be held on Teacher meatings',
        );
        set_data(
            2,
            2,
            'Teacher meatings',
            'On sunday will be held on Teacher meatings',
        );
        set_data(
            3,
            3,
            'Teacher meatings',
            'On sunday will be held on Teacher meatings',
        );

        await queryInterface.bulkDelete('meeting_agendas', null, {});
        await queryInterface.bulkInsert('meeting_agendas', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('meeting_agendas', null, {});
    },
};
