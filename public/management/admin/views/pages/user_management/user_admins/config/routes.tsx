import React from 'react';
import setup from './setup.ts';
import Layout from '../Layout.tsx';
import All from '../All.jsx';
import Create from '../Create.jsx';
import Details from '../Details.jsx';
import Edit from '../Edit.jsx';
import BasicInformation from '../pages/BasicInformation.tsx';
import AcademicInformation from '../pages/AcademicInformation.tsx';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: setup.route_prefix,
    element: <Layout />,
    children: [
        {
            path: '',
            element: <All />,
        },
        {
            path: 'create',
            element: <Create />,
        },
        {
            path: 'edit/:id',
            element: <Edit />,
        },
        {
            path: 'details/:id',
            element: <Details />,
            children: [
                {
                    path: '',
                    element: <BasicInformation />,
                },
                {
                    path: 'basic-information',
                    element: <BasicInformation />,
                },
                {
                    path: 'academic-information',
                    element: <AcademicInformation />,
                },
            ],
        },
    ],
};
