import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Review: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Function to fetch data
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `/api/v1/student-evaluation-criterias/criterias`,
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

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let formData = new FormData(e.target);
        console.log('formData', formData);
        try {
            const response = await axios.post(
                '/api/v1/student-evaluations/store',
                formData,
            );
            // setData(response.data.data.data);
            // setTotalIncome(response.data.data.data2);
        } catch (error) {
            setError(error);
        }
    };
    return (
        <div className="admin_dashboard">
            {/* <h3>Create New Review</h3> */}
            <div className="content_body">
                <div className="data_list">
                    <form
                        onSubmit={handleSubmit}
                        className="form_600 mx-auto pt-3"
                    >
                        <div className="table_responsive custom_scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Key point</th>
                                        <th>Score</th>
                                        <th>Obtain mark</th>
                                    </tr>
                                </thead>
                                <tbody id="all_list">
                                    <input
                                        type="hidden"
                                        name="criteria_count"
                                        value={data.length}
                                    />
                                    <input
                                        type="hidden"
                                        name="student_id"
                                        value={id}
                                    />
                                    {data?.map(
                                        (i: { [key: string]: any }, index) => {
                                            return (
                                                <tr>
                                                    <td>{i.name}</td>
                                                    <td>{i.max_score}</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            max={i.max_score}
                                                            name={`score${index}`}
                                                            id=""
                                                            placeholder="given marks"
                                                        />
                                                        <input
                                                            type="hidden"
                                                            name={`criteria_id${index}`}
                                                            value={i.id}
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        },
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="attendance_form_btn">
                            <button
                                className="btn btn-sm btn-outline-info "
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;
