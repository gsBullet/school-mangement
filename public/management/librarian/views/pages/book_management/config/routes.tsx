import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Details from '../pages/Book';
import CreateIssue from '../pages/Create';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'book-management',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'books',
            element: <Details />,
        },
        {
            path: 'create-issue',
            element: <CreateIssue />,
        },
    ],
};
