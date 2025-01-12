#!/bin/bash

# bash src/modules/meeting_management/migrate.sh

echo ""
echo "meetings seed start"
API_URL="http://127.0.0.1:5003/api/v1/meetings?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/meeting_management/meetings/models/seeders
echo "meetings seed end"
echo ""

echo ""
echo "meeting_agendas seed start"
API_URL="http://127.0.0.1:5003/api/v1/meeting-agendas?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/meeting_management/meeting_agendas/models/seeders
echo "meeting_agendas seed end"
echo ""

echo ""
echo "meeting_attachments seed start"
API_URL="http://127.0.0.1:5003/api/v1/meeting-attachments?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/meeting_management/meeting_attachments/models/seeders
echo "meeting_attachments seed end"
echo ""
