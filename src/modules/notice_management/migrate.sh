#!/bin/bash

# bash src/modules/notice_management/migrate.sh

echo ""
echo "notice_categorys seed start"
API_URL="http://127.0.0.1:5003/api/v1/notice-categorys?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/notice_management/notice_categorys/models/seeders
echo "notice_categorys seed end"
echo ""

echo ""
echo "notices seed start"
API_URL="http://127.0.0.1:5003/api/v1/notices?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/notice_management/notices/models/seeders
echo "notices seed end"
echo ""

# echo ""
# echo "notice_seen_by_users seed start"
# API_URL="http://127.0.0.1:5003/api/v1/notice-seen-by-users?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/notice_management/notice_seen_by_users/models/seeders
# echo "notice_seen_by_users seed end"
# echo ""