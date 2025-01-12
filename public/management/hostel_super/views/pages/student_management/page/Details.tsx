import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Details: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            purpose: 'Couching',
            is_ok: 'no',
        },
        {
            id: 2,
            purpose: 'Class',
            is_ok: 'yes',
        },
        {
            id: 3,
            purpose: 'Library',
            is_ok: 'no',
        },
    ];
    const datas2: data[] = [
        {
            id: 1,
            purpose: 'Breakfast',
            is_ok: 'no',
        },
        {
            id: 2,
            purpose: 'Lunch',
            is_ok: 'yes',
        },
        {
            id: 3,
            purpose: 'Dinner',
            is_ok: 'no',
        },
    ];
    const datas3: data[] = [
        {
            id: 1,
            purpose: 'Fajr',
            is_ok: 'yes',
        },
        {
            id: 2,
            purpose: 'Dhuhr',
            is_ok: 'yes',
        },
        {
            id: 3,
            purpose: 'Asr',
            is_ok: 'yes',
        },
        {
            id: 4,
            purpose: 'Magrib',
            is_ok: 'yes',
        },
        {
            id: 5,
            purpose: 'Isha',
            is_ok: 'yes',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form action="">
                    <div className="teacher_result">
                        <div>
                            <div>Date</div>
                            <div>
                                <input type="date" name="month2" id="" />
                            </div>
                        </div>
                        <div>
                            <div>Date</div>
                            <div>
                                <input type="date" name="month2" id="" />
                            </div>
                        </div>
                        <button
                            className="btn btn-sm btn-outline-info "
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <h3 className="table_heading">Information</h3>
                <table className="table hostel_super_student text-nowra">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                Nayeem Hossain
                            </td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                Male
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                masud1@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <td>Phone number</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                01897867563
                            </td>
                        </tr>
                        <tr>
                            <td>Parent</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                Abdur Rahman
                            </td>
                        </tr>
                        <tr>
                            <td>Parent number</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                01897867563
                            </td>
                        </tr>
                        <tr>
                            <td>Stutas</td>
                            <td>:</td>
                            <td className="font-medium text-dark-medium">
                                Active
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <h3>Daily Activities</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Purpose</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.purpose}</td>
                                            <td>
                                                {i.is_ok == 'yes' ? (
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        name=""
                                                        id=""
                                                    />
                                                ) : i.is_ok == 'no' ? (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                    />
                                                ) : (
                                                    ''
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div className="empty_div"></div>
                        <h3>Meal</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas2?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.purpose}</td>
                                            <td>
                                                {i.is_ok == 'yes' ? (
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        name=""
                                                        id=""
                                                    />
                                                ) : i.is_ok == 'no' ? (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                    />
                                                ) : (
                                                    ''
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div className="empty_div"></div>
                        <h3>Salah</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Waqt</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas3?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.purpose}</td>
                                            <td>
                                                {i.is_ok == 'yes' ? (
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked
                                                        name=""
                                                        id=""
                                                    />
                                                ) : i.is_ok == 'no' ? (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                    />
                                                ) : (
                                                    ''
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="empty_div"></div>
                </div>
            </div>
        </div>
    );
};

export default Details;
