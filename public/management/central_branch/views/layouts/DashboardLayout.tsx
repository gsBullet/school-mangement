import React, { useState } from 'react';
import CommonAppWindow from '../components/CommonAppWindow';
import AppNav from './shared/AppNav';
import { Outlet } from 'react-router-dom';

export interface Props {}

const DashboardLayout: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <div className="app_body">
                <div className="app_window">
                    {/* <CommonAppWindow></CommonAppWindow> */}
                    <Outlet></Outlet>
                </div>
                <div>
                    <div className="home_time_and_date">
                        <div className="home_time_and_date_body">
                            <div className="date">
                                <div className="day">Monday</div>
                                <div className="month">
                                    <div className="month_name">April</div>
                                    <div className="">22</div>
                                </div>
                            </div>
                            <div className="time">
                                <div className="amt hour">01</div>
                                <div className="divider">:</div>
                                <div className="amt min">18</div>
                                <div className="divider">:</div>
                                <div className="amt sec">56</div>
                                <div className="med">am</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppNav />
        </div>
    );
};
export default DashboardLayout;
