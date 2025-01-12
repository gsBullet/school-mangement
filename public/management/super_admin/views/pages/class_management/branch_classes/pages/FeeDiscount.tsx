import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const FeeDiscount: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            title: 'Class topper',
            description: 'He got 890 marks out fo 1000',
            amount: '2000',
            discount_type: 'fixed',
        },
        {
            id: 2,
            title: 'Highest CGPA',
            description: 'He got 3.99 out of 4.00',
            amount: '1500',
            discount_type: 'percentage',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading mt-4">Fee Discount</h3>
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
                                    <th>Discount Type</th>
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
                                            <td>{i.discount_type}</td>
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

export default FeeDiscount;
