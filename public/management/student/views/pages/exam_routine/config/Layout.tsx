import React from 'react';
import { Outlet } from 'react-router-dom';
export interface Props {}

const Layout: React.FC<Props> = (props: Props) => {
    return (
        <div className="management_root no_border">
            <div className="management_heading page-header pb-0">
                <h3 className="layout_heading">Exam Routine</h3>
            </div>
            <div className="management_content_root">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;
