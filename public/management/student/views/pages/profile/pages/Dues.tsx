import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Dues: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            perpous: 'Monthly fee',
            amount: '5000',
            last_date: '02 May 2024',
        },
        {
            id: 2,
            perpous: 'Semister fee',
            amount: '4500',
            last_date: '10 April 2024',
        },
        {
            id: 3,
            perpous: 'Transport fee',
            amount: '4500',
            last_date: '12 March 2024',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Dues</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Perpous</th>
                                    <th>Amount</th>
                                    <th>Last Date</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.perpous}</td>
                                            <td>{i.amount}</td>
                                            <td>{i.last_date}</td>
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

export default Dues;
