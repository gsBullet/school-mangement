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
            building_code,
            building_name,
            attachment,
            photo,
            description,
        ) {
            data.push({
                id,
                branch_id,
                building_code,
                building_name,
                attachment,
                photo,
                description,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            11,
            '31-G',
            'proshikkha',
            'file.pdf',
            'building1.png',
            'This is near by mirpur',
        );
        set_data(
            2,
            22,
            '51-C',
            'sky-center',
            'file.pdf',
            'building2.png',
            'This is near by mohakhali',
        );
        set_data(
            3,
            33,
            '10AA',
            'shah ali',
            'file.pdf',
            'building3.png',
            'This is near by mirpur',
        );

        await queryInterface.bulkDelete('branch_buildings', null, {});
        await queryInterface.bulkInsert('branch_buildings', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_buildings', null, {});
    },
};
