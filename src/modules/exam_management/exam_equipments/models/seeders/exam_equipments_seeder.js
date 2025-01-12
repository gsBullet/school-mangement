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
        function set_data(id, branch_id, title, description, attachment) {
            data.push({
                id,
                branch_id,
                title,
                description,
                attachment,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(1, 1, 'Question', 'On 14 March first term exam', 'file.pdf');
        set_data(2, 2, 'Paper', 'On 14 april first term exam', 'file.pdf');
        set_data(3, 3, 'Pen', 'On 14 december final exam', 'file.pdf');

        await queryInterface.bulkDelete('exam_equipments', null, {});
        await queryInterface.bulkInsert('exam_equipments', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('exam_equipments', null, {});
    },
};
