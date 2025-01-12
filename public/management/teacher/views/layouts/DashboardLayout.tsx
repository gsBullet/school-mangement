import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from './shared/TopHeader';
import SideBar from './shared/menu/SideBar';
import axios from 'axios';

export interface Props {}

const DashboardLayout: React.FC<Props> = (props: Props) => {
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                '/api/v1/user-teachers/basic-information/1',
            );
            setData(response.data.data);
            // setData(response.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);
    return (
        <div className="page-wrapper">
            {/*Page Header Start*/}
            <TopHeader></TopHeader>
            {/*Page Header Ends*/}

            {/*Page Body Start*/}
            <div className="page-body-wrapper">
                {/*Page Sidebar Start*/}
                <div className="page-sidebar custom-scrollbar">
                    <div className="sidebar-user text-center">
                        <div>
                            <img
                                className="img-50 rounded-circle"
                                src={data?.image}
                                alt="Teacher"
                            />
                        </div>
                        <h6 className="mt-3 f-12">{data.name}</h6>
                    </div>
                    <SideBar />
                </div>
                {/*Page Sidebar Ends*/}
                <div
                    className="page-body custom_scroll"
                    style={{
                        height: 'calc(100vh - 80px)',
                        overflow: 'hidden',
                        overflowY: 'scroll',
                    }}
                >
                    <div className="row">
                        <div className="col-sm-12">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            {/*Page Body Ends*/}
        </div>
    );
};
export default DashboardLayout;
