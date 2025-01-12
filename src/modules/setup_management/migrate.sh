#!/bin/bash

# bash src/modules/setup_management/migrate.sh

# echo ""
# echo "contact_support seed start"
# API_URL="http://127.0.0.1:5003/api/v1/contact_supports?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/setup_management/contact_support/models/seeders
# echo "contact_support seed end"
# echo ""

# echo ""
# echo "faq seed start"
# API_URL="http://127.0.0.1:5003/api/v1/faqs?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/setup_management/faq/models/seeders
# echo "faq seed end"
# echo ""

echo ""
echo "policies seed start"
API_URL="http://127.0.0.1:5003/api/v1/policiess?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/setup_management/policies/models/seeders
echo "policies seed end"
echo ""


  

