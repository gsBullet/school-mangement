import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Result: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            name: 'Shahin',
            present: '75%',
            absance: '25%',
        },
        {
            id: 2,
            name: 'Tamim',
            present: '85%',
            absance: '15%',
        },
        {
            id: 3,
            name: 'Ramim',
            present: '90%',
            absance: '10%',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="result_details">
                <h3 className="table_heading mt-4">June, 2024</h3>
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
                                    <th>Present</th>
                                    <th>Absance</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.present}</td>
                                            <td>{i.absance}</td>
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

export default Result;
