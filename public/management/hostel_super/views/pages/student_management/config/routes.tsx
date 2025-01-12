import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Details from '../page/Details';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'student',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'details',
            element: <Details />,
        },
    ],
};
