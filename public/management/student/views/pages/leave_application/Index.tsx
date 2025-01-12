import React from 'react';
import { Link, Outlet } from 'react-router-dom';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            title: 'Application for sick leave',
        },
        {
            id: 2,
            title: 'Application for casual leave',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading"></h3>
            <div className="content_body">
                <Link
                    to="/leave-application/create"
                    className="btn btn-sm btn-outline-info mb-2 mr-2"
                    type="submit"
                >
                    Create
                </Link>
                <Link
                    to="/leave-application/approved"
                    className="btn btn-sm btn-outline-info mb-2 mr-2"
                    type="submit"
                >
                    Approved
                </Link>
                <Link
                    to="/leave-application/rejected"
                    className="btn btn-sm btn-outline-info mb-2 mr-2"
                    type="submit"
                >
                    Rejected
                </Link>
                <Link
                    to="/leave-application/pending"
                    className="btn btn-sm btn-outline-info mb-2 mr-2"
                    type="submit"
                >
                    Pending
                </Link>
                <div className="info-table table-responsive">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Index;
