import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Students: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            name: 'Shahin',
            book: 'Bangla',
            class: 'Six',
            issue_date: '12 Jan, 2024',
            return_date: '20 Jan, 2024',
            roll: '101',
        },
        {
            id: 2,
            name: 'Shahin',
            book: 'English',
            class: 'Six',
            issue_date: '13 Jan, 2024',
            return_date: '21 Jan, 2024',
            roll: '102',
        },
        {
            id: 3,
            name: 'Shahin',
            book: 'Mathemetics',
            class: 'Six',
            issue_date: '15 Jan, 2024',
            return_date: '23 Jan, 2024',
            roll: '103',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <h3 className="table_heading">Information</h3>
                <table className="table hostel_super_student">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                Shahin Alam
                            </td>
                        </tr>
                        <tr>
                            <td>Class</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                Six
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                shahin@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <td>Phone number</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                01897867563
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Book</th>
                                    <th>Issue Date</th>
                                    <th>Return Date</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.book}</td>
                                            <td>{i.issue_date}</td>
                                            <td>{i.return_date}</td>
                                            {/* <td>
                                                <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/student/review"
                                                >
                                                    Review
                                                </Link>
                                                <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/student/complain"
                                                >
                                                    Complain
                                                </Link>
                                            </td>
                                            <td>
                                                <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/student/single-student"
                                                >
                                                    Details
                                                </Link>
                                            </td> */}
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

export default Students;
