#!/bin/bash

# bash src/modules/exam_management/migrate.sh

# echo ""
# echo "exams seed start"
# API_URL="http://127.0.0.1:5003/api/v1/exams?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exams/models/seeders
# echo "exams seed end"
# echo ""

# echo ""
# echo "exam equipments seed start"
# API_URL="http://127.0.0.1:5003/api/v1/exam-equipments?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_equipments/models/seeders
# echo "exam equipments seed end"
# echo ""

# echo ""
# echo "exam preparation reports seed start"
# API_URL="http://127.0.0.1:5003/api/v1/exam-preparation-reports?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_preparation_reports/models/seeders
# echo "exam preparation reports seed end"
# echo ""

# echo ""
# echo "exam student marks seed start"
# API_URL="http://127.0.0.1:5003/api/v1/exam-student-marks?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_student_marks/models/seeders
# echo "exam student marks seed end"
# echo ""

# echo ""
# echo "exam routines seed start"
# API_URL="http://127.0.0.1:5003/api/v1/exam-routines?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_routines/models/seeders
# echo "exam routines seed end"
# echo ""

# echo ""
# echo "exam hall guard plans seed start"
# API_URL="http://127.0.0.1:5003/api/v1/exam-hall-guard-plans?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_hall_guard_plans/models/seeders
# echo "exam hall guard plans seed end"
# echo ""

# echo ""
# echo "exam students seed start"
# API_URL="http://127.0.0.1:5003/api/v1/exam-students?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_students/models/seeders
# echo "exam students seed end"
# echo ""

# echo ""
# echo "exam seat plans seed start"
# API_URL="http://127.0.0.1:5003/api/v1/exam-seat-plans?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_seat_plans/models/seeders
# echo "exam seat plans seed end"
# echo ""

# echo ""
# echo "exam attendent students seed start"
# API_URL="http://127.0.0.1:5003/api/v1/exam-attendent-students?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_attendent_students/models/seeders
# echo "exam attendent students seed end"
# echo ""

# echo ""
# echo "exam equipment selecteds seed start"
# API_URL="http://127.0.0.1:5003/api/v1/exam-equipment-selecteds?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_equipment_selecteds/models/seeders
# echo "exam equipment selecteds seed end"
# echo ""

echo ""
echo "exam equipment sent to branches seed start"
API_URL="http://127.0.0.1:5003/api/v1/exam-equipment-sent-to-branches?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_management/exam_equipment_sent_to_branches/models/seeders
echo "exam equipment sent to branches seed end"
echo ""







