import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Payments: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            perpous: 'Monthly fee',
            date: '12 April 2024',
            amount: '5000',
            trx_no: 'U001',
        },
        {
            id: 2,
            perpous: 'Semister fee',
            date: '12 March 2024',
            amount: '5000',
            trx_no: 'U002',
        },
        {
            id: 3,
            perpous: 'Hostel fee',
            date: '10 Feb, 2024',
            amount: '5000',
            trx_no: 'U003',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Payments</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Perpous</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>TRX Id</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.perpous}</td>
                                            <td>{i.date}</td>
                                            <td>{i.amount}</td>
                                            <td>{i.trx_no}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;
