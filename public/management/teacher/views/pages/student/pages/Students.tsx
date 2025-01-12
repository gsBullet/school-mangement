import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Students: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Function to fetch data
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `/api/v1/user-students/class-wise-student/${id}`,
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
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Name</th>
                                    <th>Roll</th>
                                    <th>Action</th>
                                    <th>Report</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {data?.map(
                                    (i: { [key: string]: any }, index) => {
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{index + 1}</td>
                                                <td>{i.student?.name}</td>
                                                <td>{i.role_no}</td>
                                                <td>
                                                    <Link
                                                        className="btn btn-sm btn-outline-info mr-1"
                                                        to={`/student/review/${i.user_student_id}`}
                                                    >
                                                        Review
                                                    </Link>
                                                    <Link
                                                        className="btn btn-sm btn-outline-info mr-1"
                                                        to={`/student/complain/${i.user_student_id}`}
                                                    >
                                                        Complain
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link
                                                        className="btn btn-sm btn-outline-info mr-1"
                                                        to={`/student/single-student/${i.user_student_id}`}
                                                    >
                                                        Details
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Students;
