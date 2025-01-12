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
            parent_id,
            name,
            email,
            phone_number,
            whatsapp_number,
            image = '/assets/dashboard/images/avatar.png',
        ) {
            data.push({
                id,
                parent_id,
                name,
                email,
                phone_number,
                whatsapp_number,
                image,
                password:
                    '$2a$12$.aO5lxRR2qnICFEhMGaK8.aoAut89QnkhMn4hASjuvXfDA9StWAp6',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            1,
            'student1',
            'student1@gmail.com',
            '0189783434',
            '0189783434',
            '/assets/dashboard/images/avatar.png',
        );
        set_data(
            2,
            2,
            'student2',
            'student2@gmail.com',
            '0289783435',
            '0289783435',
            '/assets/dashboard/images/avatar.png',
        );
        set_data(
            3,
            3,
            'student3',
            'student3@gmail.com',
            '0289783436',
            '0289783436',
            '/assets/dashboard/images/avatar.png',
        );
        set_data(
            4,
            4,
            'student4',
            'student4@gmail.com',
            '0289783436',
            '0289783436',
            '/assets/dashboard/images/avatar.png',
        );
        set_data(
            5,
            5,
            'student5',
            'student5@gmail.com',
            '0289783436',
            '0289783436',
            '/assets/dashboard/images/avatar.png',
        );

        await queryInterface.bulkDelete('user_students', null, {});
        await queryInterface.bulkInsert('user_students', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_students', null, {});
    },
};
