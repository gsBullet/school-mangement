import React from 'react';
import setup from './setup.ts';
import Layout from '../Layout.tsx';
import All from '../All.jsx';
import Create from '../Create.jsx';
import Details from '../Details.jsx';
import Edit from '../Edit.jsx';
import Fees from '../../branch_classes/pages/Fees.tsx';
import FeeTypes from '../../branch_classes/pages/FeeTypes.tsx';
import FeeDiscount from '../../branch_classes/pages/FeeDiscount.tsx';
import FeeWaiver from '../../branch_classes/pages/FeeWaiver.tsx';

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
                    element: <Fees />,
                },
                {
                    path: 'fees',
                    element: <Fees />,
                },
                {
                    path: 'fee-types',
                    element: <FeeTypes />,
                },
                {
                    path: 'fee-discounts',
                    element: <FeeDiscount />,
                },
                {
                    path: 'fee-waivers',
                    element: <FeeWaiver />,
                },
            ],
        },
    ],
};
