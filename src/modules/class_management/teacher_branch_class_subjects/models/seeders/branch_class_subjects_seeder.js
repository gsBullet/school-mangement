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
            branch_class_id,
            branch_class_section_id,
            name,
            code,
            level,
            description,
            credit,
            additional_info,
        ) {
            data.push({
                id,
                branch_id,
                branch_class_id,
                branch_class_section_id,
                name,
                code,
                level,
                description,
                credit,
                additional_info,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            1,
            1,
            1,
            'Bangla',
            '101',
            'A',
            'this is compulsary subject',
            4,
            'this is compulsary subject',
        );
        set_data(
            2,
            1,
            1,
            1,
            'English',
            '202',
            'A',
            'this is compulsary subject',
            3,
            'this is compulsary subject',
        );
        set_data(
            3,
            1,
            1,
            1,
            'Math',
            '303',
            'A',
            'this is not compulsary',
            2,
            'this is not compulsary ',
        );
        set_data(
            4,
            1,
            1,
            1,
            'Social Science',
            '303',
            'A',
            'this is not compulsary',
            2,
            'this is not compulsary ',
        );

        await queryInterface.bulkDelete('branch_class_subjects', null, {});
        await queryInterface.bulkInsert('branch_class_subjects', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('branch_class_subjects', null, {});
    },
};
