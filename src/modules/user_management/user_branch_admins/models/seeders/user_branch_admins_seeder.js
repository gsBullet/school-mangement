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
            name,
            email,
            phone_number,
            image = '/assets/dashboard/images/avatar.png',
            status,
        ) {
            data.push({
                id,
                name,
                email,
                phone_number,
                image,
                password:
                    '$2a$12$.aO5lxRR2qnICFEhMGaK8.aoAut89QnkhMn4hASjuvXfDA9StWAp6',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            'user1',
            'user1@gmail.com',
            '0189783434',
            '/assets/dashboard/images/avatar.png',
        );
        set_data(
            2,
            'user2',
            'user2@gmail.com',
            '0289783435',
            '/assets/dashboard/images/avatar.png',
        );
        set_data(
            3,
            'user3',
            'user3@gmail.com',
            '0289783436',
            '/assets/dashboard/images/avatar.png',
        );

        queryInterface.bulkDelete('user_branch_admins');
        await queryInterface.bulkInsert('user_branch_admins', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_branch_admins', null, {});
    },
};
