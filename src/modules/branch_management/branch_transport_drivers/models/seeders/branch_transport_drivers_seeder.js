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
            name,
            driver_number,
            assistant_number_1,
            assistant_number_2,
            present_address,
            driver_licence,
            licence_number,
            permanent_address,
        ) {
            data.push({
                id,
                branch_id,
                name,
                driver_number,
                assistant_number_1,
                assistant_number_2,
                present_address,
                driver_licence,
                licence_number,
                permanent_address,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            1,
            'john doe',
            '01837483748',
            '019289489',
            '382984293',
            'Mirpur, dhaka',
            'sjhsj35434',
            'sjhsj35434',
            'cumilla',
        );

        set_data(
            2,
            2,
            'bryan lara',
            '01837483748',
            '019289489',
            '382984293',
            'Uttora, dhaka',
            'sjhsj35434',
            'sjhsj35434',
            'cumilla',
        );

        set_data(
            3,
            3,
            'jack kalys',
            '01837483748',
            '019289489',
            '382984293',
            'Mohakhali, dhaka',
            'sjhsj35434',
            'sjhsj35434',
            'cumilla',
        );

        await queryInterface.bulkDelete('branch_transport_drivers', null, {});
        await queryInterface.bulkInsert('branch_transport_drivers', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_transport_drivers', null, {});
    },
};
