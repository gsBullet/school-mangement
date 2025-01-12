import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Create from '../page/Create';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'academic-resources',
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
