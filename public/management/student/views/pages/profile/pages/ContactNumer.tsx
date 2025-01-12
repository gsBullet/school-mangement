import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Details: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        // Function to fetch data
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                '/api/v1/user-students/contact-number/11',
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
            {/* <h3 className="table_heading">Basic information</h3> */}
            <div className="content_body ">
                <div className="student_details">
                    <div>
                        {/* <Link
                            to="/add-new"
                            className="btn btn-sm btn-outline-info mb-2"
                            type="submit"
                        >
                            Add New
                        </Link> */}
                    </div>
                    <div>
                        {/* <img
                            src={data?.image}
                            style={{ width: '100px' }}
                            alt=""
                        /> */}
                    </div>
                </div>
                {data && (
                    <div className="single_student_details">
                        <div>
                            <h4>Contact Numbers</h4>
                            {data.student_numbers?.length &&
                                data?.student_numbers.map(
                                    (i: { [key: string]: any }) => {
                                        return (
                                            <div className="basic_info mb-4 ">
                                                <table className="table text-nowrap student_table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Contact Number
                                                            </td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {
                                                                    i.contact_number
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className="table text-nowrap student_table ml-2">
                                                    <tbody>
                                                        <tr>
                                                            <td>Owner</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {i.owner}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    },
                                )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;
