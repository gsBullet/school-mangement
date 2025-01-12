import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            last_date: '10 Feb, 2024',
            amount: '3000',
            amount_in_text: 'Three thousand taka only',
            purpose: 'hostel bill',
        },
        {
            id: 2,
            last_date: '14 March, 2024',
            amount: '10000',
            amount_in_text: 'Ten thousand taka only',
            purpose: 'admission bill',
        },
        {
            id: 3,
            last_date: '15 Feb, 2024',
            amount: '5000',
            amount_in_text: 'Five thousand taka only',
            purpose: 'transport bill',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <Link
                    to="/expense-entry"
                    className="btn btn-sm btn-outline-info mb-2"
                    type="submit"
                >
                    Create
                </Link>
                <form action="">
                    <div className="teacher_result">
                        <div>
                            <div>Month</div>
                            <div>
                                <input type="date" name="month1" id="" />
                            </div>
                        </div>
                        <div>
                            <div>Month</div>
                            <div>
                                <input type="date" name="month2" id="" />
                            </div>
                        </div>
                        <button
                            className="btn btn-sm btn-outline-info "
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Purpose</th>
                                    <th>Date</th>
                                    <th>Amount in Text</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.purpose}</td>
                                            <td>{i.last_date}</td>
                                            <td>{i.amount_in_text}</td>
                                            <td>{i.amount} tk</td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>18000 tk</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
