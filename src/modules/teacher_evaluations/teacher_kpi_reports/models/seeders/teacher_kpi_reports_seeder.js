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
            branch_teacher_id,
            kpi_name,
            evaluation_date,
            kpi_value,
        ) {
            data.push({
                id,
                branch_id,
                branch_teacher_id,
                kpi_name,
                evaluation_date,
                kpi_value,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 1, 'Rulles & regulation', '2024-02-14', 78.6);
        set_data(2, 2, 2, 'charecteristics', '2024-02-14', 75.8);
        set_data(3, 3, 3, 'attendance', '2024-02-14', 80);

        await queryInterface.bulkDelete('teacher_kpi_reports', null, {});
        await queryInterface.bulkInsert('teacher_kpi_reports', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('teacher_kpi_reports', null, {});
    },
};
