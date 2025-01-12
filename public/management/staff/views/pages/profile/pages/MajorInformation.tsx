import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const MajorInformation: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<any>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                '/api/v1/user-staffs/basic-information/1',
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
        <div className="admin_dashboard">
            <h3 className="table_heading">Major information</h3>
            <table className="table text-nowrap">
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td className="font-medium text-dark-medium">
                            {data.name}
                        </td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td className="font-medium text-dark-medium">
                            {data.email}
                        </td>
                    </tr>
                    <tr>
                        <td>Phone number:</td>
                        <td className="font-medium text-dark-medium">
                            {data.phone_number}
                        </td>
                    </tr>
                    <tr>
                        <td>Stutas:</td>
                        <td className="font-medium text-dark-medium">
                            {data.status}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MajorInformation;
