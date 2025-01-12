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
            order_no: '01ADC010',
            order_amount: '300',
            date: '12 Jan, 2024',
        },
        {
            id: 2,
            order_no: '01ADC011',
            order_amount: '280',
            date: '10 Jan, 2024',
        },
        {
            id: 3,
            order_no: '01ADC012',
            order_amount: '10',
            date: '15 Feb, 2024',
        },
        {
            id: 4,
            order_no: '01ADC013',
            order_amount: '100',
            date: '10 March, 2024',
        },
        {
            id: 5,
            order_no: '01ADC014',
            order_amount: '120',
            date: '14 March, 2024',
        },
        {
            id: 6,
            order_no: '01ADC015',
            order_amount: '80',
            date: '15 March, 2024',
        },
    ];

    return (
        <div className="admin_dashboard">
            {/* <form action="">
                <div className="teacher_result">
                    <div>
                        <div>Class</div>
                        <div>
                            <select name="class" id="">
                                <option value="six">Six</option>
                                <option value="seven">Seven</option>
                                <option value="eight">Eight</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>Month</div>
                        <div>
                            <input type="month" name="month" id="" />
                        </div>
                    </div>
                    <button
                        className="btn btn-sm btn-outline-info "
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form> */}
            <Link
                to="/order/create"
                className="btn btn-sm btn-outline-info mb-2"
                type="submit"
            >
                Create Product
            </Link>
            <Link
                to="/order/edit"
                className="btn btn-sm btn-outline-info mb-2 ml-2"
                type="submit"
            >
                Edit Product
            </Link>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Order No.</th>
                                    <th>Date</th>
                                    <th>Order Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.order_no}</td>
                                            <td>{i.date}</td>
                                            <td>{i.order_amount}</td>
                                            <td>
                                                <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/order/details"
                                                >
                                                    details
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
