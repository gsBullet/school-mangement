#!/bin/bash

# bash src/modules/personal_calendar_schedule_management/migrate.sh

echo ""
echo "personal_calendar_schedule seed start"
API_URL="http://127.0.0.1:5003/api/v1/personal-calendar-schedules?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/personal_calendar_schedule_management/personal_calendar_schedule/models/seeders
echo "personal_calendar_schedule seed end"
echo ""


  

