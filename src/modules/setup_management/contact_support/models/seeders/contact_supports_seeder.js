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
        function set_data(branch_id, name, title, number) {
            data.push({
                branch_id,
                name,
                title,
                number,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 'Md Arif', 'Admin', '01789123123');
        set_data(2, 'Md Jamil', 'Teacher', '01789123124');
        set_data(3, 'Md Shuvo', 'Hostel super', '01789123125');

        await queryInterface.bulkDelete('contact_supports', null, {});
        await queryInterface.bulkInsert('contact_supports', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('contact_supports', null, {});
    },
};
