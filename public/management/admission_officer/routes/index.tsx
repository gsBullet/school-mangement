import { NonIndexRouteObject } from 'react-router-dom';
import DashboardLayout from '../views/layouts/DashboardLayout';
import T1 from '../views/pages/T1';
import user_branch_staff_routes from '../views/pages/users/config/routes';
import React from 'react';
import add_new_routes from '../views/pages/add_new/config/routes';
import students_routes from '../views/pages/students/config/routes';
import students_payments from '../views/pages/payment/config/routes';

interface RouteTypes extends NonIndexRouteObject {}
const router: RouteTypes[] = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            add_new_routes,
            students_routes,
            students_payments,
            {
                path: '',
                element: <T1 />,
            },
            user_branch_staff_routes,
        ],
    },
];

export default router;
