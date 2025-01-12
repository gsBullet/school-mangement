import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Details from '../Details';
import Review from '../pages/Review';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'reports',
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
        {
            path: 'review',
            element: <Review />,
        },
    ],
};
