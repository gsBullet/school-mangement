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
            category_id,
            notice_id,
            // admin_id,
            // teacher_id,
            // student_id,
            // staff_id,
            parent_id,
        ) {
            data.push({
                branch_id,
                category_id,
                notice_id,
                // admin_id,
                // teacher_id,
                // student_id,
                // staff_id,
                parent_id,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 1, 1);
        set_data(1, 1, 1, 2);
        set_data(1, 1, 1, 3);
        // await queryInterface.bulkDelete('notice_seen_by_users', null, {});
        await queryInterface.bulkInsert('notice_seen_by_users', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('notice_seen_by_users', null, {});
    },
};
