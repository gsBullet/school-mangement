import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const BasicInformation: React.FC<Props> = (props: Props) => {
    return (
        <div className="admin_dashboard">
            <h2>Basic information</h2>
            <div className="admin_sideba custom_scroll"></div>
        </div>
    );
};

export default BasicInformation;
