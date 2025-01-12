#!/bin/bash

echo ""
echo "admin-users seed start"
API_URL="http://127.0.0.1:5003/api/v1/admin-users?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_admin/models/seeders
echo "admin-users seed end"
echo ""

echo ""
echo "user-students seed start"
API_URL="http://127.0.0.1:5003/api/v1/user-students?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/user_management/user_students/models/seeders
echo "user-students seed end"
echo ""

# echo ""
# echo "error-trace seed start"
# API_URL="http://127.0.0.1:5003/api/v1/error-trace?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# # npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/app_management/error_trace/models/seeders
# echo "error-trace seed end"
# echo ""

