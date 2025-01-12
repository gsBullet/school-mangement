import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment/moment';

export interface AccountLog {
    account: { title: string };
    type: 'income' | 'expense';
    amount: number;
    account_log: [];
    category: { title: string };
    created_at: string;
    month: string;
    total_income: any;
    total_expense: any;
}

export interface TotalLog {
    grand_total_expense?: number | 1;
    grand_total_income?: number;
}

export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [grandTotalIncome, setGrandTotalIncome] = useState<TotalLog>({});
    const [data, setData] = useState<AccountLog[]>([]);

    const totalIncomeValue = grandTotalIncome.grand_total_income || 0;
    const totalExpenseValue = grandTotalIncome.grand_total_expense || 0;

    const fetchData = async () => {
        try {
            let m1 = moment().subtract(12, 'months').format('YYYY-MM');
            let m2 = moment().format('YYYY-MM');
            const formData: { month1?: string; month2?: string } = {};
            formData.month1 = m1;
            formData.month2 = m2;

            const response = await axios.post(
                '/api/v1/account-logs/month-wise-statement',
                formData,
            );
            setData(response.data.data.data);
            setGrandTotalIncome(response.data.data.grand_totals);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        try {
            const response = await axios.post(
                '/api/v1/account-logs/month-wise-statement',
                formData,
            );
            setData(response.data.data.data);
            setGrandTotalIncome(response.data.data.grand_totals);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form onSubmit={handleSubmit}>
                    <div className="teacher_result">
                        <div>
                            <div>Start Date</div>
                            <div>
                                <input
                                    type="month"
                                    name="month1"
                                    defaultValue={moment()
                                        .subtract(12, 'months')
                                        .format('YYYY-MM')}
                                />
                            </div>
                        </div>
                        <div>
                            <div>End Date</div>
                            <div>
                                <input
                                    type="month"
                                    name="month2"
                                    defaultValue={moment().format('YYYY-MM')}
                                />
                            </div>
                        </div>
                        <button
                            className="btn btn-sm btn-outline-info"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Month</th>
                                    <th>Total Income</th>
                                    <th>Total Expence</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {data.map((i, index) => (
                                    <tr key={index}>
                                        <td></td>
                                        <td>{index + 1}</td>
                                        <td>
                                            {moment(i.month).format('MMM-YYYY')}
                                        </td>
                                        <td>{i.total_income}</td>
                                        <td>{i.total_expense}</td>
                                        <td>
                                            {i.total_income - i.total_expense}{' '}
                                            tk
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>{totalIncomeValue} tk</td>
                                    <td>{totalExpenseValue} tk</td>
                                    <td>
                                        {totalIncomeValue - totalExpenseValue}{' '}
                                        tk
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
