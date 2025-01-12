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
            date: '12 Jan, 2024',
            purpose: 'Salary',
            amount: '20000',
            total: '20000',
        },
        {
            id: 2,
            date: '12 Feb, 2024',
            purpose: 'Salary',
            amount: '20000',
            total: '40000',
        },
        {
            id: 3,
            date: '12 March, 2024',
            purpose: 'Salary',
            amount: '20000',
            total: '60000',
        },
        {
            id: 4,
            date: '12 April, 2024',
            purpose: 'Salary',
            amount: '20000',
            total: '80000',
        },
        {
            id: 5,
            date: '12 May, 2024',
            purpose: 'Salary',
            amount: '20000',
            total: '100000',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading"></h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Date</th>
                                    <th>Perpouse</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.date}</td>
                                            <td>{i.purpose}</td>
                                            <td>{i.amount}</td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td colSpan={4}>Total:</td>
                                    <td className="staff_salary_report">
                                        10000 tk
                                    </td>
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
