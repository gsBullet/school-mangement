import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export interface AccountLog {
    account: { title: string };
    type: 'income' | 'expense';
    amount: number;
}

export interface Props {}

const Index: React.FC<Props> = () => {
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<AccountLog[]>([]);
    const [income, setIncome] = useState<number>(0);
    const [expense, setExpense] = useState<number>(0);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `/api/v1/account-logs/account/${id}`,
            );
            setData(response.data.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Calculate totals whenever data changes
        const totalIncome = data.reduce(
            (sum, log) => (log.type === 'income' ? sum + log.amount : sum),
            0,
        );
        const totalExpense = data.reduce(
            (sum, log) => (log.type === 'expense' ? sum + log.amount : sum),
            0,
        );

        setIncome(totalIncome);
        setExpense(totalExpense);
    }, [data]);

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <Link
                    to="/accounts/create"
                    className="btn btn-sm btn-outline-info mb-2"
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
                                    <th>Income</th>
                                    <th>Expense</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {data.map((log: AccountLog, index) => (
                                    <tr key={index}>
                                        <td></td>
                                        <td>{index + 1}</td>
                                        <td>{log.account?.title}</td>
                                        <td>
                                            {log.type === 'income'
                                                ? log.amount
                                                : '-'}
                                        </td>
                                        <td>
                                            {log.type === 'expense'
                                                ? log.amount
                                                : '-'}
                                        </td>
                                        <td>-</td>
                                        {/* Calculate balance */}
                                    </tr>
                                ))}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>{income} tk</td>
                                    <td>{expense} tk</td>
                                    <td>{income - expense} tk</td>{' '}
                                    {/* Total balance */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {error && <div className="error">{error.message}</div>}{' '}
                {/* Display error message if exists */}
            </div>
        </div>
    );
};

export default Index;
