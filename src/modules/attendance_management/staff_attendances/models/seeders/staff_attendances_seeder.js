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
            branch_staff_id,
            start_time,
            end_time,
            date,
            attendance_status,
            overtime_hours,
            fine_amount,
            reward_amount,
        ) {
            data.push({
                id,
                branch_id,
                branch_staff_id,
                start_time,
                end_time,
                date,
                attendance_status,
                overtime_hours,
                fine_amount,
                reward_amount,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }

        set_data(
            1,
            1,
            1,
            '10:30:00',
            '11:30:00',
            '2024-02-14',
            'present',
            2,
            0,
            2,
        );
        set_data(
            2,
            2,
            2,
            '11:00:00',
            '11:30:00',
            '2024-02-14',
            'late',
            2,
            0.5,
            1,
        );
        set_data(
            3,
            3,
            3,
            '10:30:00',
            '11:30:00',
            '2024-02-14',
            'present',
            2,
            0,
            2,
        );

        await queryInterface.bulkDelete('staff_attendances', null, {});
        await queryInterface.bulkInsert('staff_attendances', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('staff_attendances', null, {});
    },
};
