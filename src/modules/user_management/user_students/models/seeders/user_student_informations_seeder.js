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
            user_student_id,
            present_address,
            permanent_address,
            date_of_birth,
            gender,
            nationality,
            city,
            state,
            post_code,
            country,
            medical_condition,
            current_medications,
            telegram_name,
            telegram_id,
            student_id,
            blood_group,
            student_expire_date,
            admission_date,
            addmission_no,
            role_no,
            section,
            s_class,
            shift,
            division,
            family_information,
            shibling_information,
            birth_certificate,
            national_id,
            student_category,
            religion,
            cast,
            student_house,
            living_house_type,
            height,
            weight,
            as_on_date,
        ) {
            data.push({
                id,
                branch_id,
                user_student_id,
                present_address,
                permanent_address,
                date_of_birth,
                gender,
                nationality,
                city,
                state,
                post_code,
                country,
                medical_condition,
                current_medications,
                telegram_name,
                telegram_id,
                student_id,
                blood_group,
                student_expire_date,
                admission_date,
                addmission_no,
                role_no,
                section,
                s_class,
                shift,
                division,
                family_information,
                shibling_information,
                birth_certificate,
                national_id,
                student_category,
                religion,
                cast,
                student_house,
                living_house_type,
                height,
                weight,
                as_on_date,
                created_at: '2024-02-14',
                updated_at: '2024-02-14',
            });
        }
        set_data(
            1,
            1,
            1,
            'dhaka',
            'khulna',
            '2024-02-14',
            'male',
            'bangladeshi',
            'khulna',
            'khulna',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_one',
            '@student11234',
            '101241044',
            'A+',
            '2025-10-12',
            '2023-10-12',
            '550',
            'AA103',
            'A section',
            'Six',
            'Morning',
            'Khulna',
            'This is ok',
            'Two brother and one elder sister',
            'birth_certificate.pdf',
            'national_id.pdf',
            'science',
            'islam',
            'khan',
            'medium',
            'rent house',
            5.5,
            55.5,
            '2024-10-10',
        );
        set_data(
            2,
            2,
            2,
            'dhaka',
            'barishal',
            '2024-02-14',
            'Female',
            'bangladeshi',
            'potuakhali',
            'Barishal',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_two',
            '@student11234',
            '101241045',
            'B+',
            '2025-10-12',
            '2023-10-12',
            '551',
            'AA104',
            'B section',
            'Seven',
            'Morning',
            'Bogra',
            'This is ok',
            'One brother and one elder sister',
            'birth_certificate.pdf',
            'national_id.pdf',
            'science',
            'islam',
            'khan',
            'high',
            'own house',
            5.9,
            65.5,
            '2024-10-10',
        );
        set_data(
            3,
            3,
            3,
            'dhaka',
            'Rangpur',
            '2024-02-14',
            'male',
            'bangladeshi',
            'lalmonirhat',
            'Rangpur',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_three',
            '@student11234',
            '101241046',
            'O+',
            '2025-10-12',
            '2023-10-12',
            '552',
            'AA105',
            'A section',
            'Eight',
            'Evening',
            'Khulna',
            'This is ok',
            'Two brother and one elder sister',
            'birth_certificate.pdf',
            'national_id.pdf',
            'science',
            'islam',
            'chowdhuri',
            'medium',
            'rent house',
            5.5,
            55.5,
            '2024-10-10',
        );
        set_data(
            4,
            4,
            4,
            'dhaka',
            'Rangpur',
            '2024-02-14',
            'male',
            'bangladeshi',
            'lalmonirhat',
            'Rangpur',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_three',
            '@student11234',
            '101241046',
            'O+',
            '2025-10-12',
            '2023-10-12',
            '552',
            'AA106',
            'A section',
            'Seven',
            'Evening',
            'Khulna',
            'This is ok',
            'Two brother and one elder sister',
            'birth_certificate.pdf',
            'national_id.pdf',
            'science',
            'islam',
            'chowdhuri',
            'medium',
            'rent house',
            5.5,
            55.5,
            '2024-10-10',
        );
        set_data(
            5,
            5,
            5,
            'dhaka',
            'Rangpur',
            '2024-02-14',
            'male',
            'bangladeshi',
            'lalmonirhat',
            'Rangpur',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_three',
            '@student11234',
            '101241046',
            'O+',
            '2025-10-12',
            '2023-10-12',
            '552',
            'AA107',
            'A section',
            'Eight',
            'Evening',
            'Khulna',
            'This is ok',
            'Two brother and one elder sister',
            'birth_certificate.pdf',
            'national_id.pdf',
            'science',
            'islam',
            'chowdhuri',
            'medium',
            'rent house',
            5.5,
            55.5,
            '2024-10-10',
        );
        set_data(
            6,
            6,
            6,
            'dhaka',
            'Rangpur',
            '2024-02-14',
            'male',
            'bangladeshi',
            'lalmonirhat',
            'Rangpur',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_three',
            '@student11234',
            '101241046',
            'O+',
            '2025-10-12',
            '2023-10-12',
            '552',
            'AA108',
            'A section',
            'Nine',
            'Evening',
            'Khulna',
            'This is ok',
            'Two brother and one elder sister',
            'birth_certificate.pdf',
            'national_id.pdf',
            'science',
            'islam',
            'chowdhuri',
            'medium',
            'rent house',
            5.5,
            55.5,
            '2024-10-10',
        );
        set_data(
            7,
            7,
            7,
            'dhaka',
            'Rangpur',
            '2024-02-14',
            'male',
            'bangladeshi',
            'lalmonirhat',
            'Rangpur',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_three',
            '@student11234',
            '101241046',
            'O+',
            '2025-10-12',
            '2023-10-12',
            '552',
            'AA109',
            'A section',
            'Nine',
            'Evening',
            'Khulna',
            'This is ok',
            'Two brother and one elder sister',
            'birth_certificate.pdf',
            'national_id.pdf',
            'science',
            'islam',
            'chowdhuri',
            'medium',
            'rent house',
            5.5,
            55.5,
            '2024-10-10',
        );
        set_data(
            8,
            8,
            8,
            'dhaka',
            'Rangpur',
            '2024-02-14',
            'male',
            'bangladeshi',
            'lalmonirhat',
            'Rangpur',
            '1216',
            'bangladesh',
            'ok',
            'no',
            'student_three',
            '@student11234',
            '101241046',
            'O+',
            '2025-10-12',
            '2023-10-12',
            '552',
            'AA110',
            'A section',
            'Ten',
            'Evening',
            'Khulna',
            'This is ok',
            'Two brother and one elder sister',
            'birth_certificate.pdf',
            'national_id.pdf',
            'science',
            'islam',
            'chowdhuri',
            'medium',
            'rent house',
            5.5,
            55.5,
            '2024-10-10',
        );

        await queryInterface.bulkDelete('user_student_informations', null, {});
        await queryInterface.bulkInsert('user_student_informations', data, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         
         npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('user_student_informations', null, {});
    },
};
