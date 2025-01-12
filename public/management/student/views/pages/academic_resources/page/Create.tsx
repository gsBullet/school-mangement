import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let formData = new FormData(e.target);

        try {
            // Make POST request with form data
            const response = await axios.post(
                '/api/v1/branch-class-resources/store',
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
    let date = moment().format('YYYY-DD-MM');
    console.log('date', date);

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form onSubmit={handleSubmit} className="form_600 mx-auto pt-3">
                    <div className="form-group form-horizontal">
                        <label>Branch</label>
                        <div className="form_elements">
                            <input
                                type="number"
                                defaultValue={1}
                                name="branch_id"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>branch_class</label>
                        <div className="form_elements">
                            <input
                                type="number"
                                defaultValue={1}
                                name="branch_class_id"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>branch_class_subject</label>
                        <div className="form_elements">
                            <input
                                type="number"
                                defaultValue={1}
                                name="branch_class_subject_id"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Title</label>
                        <div className="form_elements">
                            <input type="text" name="title" />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Description</label>
                        <div className="form_elements">
                            <input type="text" name="description" />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Attchments</label>
                        <div className="form_elements">
                            <input
                                type="file"
                                accept="*/*"
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

export default Index;
