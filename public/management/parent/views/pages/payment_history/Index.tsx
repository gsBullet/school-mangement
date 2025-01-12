import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<AccountLog[]>([]);

    const fetchData = async () => {
        try {
            let m1 = moment().subtract(30, 'days').format('YYYY-MM-DD');
            let m2 = moment().format('YYYY-MM-DD');
            const formData: { month1?: string; month2?: string } = {};
            formData.month1 = m1;
            formData.month2 = m2;

            const response = await axios.get(
                '/api/v1/user-students/parent/childrens/5',
            );
            setData(response.data.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Trigger fetch when dates change

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {data?.map(
                                    (i: { [key: string]: any }, index) => {
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img
                                                        className="children_img"
                                                        src={
                                                            i.children_basic
                                                                ?.image
                                                        }
                                                        alt="Children img"
                                                    />
                                                </td>
                                                <td>
                                                    {i.children_basic?.name}
                                                </td>
                                                {/* <td>{i.user_student_id}</td> */}
                                                <td>
                                                    {
                                                        i.children_info
                                                            ?.children_class
                                                            ?.name
                                                    }
                                                </td>
                                                <td>
                                                    <Link
                                                        className="btn btn-sm btn-outline-info mr-1"
                                                        to={`/payment-history/children/${i.user_student_id}`}
                                                        // to="/childrens/details"
                                                    >
                                                        Payment History
                                                    </Link>
                                                    {/* <Link
                                                    className="btn btn-sm btn-outline-info"
                                                    to="/class-attendance/take-attendance"
                                                >
                                                    Take attendance
                                                </Link> */}
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
