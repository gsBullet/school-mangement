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
            name: 'Shahin',
            class: 'Six',
            roll: '001',
            building_no: '101',
            room_no: '101',
            student_id: '2024A101',
            phone_number: '0183297423',
        },
        {
            id: 2,
            name: 'Ramim',
            class: 'Seven',
            roll: '002',
            building_no: '101',
            room_no: '101',
            student_id: '2024A102',
            phone_number: '0183297424',
        },
        {
            id: 3,
            name: 'Tamim',
            class: 'Eight',
            roll: '003',
            building_no: '101',
            room_no: '101',
            student_id: '2024A103',
            phone_number: '0183297421',
        },
        {
            id: 4,
            name: 'Areeba',
            class: 'Six',
            roll: '004',
            building_no: '101',
            room_no: '101',
            student_id: '2024A104',
            phone_number: '0183297422',
        },
        {
            id: 5,
            name: 'Jerin',
            class: 'Seven',
            roll: '005',
            building_no: '101',
            room_no: '101',
            student_id: '2024A105',
            phone_number: '0183297425',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                {/* <Link
                    to="/expense-entry"
                    className="btn btn-sm btn-outline-info mb-2"
                    type="submit"
                >
                    Create
                </Link> */}
                <form action="">
                    <div className="teacher_result">
                        <div>
                            <div>Search by (name/roll/phone)</div>
                            <div>
                                <input type="text" name="search" id="" />
                            </div>
                        </div>
                        <button
                            className="btn btn-sm btn-outline-info "
                            type="submit"
                        >
                            Search
                        </button>
                    </div>
                </form>
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
                                    <th>Room No.</th>
                                    <th>Building No.</th>
                                    <th>Id</th>
                                    <th>Phone</th>
                                    <th>Action</th>
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
                                            <td>{i.room_no}</td>
                                            <td>{i.building_no}</td>
                                            <td>{i.student_id} </td>
                                            <td>{i.phone_number} </td>
                                            <td>
                                                <Link
                                                    to="/student/details"
                                                    className="btn btn-sm  btn-outline-info"
                                                    type="submit"
                                                >
                                                    Details
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {/* <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td>18000 tk</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
