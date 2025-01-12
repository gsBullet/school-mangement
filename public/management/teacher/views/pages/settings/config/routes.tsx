import React, { Children } from 'react';
import Layout from './Layout';
import Index from '../Index';
import UpdatePhoto from '../page/UpdatePhoto';
import UpdatePass from '../page/UpdatePass';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'settings',
    element: <Layout />,
    children: [
        {
            path: '',
            element: <Index />,
            // children: [
            //     {
            //         index: true,
            //         path: 'approved',
            //         element: <Approved />,
            //     },
            //     {
            //         path: 'pending',
            //         element: <Pending />,
            //     },
            //     {
            //         path: 'rejected',
            //         element: <Rejected />,
            //     },
            // ],
        },
        {
            path: 'update-photo',
            element: <UpdatePhoto />,
        },
        {
            path: 'update-password',
            element: <UpdatePass />,
        },
    ],
};
