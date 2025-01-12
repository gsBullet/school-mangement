import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export interface AccountLog {
    account: { title: string };
    type: 'income' | 'expense';
    amount: number;
    account_log: [];
}
export interface TotalLog {
    total_expense?: number;
    total_income?: number;
}
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [totalIncome, setTotalIncome] = useState<TotalLog>({});
    const [data, setData] = useState<AccountLog[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                '/api/v1/accounts?orderByCol=id&orderByAsc=true&show_active_data=true&paginate=10&select_fields=title,status,opening_balance',
            );
            setData(response.data.data.data);
            setTotalIncome(response.data.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log('totalIncome', totalIncome);

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <Link
                    to="/accounts/create"
                    className="btn btn-sm btn-outline-info mb-2"
                    type="submit"
                >
                    Create
                </Link>
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Account</th>
                                    <th>Opening Balance</th>
                                    <th>Total Income</th>
                                    <th>Total Expense</th>
                                    <th>Balance</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {data?.length &&
                                    data?.map((i: { [key: string]: any }) => {
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{i.id}</td>
                                                <td>{i.title}</td>
                                                <td>{i.opening_balance} tk</td>
                                                <td>
                                                    {i.total_income
                                                        ? i.total_income
                                                        : '-'}{' '}
                                                </td>
                                                <td>
                                                    {' '}
                                                    {i.total_expense
                                                        ? i.total_expense
                                                        : '-'}{' '}
                                                </td>
                                                <td>
                                                    {i.total_income -
                                                        i.total_expense}{' '}
                                                    tk
                                                </td>
                                                <td>
                                                    <Link
                                                        to={`/accounts/details/${i.id}`}
                                                        className="btn btn-sm  btn-outline-info"
                                                        type="submit"
                                                    >
                                                        Details
                                                    </Link>
                                                </td>
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

export default Index;
