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
            name: 'Book',
            photo: '/assets/dashboard/images/book.jpeg',
            price: '300',
            details: 'Feature lined pages for writing.',
        },
        {
            id: 2,
            name: 'Note book',
            photo: '/assets/dashboard/images/notebook.jpeg',
            price: '280',
            details: 'Feature a metal coil binding allowing pages to lay flat.',
        },
        {
            id: 3,
            name: 'Pen',
            photo: '/assets/dashboard/images/pen.jpg',
            price: '10',
            details: 'This is very good ball point',
        },
        {
            id: 4,
            name: 'Folder',
            photo: '/assets/dashboard/images/folder.jpeg',
            price: '100',
            details: 'Durable folders made of polypropylene or PVC.',
        },
        {
            id: 5,
            name: 'Clipboards',
            photo: '/assets/dashboard/images/clipboard.jpeg',
            price: '120',
            details: 'Hardboard or plastic with a metal clip at the top.',
        },
        {
            id: 6,
            name: 'Planner',
            photo: '/assets/dashboard/images/planner.jpeg',
            price: '80',
            details: 'Designed for day-to-day scheduling and task management.',
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
                to="/products/create"
                className="btn btn-sm btn-outline-info mb-2"
                type="submit"
            >
                Create Product
            </Link>
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
                                    <th>Details</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>
                                                <img
                                                    src={i.photo}
                                                    alt=""
                                                    className="librarian_product"
                                                />
                                            </td>
                                            <td>{i.name}</td>
                                            <td>{i.details}</td>
                                            <td>{i.price}.00 taka</td>
                                            {/* <td>
                                                <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/student/details"
                                                >
                                                    details
                                                </Link>
                                                <Link
                                                    className="btn btn-sm btn-outline-info"
                                                    to="/class-attendance/take-attendance"
                                                >
                                                    Take attendance
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

export default Index;
