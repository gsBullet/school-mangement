import React from 'react';
import Layout from './Layout';
import Index from '../Index';
import Result from '../Result';
import TakeAttendace from '../pages/TakeAttendance';
import Details from '../pages/Details';

// export { default as DashboardCounterAll} from "./All.jsx";

export default {
    path: 'class-attendance',
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
            path: 'take-attendance/:id',
            element: <TakeAttendace />,
        },
    ],
};
