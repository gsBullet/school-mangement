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
        function set_data(branch_id, title, description) {
            data.push({
                branch_id,
                title,
                description,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            'Academic Integrity Policy',
            `Description: Ensure that students understand the importance of honesty in academics, prohibiting cheating, plagiarism, or any form of academic dishonesty. Clear consequences should be outlined, and teachers should provide guidance on acceptable practices.
Objective: To uphold standards of honesty and responsibility in academics, fostering an environment of trust and respect for knowledge.`,
        );
        set_data(
            2,
            'Parental Involvement Policy',
            `Description: Encourage active communication and involvement from parents through regular meetings, progress reports, and feedback channels. Schools should also involve parents in activities like PTA meetings and student-led events.
Objective: To create a supportive partnership between home and school, promoting student success through shared responsibility.`,
        );
        set_data(
            3,
            'Health and Hygiene Policy',
            `Description: Implement standards for student health and hygiene, including regular handwashing, clean drinking water availability, and sanitation facilities. Additionally, conduct periodic health check-ups and awareness programs on hygiene.
Objective: To support student health and prevent illness, creating a healthier school environment.`,
        );
        set_data(
            4,
            'Anti-Bullying and Harassment Policy',
            `Description: Establish a zero-tolerance policy for bullying, harassment, and discrimination based on gender, religion, social status, or other personal characteristics. Schools should create safe reporting channels and have trained staff to address incidents promptly.
Objective: To provide a safe, supportive environment for all students, fostering respect and inclusivity.`,
        );
        set_data(
            5,
            'Attendance and Punctuality Policy',
            `Description: Require students to attend a minimum percentage of school days each academic year, with punctual arrival times. Regular attendance and timely arrivals are expected, with allowances for valid reasons like health or family emergencies.
Objective: To promote consistent participation, which is essential for academic success and development of discipline.`,
        );

        await queryInterface.bulkDelete('policies', null, {});
        await queryInterface.bulkInsert('policies', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('policies', null, {});
    },
};
