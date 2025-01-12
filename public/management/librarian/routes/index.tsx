import { NonIndexRouteObject } from 'react-router-dom';
import DashboardLayout from '../views/layouts/DashboardLayout';
import T1 from '../views/pages/T1';
import user_branch_staff_routes from '../views/pages/users/config/routes';
import React from 'react';
import book_issues_routes from '../views/pages/book_issues/config/routes';
import book_management_routes from '../views/pages/book_management/config/routes';
import products_routes from '../views/pages/products/config/routes';
import order_routes from '../views/pages/order/config/routes';

interface RouteTypes extends NonIndexRouteObject {}
const router: RouteTypes[] = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            book_management_routes,
            book_issues_routes,
            products_routes,
            order_routes,
            {
                path: '',
                element: <T1 />,
            },
            user_branch_staff_routes,
        ],
    },
];

export default router;
