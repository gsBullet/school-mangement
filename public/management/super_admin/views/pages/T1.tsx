import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const T1: React.FC<Props> = (props: Props) => {
    return (
        <div className="admin_dashboard">
            <h1>Nurul Hiqamah Model Madrasa</h1>
            <h2>Admin Dashboard</h2>
            <div className="admin_sideba custom_scroll">
                <h3 className="mt-4 ms-0">User management</h3>
                <ul className="dashboard_links ">
                    <li>
                        <Link to="/user-admins">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Admin Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-staffs">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Staff Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-teachers">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Teachers Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-parents">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Parents Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-students">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Students Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-students">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Todo Management
                        </Link>
                    </li>
                </ul>

                <h3 className="mt-4 ms-0">Todo management</h3>
                <ul className="dashboard_links ">
                    <li>
                        <Link to="/tasks">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Tasks Management
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/user-staffs">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Task User Management
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/task-variants">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Task Variants Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/task-groups">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Task Groups Management
                        </Link>
                    </li>
                </ul>

                <h3 className="mt-4 ms-0">Branch management</h3>
                <ul className="dashboard_links ">
                    <li>
                        <Link to="/branches">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            branches Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-branch-admins">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            user branch admins Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-buildings">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            branch Buildings Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-building-rooms">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Branch Building Rooms Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-transports">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Branch Transports Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-transport-drivers">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Branch Transport Drivers Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/academic-calendars">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Academic Calendars Management
                        </Link>
                    </li>
                </ul>

                <h3 className="mt-4 ms-0">Academic management</h3>
                <ul className="dashboard_links ">
                    <li>
                        <Link to="/branch-classes">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Classes
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-class-subjects">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Class Subjects
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-class-routine-day-times">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Class Routines
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-class-routine-day-times/class-routine">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Class Routine At A Glanc
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-class-resources">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Class Resources
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-students/attendance-report">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Attendances report
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-students/kpi">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Kpi report
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-students/attendance">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Student attendances
                        </Link>
                    </li>
                </ul>

                <h3 className="mt-4 ms-0">Fees management</h3>
                <ul className="dashboard_links ">
                    <li>
                        <Link to="/branch-class-fee-types">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Class Fee types
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-class-fees">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Class Fees
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-class-fee-discounts">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Class Fee Discounts
                        </Link>
                    </li>
                    <li>
                        <Link to="/branch-class-fee-waivers">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Class Fee Waivers
                        </Link>
                    </li>
                </ul>

                <h3 className="mt-4 ms-0">Meeting management</h3>
                <ul className="dashboard_links ">
                    <li>
                        <Link to="/meeting">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Meetings Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/meeting-agendas">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Meeting Agendas Management
                        </Link>
                    </li>
                </ul>

                <h3 className="mt-4 ms-0">Account management</h3>
                <ul className="dashboard_links ">
                    <li>
                        <Link to="/fees-collections">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Fees Collections
                        </Link>
                    </li>
                    <li>
                        <Link to="/journals">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Journal Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/loan-managements">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            loan Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/payrolls">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Payroll Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/salary-payments">
                            <span className="material-symbols-outlined fill">
                                groups
                            </span>
                            Salary Payment Management
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default T1;
