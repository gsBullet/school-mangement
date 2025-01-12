import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Materials: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Function to fetch data
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `/api/v1/branch-class-resources/subject-wise/${id}`,
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
            <div>
                <Link
                    className="btn btn-sm btn-outline-info mb-1"
                    to="/course-materials/create-materials"
                >
                    Create New
                </Link>
            </div>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    {/* <th>Class</th> */}
                                    <th>Subject</th>
                                    <th>TItle</th>
                                    <th>Course Materials</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {data?.map(
                                    (i: { [key: string]: any }, index) => {
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{index + 1}</td>
                                                {/* <td>{i.class}</td> */}
                                                <td>{i.subject?.name}</td>
                                                <td>{i.title}</td>
                                                <td className="materials_td">
                                                    <a
                                                        className="btn materials_btn btn-sm btn-outline-info mr-1"
                                                        target="blank"
                                                        href={i.attachment}
                                                        // download={i.attachment
                                                        //     .split('/')
                                                        //     .pop()}
                                                    >
                                                        {/* <span className="download_title material-symbols-outlined">
                                                            download
                                                        </span> */}
                                                        <span className="">
                                                            Show
                                                        </span>
                                                    </a>
                                                    <Link
                                                        className="btn btn-sm btn-outline-info mr-1"
                                                        to={`/course-materials/edit/${i.id}`}
                                                    >
                                                        Edit
                                                    </Link>
                                                    {/* <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/course-materials/details"
                                                >
                                                    <div className="download_btn">
                                                        <span className="download_title material-symbols-outlined">
                                                            download
                                                        </span>
                                                        <span className="">
                                                            Download
                                                        </span>
                                                    </div>
                                                </Link> */}
                                                </td>
                                                {/* <td>
                                                </td> */}
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

export default Materials;
