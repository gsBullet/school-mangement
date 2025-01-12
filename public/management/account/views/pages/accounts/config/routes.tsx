import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Details from '../page/Details';
import Account from '../page/AccountCreate';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'accounts',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'create',
            element: <Account />,
        },
        {
            path: 'details/:id',
            element: <Details />,
        },
    ],
};
