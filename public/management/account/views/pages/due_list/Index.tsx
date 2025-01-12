import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            last_date: '10 Feb, 2024',
            amount: '3000',
            name: 'Shahin',
        },
        {
            id: 2,
            last_date: '14 March, 2024',
            amount: '10000',
            name: 'Tamim',
        },
        {
            id: 3,
            last_date: '15 Feb, 2024',
            amount: '5000',
            name: 'Ramim',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form action="">
                    <div className="teacher_result">
                        <div>
                            <div>Student (id/roll/mobile)</div>
                            <div>
                                <input type="text" name="student_id" id="" />
                            </div>
                        </div>
                        <button
                            className="btn btn-sm btn-outline-info "
                            type="submit"
                        >
                            Search
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
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.amount}</td>
                                            <td>
                                                <Link
                                                    to="/due-list/details"
                                                    className="btn btn-sm btn-outline-info"
                                                >
                                                    Details
                                                </Link>
                                                {/* <Link
                                                    to="/due-list/details"
                                                    className="btn btn-sm btn-outline-info ml-2"
                                                >
                                                    Payment
                                                </Link> */}
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
