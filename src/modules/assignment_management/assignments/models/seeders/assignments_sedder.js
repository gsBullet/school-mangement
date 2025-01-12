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
            branch_id,
            title,
            description,
            assignment_categories_id,
            attachment,
            image,
            mark,
            class_id,
            deadline,
        ) {
            data.push({
                branch_id,
                title,
                description,
                assignment_categories_id,
                attachment,
                image,
                mark,
                class_id,
                deadline,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            'Math',
            'its time to break for lunch',
            1,
            'attachment',
            'image.png',
            50,
            1,
            '2024-02-14',
        );
        set_data(
            2,
            'English',
            'its time to break for lunch',
            2,
            'attachment',
            'image.png',
            50,
            2,
            '2024-02-14',
        );
        set_data(
            3,
            'Physics',
            'its time to break for lunch',
            3,
            'attachment',
            'image.png',
            50,
            3,
            '2024-02-14',
        );

        await queryInterface.bulkDelete('assignments', null, {});
        await queryInterface.bulkInsert('assignments', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('assignments', null, {});
    },
};
