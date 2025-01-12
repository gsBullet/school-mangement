#!/bin/bash

# bash src/modules/assignment_management/migrate.sh

# echo ""
# echo "assignment_categorys seed start"
# API_URL="http://127.0.0.1:5003/api/v1/assignment-categories?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/assignment_management/assignment_categorys/models/seeders
# echo "assignment_categorys seed end"
# echo ""

echo ""
echo "assignments seed start"
API_URL="http://127.0.0.1:5003/api/v1/assignments?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/assignment_management/assignments/models/seeders
echo "assignments seed end"
echo ""

echo ""
echo "assignment-submissions seed start"
API_URL="http://127.0.0.1:5003/api/v1/assignment-submissions?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/assignment_management/assignment_submission/models/seeders
echo "assignment-submissions seed end"
echo ""