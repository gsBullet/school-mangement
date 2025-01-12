import React from 'react';
import setup from './setup.ts';
import Layout from '../Layout.tsx';
import All from '../All.tsx';
import Create from '../Create.tsx';
import Details from '../Details.tsx';
import Edit from '../Edit.tsx';
import Kpi from '../Kpi.tsx';
import Attendance from '../Attendances.tsx';
import AttendanceReport from '../AttendanceReports.tsx';
import BasicInformation from '../pages/BasicInformation.tsx';
import AcademicInformation from '../pages/AcademicInformation.tsx';
import Document from '../pages/Document.tsx';
import Skills from '../pages/Skills.tsx';
import Parents from '../../../user_management/user_parents/All.tsx';
import Language from '../pages/Language.tsx';
import ContactNumber from '../pages/ContactNumer.tsx';
import EducationalBackground from '../pages/EducationalBackground.tsx';
import Dues from '../pages/Dues.tsx';
import Payments from '../pages/Payments.tsx';
import Results from '../pages/Results.tsx';
import Markshit from '../pages/Markshit.tsx';
import TakeAttendance from '../TakeAttendance.tsx';

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
            path: 'attendance',
            element: <Attendance />,
        },
        {
            path: 'attendance-report',
            element: <AttendanceReport />,
        },
        {
            path: 'kpi',
            element: <Kpi />,
        },
        {
            path: 'create',
            element: <Create />,
        },
        {
            path: 'take-attendance',
            element: <TakeAttendance />,
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
                {
                    path: 'document',
                    element: <Document />,
                },
                {
                    path: 'skill',
                    element: <Skills />,
                },
                {
                    path: 'parent',
                    element: <Parents />,
                },
                {
                    path: 'language',
                    element: <Language />,
                },
                {
                    path: 'contact-number',
                    element: <ContactNumber />,
                },
                {
                    path: 'educational-background',
                    element: <EducationalBackground />,
                },
                {
                    path: 'dues',
                    element: <Dues />,
                },
                {
                    path: 'payments',
                    element: <Payments />,
                },
                {
                    path: 'result-part',
                    element: <Results />,
                },
                {
                    path: 'details',
                    element: <Markshit />,
                },
            ],
        },
    ],
};
