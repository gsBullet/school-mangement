import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Complain: React.FC<Props> = (props: Props) => {
    return (
        <div className="admin_dashboard">
            {/* <h3>Create New Complain</h3> */}
            <div className="content_body">
                <form className="form_600 mx-auto pt-3">
                    <div className="form-group form-horizontal">
                        <label>Student</label>
                        <div className="form_elements">
                            <select name="student" id="">
                                <option value="">Shahin</option>
                                <option value="">Tamim</option>
                                <option value="">Ramim</option>
                                <option value="">Areeba</option>
                                <option value="">Nayeem</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Book Name</label>
                        <div className="form_elements">
                            <select name="book_name" id="">
                                <option value="">Bangla</option>
                                <option value="">English</option>
                                <option value="">Mathemetics</option>
                                <option value="">History</option>
                                <option value="">Novel</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Book ID</label>
                        <div className="form_elements">
                            <input
                                type="text"
                                placeholder="Enter Book Id"
                                name="book_id"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Issue Date</label>
                        <div className="form_elements">
                            <input type="date" name="issue_date" />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Return Date</label>
                        <div className="form_elements">
                            <input type="date" name="return_date" />
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

export default Complain;
