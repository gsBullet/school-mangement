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
        function set_data(branch_id, title, description, is_complete, date) {
            data.push({
                branch_id,
                title,
                description,
                is_complete,
                date,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            'Teacher meatings',
            'On sunday will be held on Teacher meatings',
            'running',
            '2024-02-14',
        );
        set_data(
            2,
            'Teacher meatings',
            'On sunday will be held on Teacher meatings',
            'running',
            '2024-02-14',
        );
        set_data(
            3,
            'Teacher meatings',
            'On sunday will be held on Teacher meatings',
            'running',
            '2024-02-14',
        );

        await queryInterface.bulkDelete('tasks', null, {});
        await queryInterface.bulkInsert('tasks', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('tasks', null, {});
    },
};
