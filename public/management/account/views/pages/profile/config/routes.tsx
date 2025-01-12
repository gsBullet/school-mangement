import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import BasicInformation from '../pages/BasicInformation';
import MajorInformation from '../pages/MajorInformation';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'profile',
    element: <Layout />,
    children: [
        {
            path: '',
            element: <Index />,
            children: [
                {
                    index: true,
                    path: 'basic-information',
                    element: <BasicInformation />,
                },
                {
                    path: 'major-information',
                    element: <MajorInformation />,
                },
            ],
        },
    ],
};
