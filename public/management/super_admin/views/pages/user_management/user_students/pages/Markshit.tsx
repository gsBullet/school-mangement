import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Markshit: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            subject: 'Bangla',
            marks: '75',
            grade: 'A',
        },
        {
            id: 2,
            subject: 'English',
            marks: '85',
            grade: 'A+',
        },
        {
            id: 3,
            subject: 'Math',
            marks: '90',
            grade: 'A+',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading mt-4">Class Six</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Subject</th>
                                    <th>Marks</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.subject}</td>
                                            <td>{i.marks}</td>
                                            <td>{i.grade}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h3 className="table_heading mt-4">Class Seven</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Subject</th>
                                    <th>Marks</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.subject}</td>
                                            <td>{i.marks}</td>
                                            <td>{i.grade}</td>
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

export default Markshit;
