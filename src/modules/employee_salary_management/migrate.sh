#!/bin/bash

# bash src/modules/employee_salary_management/migrate.sh


# echo ""
# echo "branch employee job pay grades seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-employee-job-pay-grades?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/employee_salary_management/branch_employee_job_pay_grades/models/seeders
# echo "branch employee job pay grades seed end"
# echo ""

# echo ""
# echo "branch employee job positions seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-employee-job-positions?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/employee_salary_management/branch_employee_job_positions/models/seeders
# echo "branch employee job positions seed end"
# echo ""

# echo ""
# echo "branch employee salaries seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-employee-salaries?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/employee_salary_management/branch_employee_salaries/models/seeders
# echo "branch employee salaries seed end"
# echo ""

# echo ""
# echo "branch employee salarie types seed start"
# API_URL="http://127.0.0.1:5003/api/v1/branch-employee-salary-types?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
# response=$(curl -s "$API_URL")
# npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/employee_salary_management/branch_employee_salary_types/models/seeders
# echo "branch employee salary types seed end"
# echo ""

echo ""
echo "branch employee payroll transactions seed start"
API_URL="http://127.0.0.1:5003/api/v1/branch-employee-payroll-transactions?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&page=0"
response=$(curl -s "$API_URL")
npx sequelize-cli db:seed:all --config src/configs/db.json --seeders-path src/modules/employee_salary_management/branch_employee_payroll_transactions/models/seeders
echo "branch employee payroll transactions seed end"
echo ""







