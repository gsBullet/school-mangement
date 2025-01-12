import React from 'react';
import setup from './setup.ts';
import Layout from '../Layout.tsx';
import All from '../All.jsx';
import Create from '../Create.jsx';
import Details from '../Details.jsx';
import Edit from '../Edit.jsx';
import BasicInformation from '../pages/BasicInformation.tsx';
import AcademicInformation from '../pages/AcademicInformation.tsx';
import ClassRoutine from '../pages/ClassRoutine.tsx';
import Payments from '../pages/Payments.tsx';
import Loan from '../pages/Loan.tsx';
import Attendance from '../pages/Attendance.tsx';
import Kpi from '../Kpi.tsx';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: setup.route_prefix,
    element: <Layout />,
    children: [
        {
            path: '',
            element: <All />,
        },
        {
            path: 'create',
            element: <Create />,
        },
        {
            path: 'edit/:id',
            element: <Edit />,
        },
        {
            path: 'details/:id',
            element: <Details />,
            children: [
                {
                    path: 'basic-information',
                    element: <BasicInformation />,
                },
                {
                    path: 'academic-information',
                    element: <AcademicInformation />,
                },
                {
                    path: 'class-routine',
                    element: <ClassRoutine />,
                },
                {
                    path: 'payment',
                    element: <Payments />,
                },
                {
                    path: 'loan',
                    element: <Loan />,
                },
                {
                    path: 'kpi',
                    element: <Kpi />,
                },
                {
                    path: 'attendance',
                    element: <Attendance />,
                },
            ],
        },
    ],
};
