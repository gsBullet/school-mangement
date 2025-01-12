#!/bin/bash

# bash src/modules/attendance_management/migrate.sh

# echo ""
# echo "student attendances seed start"
# API_URL="http://127.0.0.1:5003/api/v1/student-attendances?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/attendance_management/student_attendances/models/seeders
# echo "student attendances seed end"
# echo ""

# echo ""
# echo "teacher attendances seed start"
# API_URL="http://127.0.0.1:5003/api/v1/teacher-attendances?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/attendance_management/teacher_attendances/models/seeders
# echo "teacher attendances seed end"
# echo ""

# echo ""
# echo "staff attendances seed start"
# API_URL="http://127.0.0.1:5003/api/v1/staff-attendances?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/attendance_management/staff_attendances/models/seeders
# echo "staff attendances seed end"
# echo ""

# echo ""
# echo "leave types seed start"
# API_URL="http://127.0.0.1:5003/api/v1/leave-types?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/attendance_management/leave_types/models/seeders
# echo "leave types seed end"
# echo ""

# echo ""
# echo "leave applications seed start"
# API_URL="http://127.0.0.1:5003/api/v1/leave-applications?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/attendance_management/leave_applications/models/seeders
# echo "leave applications seed end"
# echo ""

echo ""
echo "leave application-paids seed start"
API_URL="http://127.0.0.1:5003/api/v1/leave-application-paids?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/attendance_management/leave_application_paids/models/seeders
echo "leave application-paids seed end"
echo ""






