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
            class: 'Six',
            phone_number: '01897867563',
            name: 'Shahin',
            total_issues_book: '5',
        },
        {
            id: 2,
            class: 'Six',
            phone_number: '01897867564',
            name: 'Ramim',
            total_issues_book: '4',
        },
        {
            id: 3,
            class: 'Seven',
            phone_number: '01897867565',
            name: 'Tamim',
            total_issues_book: '3',
        },
        {
            id: 4,
            class: 'Seven',
            phone_number: '01897867566',
            name: 'Areeba',
            total_issues_book: '5',
        },
    ];

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
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Phone</th>
                                    <th>Total Issues Book</th>
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
                                            <td>{i.phone_number}</td>
                                            <td>{i.total_issues_book}</td>
                                            <td>
                                                <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/book-issues/student"
                                                >
                                                    details
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
