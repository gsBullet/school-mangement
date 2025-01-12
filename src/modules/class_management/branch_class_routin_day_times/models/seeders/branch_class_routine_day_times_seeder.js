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
            branch_class_routine_id,
            branch_teacher_id,
            day,
            start_time,
            end_time,
            branch_class_room_id,
        ) {
            data.push({
                id,
                branch_id,
                branch_class_routine_id,
                branch_teacher_id,
                day,
                start_time,
                end_time,
                branch_class_room_id,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(1, 1, 1, 1, '2024-09-07', '08:00:00', '09:00:00', 1);
        set_data(2, 1, 1, 2, '2024-09-08', '09:00:00', '10:00:00', 2);
        set_data(3, 1, 1, 3, '2024-09-09', '10:00:00', '11:00:00', 3);
        set_data(4, 1, 1, 2, '2024-09-10', '11:30:00', '12:30:00', 3);
        set_data(5, 1, 1, 3, '2024-09-11', '12:30:00', '01:30:00', 3);
        set_data(6, 1, 1, 1, '2024-09-12', '02:00:00', '03:00:00', 3);
        set_data(7, 1, 1, 3, '2024-09-13', '03:00:00', '04:00:00', 3);

        set_data(8, 1, 2, 2, '2024-09-07', '08:00:00', '09:00:00', 2);
        set_data(9, 1, 2, 1, '2024-09-08', '09:00:00', '10:00:00', 1);
        set_data(10, 1, 2, 3, '2024-09-09', '10:00:00', '11:00:00', 3);
        set_data(11, 1, 2, 2, '2024-09-10', '11:30:00', '12:30:00', 3);
        set_data(12, 1, 2, 3, '2024-09-11', '12:30:00', '01:30:00', 3);
        set_data(13, 1, 2, 1, '2024-09-12', '02:00:00', '03:00:00', 3);
        set_data(14, 1, 2, 3, '2024-09-13', '03:00:00', '04:00:00', 3);

        set_data(15, 1, 3, 2, '2024-09-07', '08:00:00', '09:00:00', 2);
        set_data(16, 1, 3, 1, '2024-09-08', '09:00:00', '10:00:00', 1);
        set_data(17, 1, 3, 3, '2024-09-09', '10:00:00', '11:00:00', 3);
        set_data(18, 1, 3, 2, '2024-09-10', '11:30:00', '12:30:00', 3);
        set_data(19, 1, 3, 3, '2024-09-11', '12:30:00', '01:30:00', 3);
        set_data(20, 1, 3, 1, '2024-09-12', '02:00:00', '03:00:00', 3);
        set_data(21, 1, 3, 3, '2024-09-13', '03:00:00', '04:00:00', 3);

        set_data(22, 1, 4, 2, '2024-09-07', '08:00:00', '09:00:00', 2);
        set_data(23, 1, 4, 1, '2024-09-08', '09:00:00', '10:00:00', 1);
        set_data(24, 1, 4, 3, '2024-09-09', '10:00:00', '11:00:00', 3);
        set_data(25, 1, 4, 2, '2024-09-10', '11:30:00', '12:30:00', 3);
        set_data(26, 1, 4, 3, '2024-09-11', '12:30:00', '01:30:00', 3);
        set_data(27, 1, 4, 1, '2024-09-12', '02:00:00', '03:00:00', 3);
        set_data(28, 1, 4, 3, '2024-09-13', '03:00:00', '04:00:00', 3);

        await queryInterface.bulkDelete(
            'branch_class_Routine_day_times',
            null,
            {},
        );
        await queryInterface.bulkInsert(
            'branch_class_Routine_day_times',
            data,
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete(
            'branch_class_Routine_day_times',
            null,
            {},
        );
    },
};
