import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Skills: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            title: 'Footballer',
            level: 'top',
        },
        {
            id: 2,
            title: 'Photographer',
            level: 'mid',
        },
        {
            id: 3,
            title: 'Programmer',
            level: 'mid',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Skills</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Title</th>
                                    <th>Level</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.title}</td>
                                            <td>{i.level}</td>
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

export default Skills;
