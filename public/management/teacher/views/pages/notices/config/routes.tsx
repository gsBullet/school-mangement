import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import NoticeDetails from '../pages/NoticeDetails';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'notices',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'details/:id',
            element: <NoticeDetails />,
        },
    ],
};
