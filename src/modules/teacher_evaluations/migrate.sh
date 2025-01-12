#!/bin/bash

# bash src/modules/teacher_evaluations/migrate.sh

# echo ""
# echo teacher evaluations seed start"
# API_URL="http://127.0.0.1:5003/api/v1/teacher-evaluations?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/teacher_evaluations/teacher_evaluations/models/seeders
# echo teacher evaluations seed end"
# echo ""

# echo ""
# echo teacher overall evaluations seed start"
# API_URL="http://127.0.0.1:5003/api/v1/teacher-overall-evaluations?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/teacher_evaluations/teacher_overall_evaluations/models/seeders
# echo teacher overall evaluations seed end"
# echo ""

# echo ""
# echo teacher evaluation criterias seed start"
# API_URL="http://127.0.0.1:5003/api/v1/teacher-evaluation-criterias?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/teacher_evaluations/teacher_evaluation_criterias/models/seeders
# echo teacher evaluation criterias seed end"


# echo ""
# echo teacher evaluations seed start"
# API_URL="http://127.0.0.1:5003/api/v1/teacher-evaluations?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/teacher_evaluations/teacher_evaluations/models/seeders
# echo teacher evaluations seed end"

echo ""
echo teacher kpi reports seed start"
API_URL="http://127.0.0.1:5003/api/v1/teacher-kpi-reports?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/teacher_evaluations/teacher_kpi_reports/models/seeders
echo teacher kpi reports seed end"
