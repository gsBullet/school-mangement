import { NonIndexRouteObject } from 'react-router-dom';
import DashboardLayout from '../views/layouts/DashboardLayout';
import T1 from '../views/pages/T1';
import user_branch_staff_routes from '../views/pages/users/config/routes';
import React from 'react';
import student_management_routes from '../views/pages/student_management/config/routes';
import staff_management_routes from '../views/pages/staff_management/config/routes';
import meal_management_routes from '../views/pages/meal_management/config/routes';
import salah_management_routes from '../views/pages/salah_management/config/routes';
import daily_activities_management_routes from '../views/pages/daily_activities_management/config/routes';
import faculty_management_routes from '../views/pages/facility_management/config/routes';
import finance_routes from '../views/pages/finance/config/routes';
import communication_routes from '../views/pages/communication/config/routes';
import reports_routes from '../views/pages/reports/config/routes';
import health_and_safety_routes from '../views/pages/health_&_safety/config/routes';
import complain_routes from '../views/pages/complain/config/routes';

interface RouteTypes extends NonIndexRouteObject {}
const router: RouteTypes[] = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            student_management_routes,
            meal_management_routes,
            salah_management_routes,
            daily_activities_management_routes,
            staff_management_routes,
            faculty_management_routes,
            finance_routes,
            health_and_safety_routes,
            communication_routes,
            reports_routes,
            complain_routes,
            {
                path: '',
                element: <T1 />,
            },
            user_branch_staff_routes,
        ],
    },
];

export default router;
