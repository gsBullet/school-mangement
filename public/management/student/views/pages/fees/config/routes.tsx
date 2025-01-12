import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Dues from '../Dues';
import Pay from '../Pay';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'fees',
    element: <Layout />,
    children: [
        {
            path: '',
            index: true,
            element: <Index />,
        },
        {
            path: 'dues',
            element: <Dues />,
        },
        {
            path: 'pay',
            element: <Pay />,
        },
    ],
};
