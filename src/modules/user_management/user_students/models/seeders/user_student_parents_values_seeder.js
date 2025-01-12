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
            user_student_id,
            relation,
            is_parent,
            user_parent_id,
        ) {
            data.push({
                id,
                user_student_id,
                relation,
                is_parent,
                user_parent_id,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 'father', '1', 1);
        set_data(2, 1, 'brother', '0', 2);
        set_data(3, 1, 'uncle', '0', 3);

        set_data(4, 3, 'father', '1', 1);
        set_data(5, 3, 'brother', '0', 2);
        set_data(6, 3, 'uncle', '0', 3);

        set_data(7, 5, 'father', '1', 1);
        set_data(8, 5, 'brother', '0', 2);
        set_data(9, 5, 'uncle', '0', 3);

        set_data(10, 2, 'father', '1', 4);
        set_data(11, 2, 'brother', '0', 5);
        set_data(12, 2, 'uncle', '0', 6);

        set_data(13, 4, 'father', '1', 7);
        set_data(14, 4, 'brother', '0', 8);
        set_data(15, 4, 'uncle', '0', 9);

        await queryInterface.bulkDelete('user_student_parents', null, {});

        await queryInterface.bulkInsert('user_student_parents', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_student_parents', null, {});
    },
};
