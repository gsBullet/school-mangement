import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Fees from '../Fees';

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
            path: 'children/:id',
            element: <Fees />,
        },
    ],
};
