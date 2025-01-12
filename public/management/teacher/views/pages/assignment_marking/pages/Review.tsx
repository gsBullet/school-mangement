import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Review: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            name: 'Shahin',
            subject: 'Bangla',
            assignment: '/assets/dashboard/images/bg.png',
            grade: 'A',
        },
        {
            id: 2,
            name: 'Tamim',
            subject: 'Agriculture',
            assignment: '/assets/dashboard/images/bg.png',
            grade: 'A+',
        },
        {
            id: 3,
            name: 'Ramim',
            subject: 'Social Science',
            assignment: '/assets/dashboard/images/bg.png',
            grade: 'A+',
        },
    ];

    return (
        <div className="admin_dashboard">
            <form action="" onSubmit={(e) => e.preventDefault()}>
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
                        <div>Subject</div>
                        <div>
                            <select name="subject" id="">
                                <option value="bangla">Six</option>
                                <option value="agriculture">Seven</option>
                                <option value="social science">
                                    Social Science
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>Assignment</div>
                        <div>
                            <select name="assignment" id="">
                                <option value="first">First</option>
                                <option value="second">Second</option>
                                <option value="third">Third</option>
                            </select>
                        </div>
                    </div>
                    <button
                        className="btn btn-sm btn-outline-info "
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div className="teacher_result">
                <div>
                    <div>Mark</div>
                    <div>
                        <input type="number" name="" id="" />
                    </div>
                </div>
                <button className="btn btn-sm btn-outline-info " type="submit">
                    Submit
                </button>
            </div>
            <div className="content_body">
                {/* <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Name</th>
                                    <th>Subject</th>
                                    <th>Assignment</th>
                                    <th>Mark</th>
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
                                            <td>
                                                <img
                                                    className="assignment_image"
                                                    src="/assets/dashboard/images/bg.jpg"
                                                    alt="assignment"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    name=""
                                                    id=""
                                                />
                                            </td>
                                            <td>
                                                <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/assignment/review"
                                                >
                                                    submit
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div> */}
                <div>
                    <h3>Assignment no 1</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Officiis quisquam voluptatibus aliquam id quos
                        dignissimos adipisci aliquid quas harum itaque.
                        Cupiditate, dicta doloremque ex corrupti laborum culpa
                        illum voluptatum eius?
                    </p>
                    <div>
                        <img
                            className="assignment_image"
                            src="assets/dashboard/images/assignment1.jpg"
                            alt="assignment1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
