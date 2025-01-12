import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const AssignResult: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            name: 'Shahin',
            grade: 'A',
        },
        {
            id: 2,
            name: 'Tamim',
            grade: 'A+',
        },
        {
            id: 3,
            name: 'Ramim',
            grade: 'A+',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="result_details">
                <h3 className="table_heading mt-4"></h3>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <div className="teacher_result">
                        <div>
                            <div>Subject</div>
                            <div>
                                <select name="subject" id="">
                                    <option value="six">Bangla</option>
                                    <option value="seven">English</option>
                                    <option value="eight">Math</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>Exam</div>
                            <div>
                                <select name="exam" id="">
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
                                    <th>Marks</th>
                                    <th>Other Marks</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map(
                                    (i: { [key: string]: any }, index) => {
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{index + 1}</td>
                                                <td>{i.name}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        name="mark"
                                                        id=""
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        name="other_mark"
                                                        id=""
                                                    />
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

export default AssignResult;
