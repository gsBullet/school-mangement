import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment/moment';
export interface Accountinfo {
    account: { title: string };
    type: 'income' | 'expense';
    amount: number;
}
export interface Categoryinfo {
    account: { title: string };
    type: 'income' | 'expense';
    amount: number;
}
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState('');
    const [accounts, setAccounts] = useState<Accountinfo[]>([]);
    const [categories, setCategories] = useState<Categoryinfo[]>([]);
    const [file, setFile] = useState<any>();
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let formData = new FormData(e.target);

        try {
            const response = await axios.post(
                '/api/v1/account-logs/expense-store',
                formData,
            );
            setData('Form submitted successfully!');
            (window as any).toaster('submitted');
            e.target.reset();
        } catch (error) {
            // setError(error);
        }
    };
    const fetchAccounts = async () => {
        try {
            const response = await axios.get('/api/v1/accounts/accounts');
            setAccounts(response.data.data);
        } catch (error) {
            setError(error);
        }
    };
    const fetchAccountCategorys = async () => {
        try {
            const response = await axios.get('/api/v1/account-categories/all');
            setCategories(response.data.data);
        } catch (error) {
            setError(error);
        }
    };
    function getFile(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        fetchAccounts();
        fetchAccountCategorys();
    }, []);
    let date = moment().format('YYYY-MM-DD');

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form onSubmit={handleSubmit} className="form_600 mx-auto pt-3">
                    <div className="form-group form-horizontal">
                        <label>Category</label>
                        <div className="form_elements">
                            <select name="category" id="">
                                {categories?.length &&
                                    categories?.map(
                                        (i: { [key: string]: any }) => {
                                            return (
                                                <option value={i.id}>
                                                    {i.title}
                                                </option>
                                            );
                                        },
                                    )}
                            </select>
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Account</label>
                        <div className="form_elements">
                            <select name="account" id="">
                                {accounts?.length &&
                                    accounts?.map(
                                        (i: { [key: string]: any }) => {
                                            return (
                                                <option value={i.id}>
                                                    {i.title}
                                                </option>
                                            );
                                        },
                                    )}
                            </select>
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Customer Name</label>
                        <div className="form_elements">
                            <input
                                type="text"
                                placeholder="Customer name"
                                name="customer_name"
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Amount</label>
                        <div className="form_elements">
                            <input
                                name={'amount'}
                                onChange={(e) => {
                                    let el = document.querySelector(
                                        'input[name="amount_in_text"]',
                                    );
                                    if (el) {
                                        (el as HTMLInputElement).value =
                                            (window as any).convertAmount(
                                                e.target.value,
                                            ).bn + ' টাকা মাত্র';
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Amount in text</label>
                        <div className="form_elements">
                            <input
                                type="text"
                                name="amount_in_text"
                                // value={
                                //     (window as any).convertAmount(totalAmount)
                                //         .bn
                                // }
                            />
                            {/* {(window as any).convertAmount(totalAmount).bn}{' '}
                            মাত্র */}
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label>Receipt No</label>
                        <div className="form_elements">
                            <input
                                type="text"
                                placeholder="enter receipt page no"
                                name="receipt_no"
                            />
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
                        <label>Attachment</label>
                        <div className="form_elements">
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                name="attachment"
                                onChange={getFile}
                            />
                        </div>
                    </div>
                    <div className="form-group form-horizontal">
                        <label></label>
                        <div className="form_elements">
                            <a target="blank" href={file}>
                                <img
                                    src={file}
                                    className="img-80"
                                    alt="Preview image"
                                />
                            </a>
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
