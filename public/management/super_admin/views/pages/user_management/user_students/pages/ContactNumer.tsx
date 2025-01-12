import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const ContactNumber: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            contact_number: '0189786756',
            owner: 'Father',
        },
        {
            id: 2,
            contact_number: '0178676545',
            owner: 'Uncle',
        },
        {
            id: 3,
            contact_number: '0178676546',
            owner: 'Brother',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Contact Number</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Contact Number</th>
                                    <th>Relative</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.contact_number}</td>
                                            <td>{i.owner}</td>
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

export default ContactNumber;
