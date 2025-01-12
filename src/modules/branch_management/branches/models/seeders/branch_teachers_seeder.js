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
            status,
            branch_id,
            class_teacher_id,
            joining_date,
            department,
        ) {
            data.push({
                id,
                user_teacher_id,
                status,
                branch_id,
                class_teacher_id,
                joining_date,
                department,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 'active', 1, 1, '2024-03-15', 'english');
        set_data(2, 2, 'deactive', 2, 2, '2024-03-15', 'it');
        set_data(3, 3, 'active', 3, 3, '2024-03-15', 'english');

        await queryInterface.bulkDelete('branch_teachers', null, {});
        await queryInterface.bulkInsert('branch_teachers', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_teachers', null, {});
    },
};
