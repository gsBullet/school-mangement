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
            name,
            code,
            capacity,
            fee,
            prerequisities,
            student_instructions,
            parent_instructions,
            policies,
            rules,
            waiver_rules,
            discount_rules,
        ) {
            data.push({
                id,
                branch_id,
                name,
                code,
                capacity,
                fee,
                prerequisities,
                student_instructions,
                parent_instructions,
                policies,
                rules,
                waiver_rules,
                discount_rules,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            22,
            'IELTS',
            'A101',
            30,
            20000,
            'must know grammer',
            'intermidiate student',
            'teacher',
            'three step exam',
            'some rules',
            '20 % save for GPA-5',
            '10 % discount for 80% marks',
        );
        set_data(
            2,
            33,
            'SPOKEN',
            'A101',
            32,
            5000.5,
            'must pass ssc ',
            'intermidiate student',
            'teacher',
            'three step exam',
            'some rules',
            '20 % save for GPA-5',
            '10 % discount for 80% marks',
        );
        set_data(
            3,
            44,
            'WEB developer',
            'A101',
            44,
            15000,
            'must have personal pc',
            'intermidiate student',
            'teacher',
            'three step exam',
            'some rules',
            '20 % save for GPA-5',
            '10 % discount for 80% marks',
        );

        await queryInterface.bulkDelete('branch_classes', null, {});
        await queryInterface.bulkInsert('branch_classes', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_classes', null, {});
    },
};
