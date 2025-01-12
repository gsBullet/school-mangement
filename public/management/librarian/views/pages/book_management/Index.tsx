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
            book_id: 'B001',
            Reg_date: '01 Jan, 2024',
            quantity: '120',
            available: '40',
            name: 'Bangla',
        },
        {
            id: 2,
            book_id: 'E101',
            Reg_date: '01 Jan, 2024',
            quantity: '210',
            available: '50',
            name: 'English',
        },
        {
            id: 3,
            book_id: 'M101',
            Reg_date: '02 Jan, 2024',
            quantity: '100',
            available: '50',
            name: 'Mathemetics',
        },
        {
            id: 4,
            book_id: 'H101',
            Reg_date: '03 Jan, 2024',
            quantity: '150',
            available: '60',
            name: 'History',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <Link
                    to="/book-management/create-issue"
                    className="btn btn-sm btn-outline-info mb-2"
                    type="submit"
                >
                    New book issue
                </Link>
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Book Id</th>
                                    <th>Name</th>
                                    <th>Reg. Date</th>
                                    <th>Quantity</th>
                                    <th>Available</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.book_id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.Reg_date}</td>
                                            <td>{i.quantity}</td>
                                            <td>{i.available}</td>
                                            <td>
                                                <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/book-management/books"
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
