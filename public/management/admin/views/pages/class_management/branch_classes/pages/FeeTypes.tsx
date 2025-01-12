import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const FeeTypes: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            group: 'Academic fee',
            name: 'Admission Fee',
            description: 'One time payment',
        },
        {
            id: 2,
            group: 'Day-care fee',
            name: 'coaching fee',
            description: 'monthly payment',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading mt-4">Fee Types</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Id</th>
                                    <th>Group</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.group}</td>
                                            <td>{i.name}</td>
                                            <td>{i.description}</td>
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

export default FeeTypes;
