import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}
const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<anyObject[]>([]);

    useEffect(() => {
        // Function to fetch data
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                '/api/v1/branch-class-resources/academic-resource/1',
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
        return moment(date).format('MM-D-YYYY');
    }
    return (
        <div className="admin_dashboard">
            <h3 className="table_heading"></h3>
            <div className="content_body">
                {/* <Link
                    to="/academic-resources/create"
                    className="btn btn-sm btn-outline-info mb-2 mr-2"
                    type="submit"
                >
                    Create
                </Link> */}
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Title</th>
                                    <th>Subject</th>
                                    <th>Teacher</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {data?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.title}</td>
                                            <td>{i.subject?.name}</td>
                                            <td>
                                                {
                                                    i.subject_teacher
                                                        ?.branch_teacher
                                                        ?.teacher?.name
                                                }
                                            </td>
                                            <td>{dateFormate(i.updatedAt)}</td>
                                            <td>
                                                <a
                                                    target="blank"
                                                    href={i.attachment}
                                                    download={i.attachment
                                                        .split('/')
                                                        .pop()}
                                                >
                                                    download
                                                </a>
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

export default Index;
