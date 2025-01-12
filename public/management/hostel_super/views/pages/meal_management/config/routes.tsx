import React from 'react';
import Layout from './Layout';
import Index from '../Index';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'meal-management',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
    ],
};
