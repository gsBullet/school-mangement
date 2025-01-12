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
            price,
            attachment,
            image,
        ) {
            data.push({
                branch_id,
                title,
                description,
                price,
                attachment,
                image,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            'Teacher meatings',
            'On sunday will be held on Teacher meatings',
            50,
            'file.pdf',
            'image.jpg',
        );
        set_data(
            2,
            'Teacher meatings',
            'On sunday will be held on Teacher meatings',
            50,
            'file.pdf',
            'image.jpg',
        );
        set_data(
            3,
            'Teacher meatings',
            'On sunday will be held on Teacher meatings',
            50,
            'file.pdf',
            'image.jpg',
        );

        await queryInterface.bulkDelete('exam_paper_designs', null, {});
        await queryInterface.bulkInsert('exam_paper_designs', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('exam_paper_designs', null, {});
    },
};
