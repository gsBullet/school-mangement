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
            branch_building_room_id,
            branch_building_id,
            seat_no,
            details,
            image,
        ) {
            data.push({
                id,
                branch_id,
                branch_building_room_id,
                branch_building_id,
                seat_no,
                details,
                image,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            1,
            1,
            1,
            '3A1',
            'single seat with attached bath',
            'avatar.png',
        );

        set_data(
            2,
            2,
            2,
            2,
            '3A2',
            'double seat with attached bath',
            'avatar.png',
        );

        set_data(3, 3, 3, 3, '3A3', 'just single seat', 'avatar.png');

        await queryInterface.bulkDelete('branch_building_room_beds', null, {});
        await queryInterface.bulkInsert('branch_building_room_beds', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_building_room_beds', null, {});
    },
};
