import { NonIndexRouteObject } from 'react-router-dom';
import DashboardLayout from '../views/layouts/DashboardLayout';
import T1 from '../views/pages/T1';
import user_branch_staff_routes from '../views/pages/users/config/routes';
import React from 'react';
import profile_routes from '../views/pages/profile/config/routes';
import income_entry_routes from '../views/pages/income_entry/config/routes';
import expense_entry_routes from '../views/pages/expense_entry/config/routes';
import accounts_routes from '../views/pages/accounts/config/routes';
import account_category_routes from '../views/pages/account_category/config/routes';
import credit_routes from '../views/pages/credit/config/routes';
import debit_routes from '../views/pages/debit/config/routes';
import income_statement_routes from '../views/pages/income_statement/config/routes';
import journal_routes from '../views/pages/journal/config/routes';
import ledger_routes from '../views/pages/ledger/config/routes';
import profit_loss_routes from '../views/pages/profit_loss/config/routes';
import due_list_routes from '../views/pages/due_list/config/routes';
import fees_collection_routes from '../views/pages/fees_collection/config/routes';
import month_wise_statement from '../views/pages/month_wise_statement/config/routes';
import Analytics from '../views/pages/Analytics';

interface RouteTypes extends NonIndexRouteObject {}
const router: RouteTypes[] = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            profile_routes,
            income_entry_routes,
            expense_entry_routes,
            accounts_routes,
            account_category_routes,
            credit_routes,
            debit_routes,
            income_statement_routes,
            journal_routes,
            ledger_routes,
            profit_loss_routes,
            due_list_routes,
            fees_collection_routes,
            month_wise_statement,

            {
                path: '',
                element: <T1 />,
            },
            {
                path: 'analytics',
                element: <Analytics />,
            },
            user_branch_staff_routes,
        ],
    },
];

export default router;
