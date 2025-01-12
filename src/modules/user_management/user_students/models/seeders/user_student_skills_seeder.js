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
        function set_data(id, user_student_id, title, level, branch_id) {
            data.push({
                id,
                user_student_id,
                title,
                level,
                branch_id,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 'Photographer', 'high', 1);
        set_data(2, 2, 'Programmer', 'mid', 2);
        set_data(3, 3, 'Athlete', 'mid', 3);

        await queryInterface.bulkDelete('user_student_skills', null, {});

        await queryInterface.bulkInsert('user_student_skills', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_student_skills', null, {});
    },
};
