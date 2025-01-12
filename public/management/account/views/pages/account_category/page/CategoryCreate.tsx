import React, { useState } from 'react';
import axios from 'axios';
export interface Props {}

const CategoryCreate: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        try {
            const response = await axios.post(
                '/api/v1/account-categories/store',
                formData,
            );
            setData('Form submitted successfully!');
            (window as any).toaster('created');
            e.target.reset();
        } catch (error) {
            // setError(error);
        }
    };

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form onSubmit={handleSubmit} className="form_600 mx-auto pt-3">
                    <div className="form-group form-horizontal">
                        <label>Category Title</label>
                        <div className="form_elements">
                            <input
                                type="text"
                                placeholder="Enter New Category"
                                name="title"
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

export default CategoryCreate;
