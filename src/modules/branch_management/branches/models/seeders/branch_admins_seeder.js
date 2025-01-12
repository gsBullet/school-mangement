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
        function set_data(id, user_admin_id, status, branch_id) {
            data.push({
                id,
                user_admin_id,
                status,
                branch_id,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        /** admin connected with three branch */
        set_data(1, 1, 'active', 1);
        set_data(2, 1, 'deactive', 1);
        set_data(3, 1, 'active', 1);

        set_data(4, 2, 'active', 2);
        set_data(5, 3, 'active', 3);

        await queryInterface.bulkDelete('branch_admins', null, {});
        await queryInterface.bulkInsert('branch_admins', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/branch_management/branches/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_admins', null, {});
    },
};
