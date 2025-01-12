import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Materials from '../pages/Materials';
import CreateMaterials from '../pages/CreateMaterials';
import Details from '../pages/Details';
import MaterialDetails from '../pages/MaterialEdit';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'course-materials',
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
            path: 'details/:id',
            element: <Materials />,
        },
        {
            path: 'edit/:id',
            element: <MaterialDetails />,
        },
        {
            path: 'create-materials',
            element: <CreateMaterials />,
        },
    ],
};
