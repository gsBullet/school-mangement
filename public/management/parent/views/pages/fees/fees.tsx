import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';

export interface AccountLog {
    account: { title: string };
    type: 'income' | 'expense';
    amount: number;
    account_log: [];
    category: { title: string };
    created_at: string;
}

export interface AccountLog2 {
    account: { title: string };
    type: 'income' | 'expense';
    amount: number;
    account_log: [];
    category: { title: string };
    created_at: string;
}

export interface Props {}

const Fees: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<AccountLog[]>([]);
    const [totalData, setData2] = useState<any>();
    const totalAmountValue = totalData?.total_amount || 0;
    const { id } = useParams();
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `/api/v1/branch-class-fees/children-fees-types/${id}`,
            );
            setData(response.data.data.data);
            setData2(response.data?.data?.data2);
            console.log('fees types data1', response.data?.data?.data2);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
        console.log('fees types data', totalData);
    }, []); // Trigger fetch when dates change

    return (
        <div className="admin_dashboard">
            <div className="result_details"></div>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Purpose</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {data?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.amount} tk</td>
                                        </tr>
                                    );
                                })}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="payment_total">Total:</td>
                                    <td>{totalAmountValue} tk</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fees;
