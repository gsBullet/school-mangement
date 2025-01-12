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
            name: 'Shahin',
            class: 'Six',
            roll: '023',
            purpose: 'Class bunk',
            date: '23 Feb, 2024',
        },
        {
            id: 1,
            name: 'Tamim',
            class: 'Seven',
            roll: '055',
            purpose: 'Absence',
            date: '10 Feb, 2024',
        },
        {
            id: 1,
            name: 'Ramim',
            class: 'Six',
            roll: '101',
            purpose: 'Lately sleeping',
            date: '14 June, 2024',
        },
        {
            id: 1,
            name: 'Nayeem',
            class: 'Six',
            roll: '023',
            purpose: 'Smoking',
            date: '28 March, 2024',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <Link
                    to="/complain/create"
                    className="btn btn-sm btn-outline-info mb-2"
                    type="submit"
                >
                    Make a Complain
                </Link>
                <form action="">
                    <div className="teacher_result">
                        <div>
                            <div>Search by (name/roll/id)</div>
                            <div>
                                <input type="text" name="search" id="" />
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
                                    <th>Class</th>
                                    <th>Roll</th>
                                    <th>Purpose</th>
                                    <th>Date</th>
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
                                            <td>{i.class}</td>
                                            <td>{i.roll}</td>
                                            <td>{i.purpose}</td>
                                            <td>{i.date}</td>
                                            <td>
                                                <Link
                                                    to="/complain/details"
                                                    className="btn btn-sm  btn-outline-info"
                                                    type="submit"
                                                >
                                                    Details
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {/* <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>18000 tk</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
