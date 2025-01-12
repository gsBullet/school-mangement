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
            user_teacher_id,
            parmenent_address,
            present_address,
            guardian_contact_number,
            ismarried,
            graduation,
            status,
        ) {
            data.push({
                id,
                user_teacher_id,
                parmenent_address,
                present_address,
                guardian_contact_number,
                ismarried,
                graduation,
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
            'active',
        );

        queryInterface.bulkDelete('user_teacher_informations');
        await queryInterface.bulkInsert('user_teacher_informations', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_teacher_informations', null, {});
    },
};
