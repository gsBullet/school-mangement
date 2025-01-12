import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Details: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<any>([]);
    const { id } = useParams();

    useEffect(() => {
        // Function to fetch data
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `/api/v1/user-students/full-details/${id}`,
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

    console.log('newdata', data);

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
                            <h4>Admission information</h4>
                            <div className="basic_info mb-4 ">
                                <table className="table text-nowrap student_table">
                                    <tbody>
                                        <tr>
                                            <td>Branch</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                Uttora
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Admission no</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.addmission_no
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Roll no</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.role_no}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Addmission date</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {moment(
                                                    data?.student_info
                                                        ?.admission_date,
                                                ).format('YYYY-MM-DD')}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="table text-nowrap student_table ml-2">
                                    <tbody>
                                        <tr>
                                            <td>Class</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.s_class}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shift</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.shift}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Student Category</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.student_category
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Section</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.section}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h4>Information</h4>
                            <div className="basic_info mb-4 ">
                                <table className="table text-nowrap student_table">
                                    <tbody>
                                        <tr>
                                            <td>Present Address</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.present_address
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Permanent Address</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.permanent_address
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Religion</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.religion}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.city}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Telegram Id</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.telegram_id
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Blood Group</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.blood_group
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Student Expire Date</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {moment(
                                                    data?.student_info
                                                        ?.student_expire_date,
                                                ).format('YYYY-MM-DD')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Height</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.height}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.weight}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>As on Date</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {moment(
                                                    data?.student_info
                                                        ?.as_on_date,
                                                ).format('YYYY-MM-DD')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Familly Information</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.family_information
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shibling Information</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.shibling_information
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Living House type</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.living_house_type
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="table text-nowrap student_table ml-2">
                                    <tbody>
                                        <tr>
                                            <td>Nationality</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.nationality
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Division</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.division}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ID No</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.student_id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.present_address
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Post code</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.post_code}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.country}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Medical Condition</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.medical_condition
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Current Medication</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.current_medications
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Telegram Name</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.telegram_name
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Student House type</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    data?.student_info
                                                        ?.student_house
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Birth Cirtificate</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {/* {
                                                    data?.student_info
                                                        ?.birth_certificate
                                                } */}
                                                <a
                                                    href={
                                                        data?.student_info
                                                            ?.birth_certificate
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Show cirtificate
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>National ID</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {/* {
                                                    data?.student_info
                                                        ?.birth_certificate
                                                } */}
                                                <a
                                                    href={
                                                        data?.student_info
                                                            ?.national_id
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Show NID
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Cast</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {data?.student_info?.cast}
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
