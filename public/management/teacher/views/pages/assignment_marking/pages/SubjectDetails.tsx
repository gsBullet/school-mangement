import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const SubjectDetails: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `/api/v1/assignment-submissions/sub-wise-assignment/${id}`,
            );
            setData(response.data.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleMarkBlur = async (e: any, i: any) => {
        const mark = e.target.name == 'mark' ? e.target.value : null;
        const id = i.student_id;
        console.log('Student id:', id);
        console.log('Student mark:', mark);
        try {
            const payload = {
                mark,
                id,
            };
            const response = await axios.post(
                '/api/v1/assignment-submissions/assignment-marking',
                payload,
            );
            fetchData();
            e.target.value = '';
            console.log('response', 'response');
        } catch (error) {
            // setError(error); // Set error state
        }
    };

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
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Mark</th>
                                    <th>Given Mark</th>
                                    <th>Action</th>
                                    <th>Marking</th>
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
                                                <td>{i.assignment?.title}</td>
                                                <td>{i.assignment?.mark}</td>
                                                <td>{i.marks}</td>
                                                <td>
                                                    <a
                                                        href={i.attachment}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Reed File
                                                    </a>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        name="mark"
                                                        // max={60}
                                                        id=""
                                                        onBlur={(e) =>
                                                            handleMarkBlur(e, i)
                                                        }
                                                    />
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

export default SubjectDetails;
