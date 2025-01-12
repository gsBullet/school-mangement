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
            exam_paper_design_id,
            date,
            order_status,
            payment_status,
        ) {
            data.push({
                branch_id,
                exam_paper_design_id,
                date,
                order_status,
                payment_status,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, '2024-02-14', 'complete', 'complete');
        set_data(2, 2, '2024-02-14', 'complete', 'complete');
        set_data(3, 3, '2024-02-14', 'complete', 'complete');

        await queryInterface.bulkDelete('exam_paper_design_orders', null, {});
        await queryInterface.bulkInsert('exam_paper_design_orders', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('exam_paper_design_orders', null, {});
    },
};
