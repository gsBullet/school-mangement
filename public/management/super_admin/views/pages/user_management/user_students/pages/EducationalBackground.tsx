import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const EducationalBackground: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            previous_institute: 'Uttora Primary School',
            year_of_leaving: '12-10-2022',
            result: 'GPA-5',
            transcript: '/assets/dashboard/images/avatar.png',
        },
        {
            id: 2,
            previous_institute: 'Uttora high School',
            year_of_leaving: '12-10-2023',
            result: 'GPA-5',
            transcript: '/assets/dashboard/images/avatar.png',
        },
    ];

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Educational background</h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>Institute</th>
                                    <th>Year of Leaving</th>
                                    <th>Transcript</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.previous_institute}</td>
                                            <td>{i.year_of_leaving}</td>
                                            <td>{i.transcript}</td>
                                            <td>{i.result}</td>
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

export default EducationalBackground;
