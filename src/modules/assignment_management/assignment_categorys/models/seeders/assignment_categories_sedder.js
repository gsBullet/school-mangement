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
        function set_data(branch_id, title, description) {
            data.push({
                branch_id,
                title,
                description,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 'business loan', 'i want to invest my business');
        set_data(2, 'business loan', 'i want to invest my business');
        set_data(3, 'business loan', 'i want to invest my business');

        await queryInterface.bulkDelete('assignment_categories', null, {});
        await queryInterface.bulkInsert('assignment_categories', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('assignment_categories', null, {});
    },
};
