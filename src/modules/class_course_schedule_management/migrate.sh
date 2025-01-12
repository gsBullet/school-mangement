#!/bin/bash

# bash src/modules/class_course_schedules_management/migrate.sh

# echo ""
# echo "class course schedules seed start"
# API_URL="http://127.0.0.1:5003/api/v1/class-course-schedules?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_course_schedule_management/class_course_schedules/models/seeders
# echo "class course schedules seed end"
# echo ""

# echo ""
# echo "class course schedule attachments seed start"
# API_URL="http://127.0.0.1:5003/api/v1/class-course-schedule-attachments?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_course_schedule_management/class_course_schedule_attachements/models/seeders
# echo "class course schedule attachments seed end"
# echo ""

echo ""
echo "class course schedule images seed start"
API_URL="http://127.0.0.1:5003/api/v1/class-course-schedule-images?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_course_schedule_management/class_course_schedule_images/models/seeders
echo "class course schedule images seed end"
echo ""







