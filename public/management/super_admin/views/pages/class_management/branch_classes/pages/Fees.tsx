import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Fees: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            name: 'First term',
            class: 'Six',
            description: 'First term exam fee',
            amount: '10000',
        },
        {
            id: 2,
            name: 'Mid term',
            class: 'Seven',
            description: 'Mid term exma fee',
            amount: '7000',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading mt-4">Fees</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>Class</th>
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
                                            <td>{i.name}</td>
                                            <td>{i.class}</td>
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

export default Fees;
