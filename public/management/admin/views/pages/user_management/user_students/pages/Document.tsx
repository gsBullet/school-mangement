import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const BasicInformation: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            title: 'Certificate',
            expire_date: '12-10-2025',
            issue_date: '12-10-2023',
            file: '/assets/dashboard/images/avatar.png',
        },
        {
            id: 2,
            title: 'Transcript',
            expire_date: '12-10-2026',
            issue_date: '12-10-2022',
            file: '/assets/dashboard/images/avatar.png',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Document</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Title</th>
                                    <th>Issue Date</th>
                                    <th>Expire Date</th>
                                    <th>File</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.title}</td>
                                            <td>{i.issue_date}</td>
                                            <td>{i.expire_date}</td>
                                            <td>{i.file}</td>
                                            <td>
                                                <button className="btn btn_1">
                                                    <span className="material-symbols-outlined pointer">
                                                        download
                                                    </span>
                                                    <span>download</span>
                                                </button>
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

export default BasicInformation;
