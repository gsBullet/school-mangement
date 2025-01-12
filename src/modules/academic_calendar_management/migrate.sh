#!/bin/bash

# bash src/modules/academic_calendar_management/migrate.sh


# echo ""
# echo "academic calendar event types seed start"
# API_URL="http://127.0.0.1:5003/api/v1/academic-calendar-event-types?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/academic_calendar_management/academic_calendar_event_types/models/seeders
# echo "academic calendar event types seed end"
# echo ""

echo ""
echo "academic calendars seed start"
API_URL="http://127.0.0.1:5003/api/v1/academic-calendars?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/academic_calendar_management/academic_calendars/models/seeders
echo "academic calendars seed end"
echo ""







