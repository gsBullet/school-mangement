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
        function set_data(id, branch_id, title, description) {
            data.push({
                id,
                branch_id,
                title,
                description,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            1,
            'Abdur Rahman',
            'He is a doctor who invest 10% of our share',
        );
        set_data(
            2,
            2,
            'Eng. Abdul Malek',
            'He is a Engineer who invest 20% of our share',
        );
        set_data(
            3,
            3,
            'Abdullah Sajid',
            'He is a teacher who invest 5% of our share',
        );

        await queryInterface.bulkDelete('investors', null, {});
        await queryInterface.bulkInsert('investors', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('investors', null, {});
    },
};
