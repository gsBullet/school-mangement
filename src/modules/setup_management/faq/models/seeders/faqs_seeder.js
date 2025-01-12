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

        function set_data(branch_id, question, answer) {
            data.push({
                branch_id,
                question,
                answer,
                status: 'active',
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            'Question: What is the primary objective of studying in a Madrasa?',
            'Answer: The primary objective of studying in a Madrasa is to gain knowledge of Islamic teachings, the Quran, Hadith, Fiqh (Islamic jurisprudence), and moral education to lead a life aligned with Islamic principles.',
        );
        set_data(
            2,
            'Question: What is the Quran, and why is it central to Madrasa education?',
            'Answer: The Quran is the holy book of Islam, believed to be the word of Allah revealed to Prophet Muhammad (PBUH). It is central to Madrasa education because it provides guidance for Muslims in all aspects of life, making it essential for students to understand and memorize its teachings.',
        );
        set_data(
            3,
            'Question: Name two main branches of Islamic studies commonly taught in Bangladeshi Madrasas.',
            `Answer: Two main branches of Islamic studies in Bangladeshi Madrasas are:
Hadith Studies: The study of sayings, actions, and approvals of Prophet Muhammad (PBUH).
Fiqh (Islamic Jurisprudence): The study of Islamic laws derived from the Quran and Hadith to understand proper conduct and obligations.`,
        );
        set_data(
            4,
            'Question: What is the difference between Alia and Qawmi Madrasas in Bangladesh?',
            'Answer: Alia Madrasas are government-recognized and offer a curriculum that includes both religious and general subjects. Qawmi Madrasas, on the other hand, operate independently and focus more on traditional Islamic studies, without government intervention or standardized secular subjects.',
        );
        set_data(
            5,
            'Question: Why is memorization (Hifz) of the Quran considered important in Madrasa education?',
            'Answer: Memorization (Hifz) of the Quran is valued because it preserves the holy text in its original form, and memorizing it is seen as a spiritual and intellectual accomplishment. It also allows Muslims to recite the Quran accurately in prayers and daily life.',
        );

        await queryInterface.bulkDelete('faqs', null, {});
        await queryInterface.bulkInsert('faqs', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('faqs', null, {});
    },
};
