#!/bin/bash

# bash src/modules/asset_management/migrate.sh

# echo ""
# echo "asset categories seed start"
# API_URL="http://127.0.0.1:5003/api/v1/asset-categories?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/asset_management/asset_categories/models/seeders
# echo "asset categories seed end"
# echo ""

# echo ""
# echo "asset types seed start"
# API_URL="http://127.0.0.1:5003/api/v1/asset-types?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/asset_management/asset_types/models/seeders
# echo "asset types seed end"
# echo ""

# echo ""
# echo "assets seed start"
# API_URL="http://127.0.0.1:5003/api/v1/assets?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/asset_management/assets/models/seeders
# echo "assets seed end"
# echo ""

# echo ""
# echo "asset audits seed start"
# API_URL="http://127.0.0.1:5003/api/v1/asset-audits?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/asset_management/asset_audits/models/seeders
# echo "asset audits seed end"
# echo ""

# echo ""
# echo "asset audit items seed start"
# API_URL="http://127.0.0.1:5003/api/v1/asset-audit-items?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/asset_management/asset_audit_items/models/seeders
# echo "asset audit items seed end"
# echo ""

echo ""
echo "asset depreciations seed start"
API_URL="http://127.0.0.1:5003/api/v1/asset-depreciations?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/asset_management/asset_depreciations/models/seeders
echo "asset depreciations seed end"
echo ""







