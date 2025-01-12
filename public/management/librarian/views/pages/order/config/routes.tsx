import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Create from '../pages/Create';
import Edit from '../pages/Edit';
import Details from '../pages/Details';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'order',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'create',
            element: <Create />,
        },
        {
            path: 'edit',
            element: <Edit />,
        },
        {
            path: 'details',
            element: <Details />,
        },
    ],
};
