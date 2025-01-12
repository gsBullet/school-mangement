import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Details from '../pages/Students';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'book-issues',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'student',
            element: <Details />,
        },
    ],
};
