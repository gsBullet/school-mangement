import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Create from '../pages/Create';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'products',
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
    ],
};
