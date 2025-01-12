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
            notice_category_id,
            title,
            description,
            attachment,
            image,
            notice_for,
        ) {
            data.push({
                branch_id,
                notice_category_id,
                title,
                description,
                attachment,
                image,
                notice_for,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            1,
            'its time to break',
            'its time to break for lunch',
            'its time to break for lunch',
            'image.png',
            'students',
        );
        set_data(
            2,
            2,
            'its time to break',
            'its time to break for lunch',
            'its time to break for lunch',
            'image.png',
            'students',
        );
        set_data(
            3,
            3,
            'its time to break',
            'its time to break for lunch',
            'its time to break for lunch',
            'image.png',
            'students',
        );

        await queryInterface.bulkDelete('notices', null, {});
        await queryInterface.bulkInsert('notices', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('notices', null, {});
    },
};
