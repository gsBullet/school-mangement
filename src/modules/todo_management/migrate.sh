#!/bin/bash

# bash src/modules/todo_management/migrate.sh

echo ""
echo "tasks seed start"
API_URL="http://127.0.0.1:5003/api/v1/tasks?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/todo_management/tasks/models/seeders
echo "tasks seed end"
echo ""

# echo ""
# echo "task_groups seed start"
# API_URL="http://127.0.0.1:5003/api/v1/task-groups?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/todo_management/task_groups/models/seeders
# echo "task_groups seed end"
# echo ""

# echo ""
# echo "task_variants seed start"
# API_URL="http://127.0.0.1:5003/api/v1/task-variants?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/todo_management/task_variants/models/seeders
# echo "task_variants seed end"
# echo ""

# echo ""
# echo "task_users seed start"
# API_URL="http://127.0.0.1:5003/api/v1/task-users?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/todo_management/task_users/models/seeders
# echo "task_users seed end"
# echo ""


  

