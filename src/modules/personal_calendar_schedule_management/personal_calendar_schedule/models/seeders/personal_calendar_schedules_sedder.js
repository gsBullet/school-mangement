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
            admin_id,
            teacher_id,
            student_id,
            staff_id,
            parent_id,
            title,
            description,
            date,
            reminder_date,
            is_complete,
            priority,
            location,
            map_link,
        ) {
            data.push({
                branch_id,
                admin_id,
                teacher_id,
                student_id,
                staff_id,
                parent_id,
                title,
                description,
                date,
                reminder_date,
                is_complete,
                priority,
                location,
                map_link,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            1,
            1,
            1,
            1,
            1,
            'meet with shifat vai',
            'for error soluation',
            '2024-02-14',
            '2024-02-14',
            'completed',
            'high',
            'Mirpur-2, Dhaka-1216',
            'httpa://googlemap.com',
        );
        set_data(
            2,
            2,
            2,
            2,
            2,
            2,
            'meet with shifat vai',
            'for error soluation',
            '2024-02-14',
            '2024-02-14',
            'completed',
            'high',
            'Mirpur-2, Dhaka-1216',
            'httpa://googlemap.com',
        );
        set_data(
            3,
            3,
            3,
            3,
            3,
            3,
            'meet with shifat vai',
            'for error soluation',
            '2024-02-14',
            '2024-02-14',
            'completed',
            'high',
            'Mirpur-2, Dhaka-1216',
            'httpa://googlemap.com',
        );

        await queryInterface.bulkDelete(
            'personal_calendar_schedules',
            null,
            {},
        );
        await queryInterface.bulkInsert(
            'personal_calendar_schedules',
            data,
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete(
            'personal_calendar_schedules',
            null,
            {},
        );
    },
};
