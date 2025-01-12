import React, { Children } from 'react';
import Layout from './Layout';
import Index from '../Index';
import Create from '../page/Create';
import Approved from '../page/Approved';
import Pending from '../page/Pending';
import Rejected from '../page/Rejected';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'leave-application',
    element: <Layout />,
    children: [
        {
            path: '',
            element: <Index />,
            children: [
                {
                    index: true,
                    path: 'approved',
                    element: <Approved />,
                },
                {
                    path: 'pending',
                    element: <Pending />,
                },
                {
                    path: 'rejected',
                    element: <Rejected />,
                },
            ],
        },
        {
            path: 'create',
            element: <Create />,
        },
    ],
};
