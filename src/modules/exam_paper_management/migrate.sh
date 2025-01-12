#!/bin/bash

# bash src/modules/exam_paper_management/migrate.sh

echo ""
echo "exam_paper_designs seed start"
API_URL="http://127.0.0.1:5003/api/v1/exam-paper-designs?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_paper_management/exam_paper_designs/models/seeders
echo "exam_paper_designs seed end"
echo ""

echo ""
echo "exam_paper_design_orders seed start"
API_URL="http://127.0.0.1:5003/api/v1/exam-paper-design-orders?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/exam_paper_management/exam_paper_design_orders/models/seeders
echo "exam_paper_design_orders seed end"
echo ""


  

