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
        set_data(1, 'admin1', 'admin1@gmail.com', '01784493854', 'avatar.png');
        set_data(2, 'admin2', 'admin2@gmail.com', '01784493855', 'avatar.png');
        set_data(3, 'admin3', 'admin3@gmail.com', '01784493856', 'avatar.png');

        await queryInterface.bulkDelete('user_admins', null, {});
        await queryInterface.bulkInsert('user_admins', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_admins', null, {});
    },
};
