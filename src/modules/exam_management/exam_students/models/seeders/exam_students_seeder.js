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
            branch_id,
            exam_id,
            class_id,
            total_students,
            attendent_students,
            absent_students,
        ) {
            data.push({
                id,
                branch_id,
                exam_id,
                class_id,
                total_students,
                attendent_students,
                absent_students,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 1, 1, '120', '110', '10');
        set_data(2, 2, 2, 2, '150', '145', '5');
        set_data(3, 3, 3, 3, '100', '92', '8');

        await queryInterface.bulkDelete('exam_students', null, {});
        await queryInterface.bulkInsert('exam_students', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('exam_students', null, {});
    },
};
