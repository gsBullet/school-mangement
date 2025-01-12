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
            user_parent_id,
            parmenent_address,
            present_address,
            guardian_contact_number,
            ismarried,
            graduation,
            occupation,
            status,
        ) {
            data.push({
                id,
                user_parent_id,
                parmenent_address,
                present_address,
                guardian_contact_number,
                ismarried,
                graduation,
                occupation,
                status,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            1,
            'khulna, jessore',
            'Dhaka, mirpur',
            '01982738437',
            false,
            'SSC',
            'Doctor',
            'active',
        );
        set_data(
            2,
            2,
            'Barishal',
            'Dhaka, motijhil',
            '01982738438',
            false,
            'SSC',
            'social worker',
            'active',
        );
        set_data(
            3,
            3,
            'Chadpur',
            'Dhaka, uttora',
            '01982738439',
            true,
            'HSC',
            'engineer',
            'active',
        );

        queryInterface.bulkDelete('user_parent_informations');
        await queryInterface.bulkInsert('user_parent_informations', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_parent_informations', null, {});
    },
};
