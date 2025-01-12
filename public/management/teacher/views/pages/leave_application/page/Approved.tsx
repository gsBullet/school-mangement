import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Approved: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<any>();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                '/api/v1/leave-applications/teacher-approved/1',
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
    function dateFormate(date: string) {
        return moment(date).format('YYYY-DD-MM');
    }
    return (
        <div className="admin_dashboard">
            <h3 className="table_heading"></h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    {/* <th>Title</th> */}
                                    <th>Start date</th>
                                    <th>End date</th>
                                    <th>Status</th>
                                    <th>Application</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {data?.map((i, index) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{index + 1}</td>
                                            <td>{dateFormate(i.start_date)}</td>
                                            <td>{dateFormate(i.end_date)}</td>
                                            <td>{i.leave_status}</td>
                                            <td>
                                                <a href={i.attachments}>show</a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approved;
