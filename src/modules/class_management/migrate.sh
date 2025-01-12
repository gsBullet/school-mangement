#!/bin/bash

# bash src/modules/class_management/migrate.sh

# echo ""
# echo "branch classes seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-classes?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_classes/models/seeders
# echo "branch classes seed end"
# echo ""

# echo ""
# echo "branch class fees seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-class-fees?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_class_fees/models/seeders
# echo "branch class fees seed end"
# echo ""

# echo ""
# echo "branch class fee types seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-class-fee-types?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_class_fee_types/models/seeders
# echo "branch class fee types seed end"
# echo ""

# echo ""
# echo "branch class fee discounts seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-class-fee-discounts?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_class_fee_discounts/models/seeders
# echo "branch class fee discounts seed end"
# echo ""

# echo ""
# echo "branch class fee waivers seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-class-fee-waivers?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_class_fee_waivers/models/seeders
# echo "branch class fee waivers seed end"
# echo ""

# echo ""
# echo "branch class resources seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-class-resources?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_class_resources/models/seeders
# echo "branch class resources seed end"
# echo ""

# echo ""
# echo "branch class subjects seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-class-subjects?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_class_subjects/models/seeders
# echo "branch class subjects seed end"
# echo ""

# echo ""
# echo "branch class shifts seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-class-shifts?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_class_shifts/models/seeders
# echo "branch class shifts seed end"
# echo ""

echo ""
echo "branch class routine day times seed start"
API_URL="http://127.0.0.1:5003/api/v1/branch-class-routine-day-times?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_class_routin_day_times/models/seeders
echo "branch class routine day times seed end"
echo ""

# echo ""
# echo "branch class sections seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-class-sections?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/class_management/branch_class_sections/models/seeders
# echo "branch class sections seed end"
# echo ""





