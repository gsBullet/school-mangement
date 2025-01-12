import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';

export interface AccountLog {
    account: { title: string };
    type: 'income' | 'expense';
    amount: number;
    account_log: [];
    colection_category: { title: string };
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
    const { id } = useParams();

    const totalIncomeValue = totalIncome.total_income || 0;
    const totalIncomeQueryValue = totalIncome.total_income_query_days || 0; // Defaults to 0 if undefined
    const totalIncomeQueryPreviousValue =
        totalIncome.total_income_query_previous_days || 0; // Defaults to 0 if undefined

    const fetchData = async () => {
        try {
            let m1 = moment().subtract(30, 'days').format('YYYY-MM-DD');
            let m2 = moment().format('YYYY-MM-DD');
            const formData: { month1?: string; month2?: string } = {};
            formData.month1 = m1;
            formData.month2 = m2;

            const response = await axios.post(
                `/api/v1/account-logs/payment-history/${id}`,
                formData,
            );
            setData(response.data.data.data);
            setTotalIncome(response.data.data.data2);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Trigger fetch when dates change

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let formData = new FormData(e.target);
        try {
            const response = await axios.post(
                `/api/v1/account-logs/payment-history/${id}`,
                formData,
            );
            setData(response.data.data.data);
            setTotalIncome(response.data.data.data2);
        } catch (error) {
            setError(error);
        }
    };

    const tenDaysBefore = moment().subtract(30, 'days').format('YYYY-MM-DD');

    // console.log(data);
    // console.log(totalIncome);
    // console.log('tenDaysBefore', tenDaysBefore);

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
                                        .subtract(30, 'days')
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
                                    <th>Serial</th>
                                    <th>Purpose</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                <tr>
                                    <td></td>
                                    <td>Previous Data</td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>{totalIncomeQueryPreviousValue} tk</td>
                                </tr>
                                {data.map((i, index) => (
                                    <tr key={index}>
                                        <td></td>
                                        <td>{index + 1}</td>
                                        <td>{i.colection_category?.title}</td>
                                        <td>
                                            {moment(i.created_at).format(
                                                'YYYY-MM-DD',
                                            )}
                                        </td>
                                        <td>{i.amount}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td></td>
                                    <td>Present Data</td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>{totalIncomeQueryValue} tk</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>All Data</td>
                                    <td></td>
                                    <td>Grand Total:</td>
                                    <td>{totalIncomeValue} tk</td>
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
