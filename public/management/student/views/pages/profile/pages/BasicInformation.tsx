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
                '/api/v1/user-students/basic-information/11',
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
                        <div className="">
                            <h4>Basic information</h4>
                            <div className="basic_info mb-4">
                                <table className="table text-nowrap student_table">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.email}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Phone number</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.phone_number}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="table text-nowrap student_table ml-2">
                                    <tbody>
                                        <tr>
                                            <td>Whatsapp number</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.whatsapp_number}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.gender}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Stutas</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.status}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;
