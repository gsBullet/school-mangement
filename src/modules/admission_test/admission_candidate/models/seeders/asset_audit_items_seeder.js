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
        function set_data(id, branch_id, asset_audit_id, asset_id, feedback) {
            data.push({
                id,
                branch_id,
                asset_audit_id,
                asset_id,
                feedback,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 1, 1, 'available');
        set_data(2, 2, 2, 2, 'waste');
        set_data(3, 3, 3, 3, 'date over');

        await queryInterface.bulkDelete('asset_audit_items', null, {});
        await queryInterface.bulkInsert('asset_audit_items', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('asset_audit_items', null, {});
    },
};
