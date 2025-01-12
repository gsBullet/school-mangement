import React from 'react';
import setup from './setup.ts';
import Layout from '../Layout.tsx';
import All from '../All.jsx';
import Create from '../Create.jsx';
import Details from '../Details.jsx';
import Edit from '../Edit.jsx';
import Class from '../../../class_management/branch_classes/All.tsx';
import BranchInformation from '../pages/BranchInformation.tsx';
import AccountInformation from '../pages/AccountInformation.tsx';
import Teacher from '../../../user_management/user_teachers/All.tsx';
import Student from '../../../user_management/user_students/All.tsx';
import Staff from '../../../user_management/user_staffs/All.tsx';
import Guardian from '../../../user_management/user_parents/All.tsx';
import Transport from '../../../branch_management/branch_transports/All.tsx';
import ClassRoutine from '../pages/ClassRoutine.tsx';
import Hostel from '../../../branch_management/branch_buildings/All.tsx';

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
                    path: 'branch-informatin',
                    element: <BranchInformation />,
                },
                {
                    path: 'account-information',
                    element: <AccountInformation />,
                },
                {
                    path: 'class',
                    element: <Class />,
                },
                {
                    path: 'teacher',
                    element: <Teacher />,
                },
                {
                    path: 'student',
                    element: <Student />,
                },
                {
                    path: 'staff',
                    element: <Staff />,
                },
                {
                    path: 'guardian',
                    element: <Guardian />,
                },
                {
                    path: 'transport',
                    element: <Transport />,
                },
                {
                    path: 'class-routine',
                    element: <ClassRoutine />,
                },
                {
                    path: 'hostel',
                    element: <Hostel />,
                },
            ],
        },
    ],
};
