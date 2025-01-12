import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Account: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        try {
            const response = await axios.post(
                '/api/v1/accounts/store',
                formData,
            );
            setData('Form submitted successfully!');
            (window as any).toaster('submitted');
            e.target.reset();
        } catch (error) {
            // setError(error);
        }
    };
    let date = moment().format('YYYY-MM-DD');
    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form onSubmit={handleSubmit} className="form_600 mx-auto pt-3">
                    <div className="form-group form-horizontal">
                        <label>Account Name</label>
                        <div className="form_elements">
                            <input
                                type="text"
                                placeholder="Enter Account Name"
                                name="account_name"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Account Number</label>
                        <div className="form_elements">
                            <input
                                type="text"
                                placeholder="Enter Account Number"
                                name="account_number"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Opening Balance</label>
                        <div className="form_elements">
                            <input
                                type="number"
                                placeholder="Your opening balance"
                                name="opening_balance"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Description</label>
                        <div className="form_elements">
                            <textarea
                                name="description"
                                placeholder="Description"
                                id=""
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Date</label>
                        <div className="form_elements">
                            <input
                                type="date"
                                defaultValue={date}
                                name="date"
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

export default Account;
