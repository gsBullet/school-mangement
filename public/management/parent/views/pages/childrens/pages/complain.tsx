import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Complain: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            title: 'Class let',
            description:
                'Please consider reducing the number to enhance the learning environment',
        },
        {
            id: 2,
            title: 'Exam missing',
            description:
                'Please consider reducing the number to enhance the learning environment',
        },
        {
            id: 3,
            title: 'Rulls break',
            description:
                'Please consider reducing the number to enhance the learning environment',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Complain</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>SI</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.title}</td>
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

export default Complain;
