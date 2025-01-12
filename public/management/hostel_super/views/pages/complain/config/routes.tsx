import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Create from '../page/Create';
import Details from '../page/Details';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'complain',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'create',
            index: true,
            element: <Create />,
        },
        {
            path: 'details',
            index: true,
            element: <Details />,
        },
    ],
};
