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
            exam_id,
            exam_equipment_id,
            target_branch_id,
            received,
        ) {
            data.push({
                id,
                branch_id,
                exam_id,
                exam_equipment_id,
                target_branch_id,
                received,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 1, 1, 1, 'yes');
        set_data(2, 2, 2, 2, 2, 'yes');
        set_data(3, 3, 3, 3, 3, 'no');

        await queryInterface.bulkDelete(
            'exam_equipment_sent_to_branches',
            null,
            {},
        );
        await queryInterface.bulkInsert(
            'exam_equipment_sent_to_branches',
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
            'exam_equipment_sent_to_branches',
            null,
            {},
        );
    },
};
