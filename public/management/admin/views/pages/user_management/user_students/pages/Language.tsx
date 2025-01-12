import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Language: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            title: 'Bangla',
            profeciency: 'Native',
        },
        {
            id: 2,
            title: 'English',
            profeciency: 'Fluent',
        },
        {
            id: 3,
            title: 'Hindi',
            profeciency: 'mid',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Language</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Title</th>
                                    <th>Profeciency</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.title}</td>
                                            <td>{i.profeciency}</td>
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

export default Language;
