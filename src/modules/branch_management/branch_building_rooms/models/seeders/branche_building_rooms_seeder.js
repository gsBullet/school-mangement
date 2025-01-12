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
            room_code,
            room_name,
            attachment,
            photo,
            description,
            total_seat,
            building_id,
            total_student,
        ) {
            data.push({
                id,
                branch_id,
                room_code,
                room_name,
                attachment,
                photo,
                description,
                total_seat,
                building_id,
                total_student,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            11,
            '201',
            'padma',
            'file.pdf',
            'room1.png',
            'It is north side of main building',
            44,
            12,
            55,
        );
        set_data(
            2,
            22,
            '202',
            'maghna',
            'file.pdf',
            'room2.png',
            'This is near by south building',
            55,
            23,
            66,
        );
        set_data(
            3,
            33,
            '203',
            'kornofuli',
            'file.pdf',
            'room3.png',
            'This is near by library',
            58,
            15,
            88,
        );

        await queryInterface.bulkDelete('branch_building_rooms', null, {});
        await queryInterface.bulkInsert('branch_building_rooms', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_building_rooms', null, {});
    },
};
