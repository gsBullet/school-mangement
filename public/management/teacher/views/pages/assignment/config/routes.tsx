import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Details from '../Details';
import CreateAssignment from '../pages/CreateAssignment';
import EditAssignment from '../pages/EditAssignment';
import SingleDetails from '../pages/SingleDetails';
import SubjectDetails from '../pages/SubjectDetails';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'assignment',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'class-details/:id',
            element: <Details />,
        },
        {
            path: 'single-subject/:id',
            element: <SubjectDetails />,
        },
        {
            path: 'subject-details/:id',
            element: <SingleDetails />,
        },
        {
            path: 'create',
            element: <CreateAssignment />,
        },
        {
            path: 'subject-edit/:id',
            element: <EditAssignment />,
        },
    ],
};
