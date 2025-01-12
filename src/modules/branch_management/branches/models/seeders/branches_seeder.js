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
            branch_code,
            name,
            logo,
            address,
            primary_contact,
            email,
            map,
            lat,
            lng,
        ) {
            data.push({
                id,
                branch_code,
                name,
                logo,
                address,
                primary_contact,
                email,
                map,
                lat,
                lng,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            '1',
            'kustia',
            'logo.png',
            'Khulna',
            '01789373847',
            'kustia@cdt.com',
            'map location',
            'latitude',
            'longitude',
        );
        set_data(
            2,
            '2',
            'Demra, dhaka',
            'logo.png',
            'Dhaka',
            '01789373848',
            'demradhaka@cdt.com',
            'map location',
            'latitude',
            'longitude',
        );
        set_data(
            3,
            '3',
            'Uttora, dhaka',
            'logo.png',
            'Dhaka',
            '01789373849',
            'uttora@cdt.com',
            'map location',
            'latitude',
            'longitude',
        );

        await queryInterface.bulkDelete('branches', null, {});
        await queryInterface.bulkInsert('branches', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branches', null, {});
    },
};
