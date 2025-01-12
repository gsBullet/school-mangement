import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Children: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            name: 'Sakin Khan',
            class: 'Play',
            roll: '001',
            section: 'A',
            kpi: '95/100',
            due: '0001',
        },
        {
            id: 2,
            name: 'Tasin ahmed',
            class: 'Two',
            roll: '002',
            section: 'A',
            kpi: '95/100',
            due: '1000',
        },
        {
            id: 3,
            name: 'Munjerin',
            class: 'Three',
            roll: '005',
            section: 'B',
            kpi: '80/100',
            due: '1500',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading mt-4">Children</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Roll</th>
                                    <th>Section</th>
                                    <th>Kpi</th>
                                    <th>Due</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.class}</td>
                                            <td>{i.roll}</td>
                                            <td>{i.section}</td>
                                            <td>{i.kpi}</td>
                                            <td>{i.due}</td>
                                            <td>details</td>
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

export default Children;
