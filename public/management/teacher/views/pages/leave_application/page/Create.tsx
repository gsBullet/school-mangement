import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Create: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let formData = new FormData(e.target);

        try {
            // Make POST request with form data
            const response = await axios.post(
                '/api/v1/leave-applications/student-store',
                formData,
            );
            // setResponseMessage('Form submitted successfully!');
            setData('Form submitted successfully!'); // Clear any previous error
            console.log('response', response);
        } catch (error) {
            // setError(error); // Set error state
            // setResponseMessage('Failed to submit form.');
            console.log('data', error.msg);
        }
        // console.log('data', error);
    };
    // let date = moment().format('YYYY-DD-MM');
    let date = moment().format('YYYY-MM-DD');
    console.log('date', date);

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form onSubmit={handleSubmit} className="form_600 mx-auto pt-3">
                    <div className="form-group form-horizontal">
                        <label>Start date</label>
                        <div className="form_elements">
                            <input
                                type="date"
                                defaultValue={date}
                                name="start_date"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>End date</label>
                        <div className="form_elements">
                            <input
                                type="date"
                                defaultValue={date}
                                name="end_date"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Attchment</label>
                        <div className="form_elements">
                            <input
                                type="file"
                                accept="image/*"
                                name="attachments"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label></label>
                        <div className="form_elements">
                            <button className="btn btn-sm btn-outline-info">
                                submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
