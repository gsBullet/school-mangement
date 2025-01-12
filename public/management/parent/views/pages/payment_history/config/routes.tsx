import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Details from '../Details';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'payment-history',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'children/:id',
            element: <Details />,
        },
    ],
};
