#!/bin/bash

# bash src/modules/loan_management/migrate.sh

# echo ""
# echo "loan types seed start"
# API_URL="http://127.0.0.1:5003/api/v1/loan-types?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/loan_management/loan_types/models/seeders
# echo "loan types seed end"
# echo ""

# echo ""
# echo "loan applications seed start"
# API_URL="http://127.0.0.1:5003/api/v1/loan-applications?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/loan_management/loan_applications/models/seeders
# echo "loan applications seed end"
# echo ""

echo ""
echo "loan payments seed start"
API_URL="http://127.0.0.1:5003/api/v1/loan-payments?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/loan_management/loan_payments/models/seeders
echo "loan payments seed end"
echo ""







