import { NonIndexRouteObject } from 'react-router-dom';
import DashboardLayout from '../views/layouts/DashboardLayout';
import T1 from '../views/pages/T1';
import user_branch_staff_routes from '../views/pages/users/config/routes';
import React from 'react';
import profile_routes from '../views/pages/profile/config/routes';
import childrens_routes from '../views/pages/childrens/config/routes';
import payment_history_routes from '../views/pages/payment_history/config/routes';
import fees_routes from '../views/pages/fees/config/routes';
import fees_payment_routes from '../views/pages/fees_payment/config/routes';
import notices_routes from '../views/pages/notices/config/routes';
import policies_routes from '../views/pages/policies/config/routes';
import faq_routes from '../views/pages/faq/config/routes';
import contact_support_routes from '../views/pages/contact_support/config/routes';

interface RouteTypes extends NonIndexRouteObject {}
const router: RouteTypes[] = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            profile_routes,
            childrens_routes,
            payment_history_routes,
            fees_routes,
            fees_payment_routes,
            notices_routes,
            policies_routes,
            faq_routes,
            contact_support_routes,
            {
                path: '',
                element: <T1 />,
            },
            user_branch_staff_routes,
        ],
    },
];

export default router;
