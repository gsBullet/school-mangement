import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const FeeWaiver: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            title: 'Class Topper',
            description: 'He got 890 marks out fo 1000',
            amount: '2000',
        },
        {
            id: 2,
            title: 'Highest CGPA',
            description: 'He got 3.99 out of 4.00',
            amount: '1500',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading mt-4">Fee Waivers</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.title}</td>
                                            <td>{i.description}</td>
                                            <td>{i.amount}</td>
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

export default FeeWaiver;
