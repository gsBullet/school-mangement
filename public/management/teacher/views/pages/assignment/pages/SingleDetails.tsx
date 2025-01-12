import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const SingleDetails: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<any>([]);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/v1/assignments/${id}`);
            setData(response.data.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);
    function lastDate(date: string) {
        return moment(date).format('YYYY-MM-DD');
    }

    return (
        <div className="admin_dashboard">
            <div className="result_details"></div>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Title</th>
                                    <th></th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                <tr>
                                    <td></td>
                                    <td>1</td>
                                    <td>Name</td>
                                    <td>:</td>
                                    <td>{data.title}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>2</td>
                                    <td>Desctiption</td>
                                    <td>:</td>
                                    <td>{data.description}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>3</td>
                                    <td>Mark</td>
                                    <td>:</td>
                                    <td>{data.mark}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>4</td>
                                    <td>Deadline</td>
                                    <td>:</td>
                                    <td>{lastDate(data.deadline)}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>5</td>
                                    <td>Attachment</td>
                                    <td>:</td>
                                    <td>
                                        <a
                                            href={data.attachment}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Show File
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;
