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
}

export interface TotalLog {
    total_expense?: number;
    total_income?: number;
    total_income_query_days?: number;
    total_expense_query_days?: number;
    total_income_query_previous_days?: number;
    total_expense_query_previous_days?: number;
}

export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [totalIncome, setTotalIncome] = useState<TotalLog>({});
    const [data, setData] = useState<AccountLog[]>([]);

    const totalExpenseValue = totalIncome.total_expense || 0;
    const totalIncomeValue = totalIncome.total_income || 0;

    const fetchData = async () => {
        try {
            let m1 = moment().subtract(10, 'days').format('YYYY-MM-DD');
            let m2 = moment().format('YYYY-MM-DD');
            const formData: { month1?: string; month2?: string } = {};
            formData.month1 = m1;
            formData.month2 = m2;

            const response = await axios.post(
                '/api/v1/account-logs/profit-loss',
                formData,
            );
            setData(response.data.data.categoryWiseTotalsArray);
            setTotalIncome(response.data.data.data2);
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
                '/api/v1/account-logs/profit-loss',
                formData,
            );
            setData(response.data.data.categoryWiseTotalsArray);
            setTotalIncome(response.data.data.data2);
        } catch (error) {
            setError(error);
        }
    };
    function intlAmount(totalIncomeValue: number, totalExpenseValue: number) {
        try {
            let totalValue = totalIncomeValue - totalExpenseValue;
            return new Intl.NumberFormat().format(totalValue);
        } catch (error) {
            console.log(error);
            return '';
        }
    }
    let newBalance = intlAmount(totalIncomeValue, totalExpenseValue);

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form onSubmit={handleSubmit}>
                    <div className="teacher_result">
                        <div>
                            <div>Start Date</div>
                            <div>
                                <input
                                    type="date"
                                    name="month1"
                                    defaultValue={moment()
                                        .subtract(10, 'days')
                                        .format('YYYY-MM-DD')}
                                />
                            </div>
                        </div>
                        <div>
                            <div>End Date</div>
                            <div>
                                <input
                                    type="date"
                                    name="month2"
                                    defaultValue={moment().format('YYYY-MM-DD')}
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
                                    <th>SERIAL</th>
                                    <th>INCOME</th>
                                    <th>CATEGORY</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {data?.map(
                                    (i: { [key: string]: any }, index) => {
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{index + 1}</td>
                                                <td></td>
                                                <td>{i.category}</td>
                                                <td>
                                                    {new Intl.NumberFormat().format(
                                                        i.total_income,
                                                    )}{' '}
                                                    tk
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Income Total:</td>
                                    <td></td>
                                    <td>
                                        {new Intl.NumberFormat().format(
                                            totalIncomeValue,
                                        )}{' '}
                                        tk
                                    </td>
                                </tr>
                                {data?.map(
                                    (i: { [key: string]: any }, index) => {
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{index + 1}</td>
                                                <td></td>
                                                <td>{i.category}</td>
                                                <td>
                                                    {new Intl.NumberFormat().format(
                                                        i.total_expense,
                                                    )}{' '}
                                                    tk
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Expense Total:</td>
                                    <td></td>
                                    <td>
                                        {new Intl.NumberFormat().format(
                                            totalExpenseValue,
                                        )}{' '}
                                        tk
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Profit Balance:</td>
                                    <td>Total:</td>
                                    <td>
                                        : {newBalance > '0' ? newBalance : '00'}{' '}
                                        tk
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Loss Balance:</td>
                                    <td>Total:</td>
                                    <td>
                                        : {newBalance < '0' ? newBalance : '00'}{' '}
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
