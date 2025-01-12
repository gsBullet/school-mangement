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
            amount: '50000',
            date: '10 Feb, 2024',
            purpose: 'Tution fee',
            credit: '50000',
            debit: '',
        },
        {
            id: 2,
            amount: '48000',
            purpose: 'Donation',
            credit: '',
            debit: '2000',
        },
        {
            id: 3,
            amount: '28000',
            purpose: 'Sallary',
            credit: '',
            debit: '20000',
        },
        {
            id: 4,
            amount: '26000',
            purpose: 'Utility bill',
            credit: '',
            debit: '2000',
        },
        {
            id: 4,
            amount: 'Bal : 26000 tk',
            purpose: 'Total:',
            credit: 'Cr : 50000 tk',
            debit: 'Dt : 24000 tk',
        },
        {
            id: 5,
            amount: '23000',
            date: '12 Feb, 2024',
            purpose: 'Maintenance costs',
            credit: '',
            debit: '3000',
        },
        {
            id: 6,
            amount: '18000',
            purpose: 'Equipment',
            credit: '',
            debit: '5000',
        },
        {
            id: 7,
            amount: '13000',
            purpose: 'Loans',
            credit: '',
            debit: '5000',
        },
        {
            id: 8,
            amount: '63000',
            purpose: 'Hostel bill',
            credit: '50000',
            debit: '',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
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
                                    <th>Date</th>
                                    <th>Purpose</th>
                                    <th>Credit</th>
                                    <th>Debit</th>
                                    <th>Balance</th>
                                    <th>Journal Ref</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.date}</td>
                                            <td>{i.purpose}</td>
                                            <td>{i.credit}</td>
                                            <td>{i.debit}</td>
                                            <td>{i.amount}</td>
                                            <td>
                                                {i.purpose == 'Total:' ? (
                                                    ''
                                                ) : (
                                                    <Link
                                                        to="/journal/details"
                                                        className="btn btn-sm  btn-outline-info"
                                                        type="submit"
                                                    >
                                                        Ref.
                                                    </Link>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>Cr : 100000 tk</td>
                                    <td>Dt : 37000 tk</td>
                                    <td>Bal : 63000 tk</td>
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
