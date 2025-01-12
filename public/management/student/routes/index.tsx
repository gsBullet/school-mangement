import { NonIndexRouteObject } from 'react-router-dom';
import DashboardLayout from '../views/layouts/DashboardLayout';
import T1 from '../views/pages/T1';
// import user_branch_staff_routes from '../views/pages/users/config/routes';
import React from 'react';
import academic_resources from '../views/pages/academic_resources/config/routes';
import activities from '../views/pages/activities/config/routes';
import attendance from '../views/pages/attendance/config/routes';
import class_routine from '../views/pages/class_routine/config/routes';
import exam_routine from '../views/pages/exam_routine/config/routes';
import fees from '../views/pages/fees/config/routes';
import leave_application from '../views/pages/leave_application/config/routes';
import mark_sheet from '../views/pages/mark_sheet/config/routes';
import notices from '../views/pages/notices/config/routes';
import profile from '../views/pages/profile/config/routes';

interface RouteTypes extends NonIndexRouteObject {}
const router: RouteTypes[] = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '',
                element: <T1 />,
            },
            // user_branch_staff_routes,
            academic_resources,
            activities,
            attendance,
            class_routine,
            exam_routine,
            fees,
            leave_application,
            mark_sheet,
            notices,
            profile,
        ],
    },
];

export default router;
