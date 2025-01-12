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
            purpose: 'Hostel bill',
        },
        {
            id: 2,
            last_date: '14 March, 2024',
            amount: '2000',
            purpose: 'Transport bill',
        },
        {
            id: 3,
            last_date: '15 Feb, 2024',
            amount: '4000',
            purpose: 'Couching bill',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Perpouse</th>
                                    <th>Last date</th>
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
                                            <td>{i.amount} tk</td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>9000 tk</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="payment_btn">
                            <Link
                                className="btn btn-sm btn-outline-info "
                                to="/fees-payment"
                            >
                                Proceed to Payment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
