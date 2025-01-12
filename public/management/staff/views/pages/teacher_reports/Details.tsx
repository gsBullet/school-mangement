import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Details: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            name: 'Shahin',
            subject: 'Bangla',
            total_assignment: '5',
            take_assignment: '4',
            miss_assignment: '1',
        },
        {
            id: 2,
            name: 'Tamim',
            subject: 'Agriculture',
            total_assignment: '4',
            take_assignment: '3',
            miss_assignment: '1',
        },
        {
            id: 3,
            name: 'Ramim',
            subject: 'Social Science',
            total_assignment: '3',
            take_assignment: '2',
            miss_assignment: '1',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="result_details">
                <h3 className="table_heading mt-4">June, 2024</h3>
                {/* <form action="" onSubmit={(e) => e.preventDefault()}>
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
                        <div>
                            <div>Roll</div>
                            <div>
                                <input type="number" name="roll" id="" />
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
            </div>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Name</th>
                                    <th>Subject</th>
                                    <th>Total Assignment</th>
                                    <th>Take Assignment</th>
                                    <th>Miss Assignment</th>
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
                                            <td>{i.subject}</td>
                                            <td>{i.total_assignment}</td>
                                            <td>{i.take_assignment}</td>
                                            <td>{i.miss_assignment}</td>
                                            <td>
                                                <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/assignment/review"
                                                >
                                                    review
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

export default Details;
