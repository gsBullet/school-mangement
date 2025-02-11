import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const UpdatePhoto: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let formData = new FormData(e.target);
        console.log('ne form data', formData);

        try {
            const response = await axios.post(
                '/api/v1/user-teachers/profile-update',
                formData,
            );
            // setResponseMessage('Form submitted successfully!');
            // console.log('response', response);
        } catch (error) {
            // setError(error); // Set error state
        }
    };
    let date = moment().format('YYYY-MM-DD');

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form onSubmit={handleSubmit} className="form_600 mx-auto pt-3">
                    <div className="form-group form-horizontal">
                        <label>New Photo</label>
                        <div className="form_elements">
                            <input type="file" accept="image/*" name="image" />
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

export default UpdatePhoto;
