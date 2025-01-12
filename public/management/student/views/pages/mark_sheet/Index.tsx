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
            marks: '480',
            grade: 'A+',
            session: '2020',
        },
        {
            id: 2,
            class: 'Seven',
            marks: '500',
            grade: 'A+',
            session: '2021',
        },
        {
            id: 3,
            class: 'Eight',
            marks: '450',
            grade: 'A',
            session: '2022',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Results</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Class</th>
                                    <th>Marks</th>
                                    <th>Session</th>
                                    <th>Grade</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.class}</td>
                                            <td>{i.marks}</td>
                                            <td>{i.session}</td>
                                            <td>{i.grade}</td>
                                            <td>
                                                <Link
                                                    className="btn btn-sm btn-outline-info"
                                                    to="/mark-sheet/details"
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
