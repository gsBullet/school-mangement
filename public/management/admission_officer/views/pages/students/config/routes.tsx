import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Details from '../page/Details';
import Student from '../page/studentDetails';
import Edit from '../page/Edit';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'students',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'details/:id',
            element: <Details />,
        },
        {
            path: 'edit/:id',
            element: <Edit />,
        },
        {
            path: 'single/student/:id',
            element: <Student />,
        },
    ],
};
