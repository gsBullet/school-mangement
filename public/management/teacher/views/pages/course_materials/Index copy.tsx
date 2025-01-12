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
            subject: 'Bangla',
            total_student: '100',
            total_materials: '3',
        },
        {
            id: 2,
            class: 'Six',
            subject: 'Agriculture',
            total_student: '120',
            total_materials: '5',
        },
        {
            id: 3,
            class: 'Seven',
            subject: 'Social Science',
            total_student: '90',
            total_materials: '3',
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
                                    <th>Class</th>
                                    <th>Subject</th>
                                    <th>Total Student</th>
                                    <th>Total Materials</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.class}</td>
                                            <td>{i.subject}</td>
                                            <td>{i.total_student}</td>
                                            <td>{i.total_materials}</td>
                                            <td>
                                                <Link
                                                    className="btn btn-sm btn-outline-info mr-1"
                                                    to="/course-materials/details"
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
