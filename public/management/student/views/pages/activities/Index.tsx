import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    return (
        <div className="admin_dashboard">
            <h1>Class routine</h1>
        </div>
    );
};

export default Index;
