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

        let users = [];
        ['selim', 'karim', 'sahed', 'tarek', 'shafiq'].forEach(async (i) => {
            users.push({
                name: i,
                preferred_name: i,
                status: 1,
                created_at: '2024-02-01 11:45:01',
                updated_at: '2024-02-01 11:45:01',
            });
        });

        await queryInterface.bulkInsert('user_models', users, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_models', null, {});
    },
};
