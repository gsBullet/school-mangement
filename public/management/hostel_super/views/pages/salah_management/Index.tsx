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
            fajr: 'yes',
            dhuhr: 'yes',
            asr: 'no',
            magrib: 'no',
            isha: 'no',
        },
        {
            id: 2,
            name: 'Ramim',
            fajr: 'no',
            dhuhr: 'yes',
            asr: 'yes',
            magrib: 'yes',
            isha: 'yes',
        },
        {
            id: 3,
            name: 'Tamim',
            fajr: 'no',
            dhuhr: 'yes',
            asr: 'no',
            magrib: 'no',
            isha: 'no',
        },
        {
            id: 4,
            name: 'Mahin',
            fajr: 'yes',
            dhuhr: 'no',
            asr: 'yes',
            magrib: 'yes',
            isha: 'yes',
        },
        {
            id: 5,
            name: 'Areeba',
            fajr: 'yes',
            dhuhr: 'yes',
            asr: 'no',
            magrib: 'no',
            isha: 'no',
        },
        {
            id: 6,
            name: 'Nayeem',
            fajr: 'no',
            dhuhr: 'no',
            asr: 'yes',
            magrib: 'yes',
            isha: 'yes',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <div className="hostel_super_meal_submit_form">
                    <form action="">
                        <div className="teacher_result">
                            <div>
                                <div>Meal </div>
                                <div>
                                    <select name="meal_select" id="">
                                        <option value="jdsl">Fajr</option>
                                        <option value="jdsl">Dhuhr</option>
                                        <option value="jdsl">Asr</option>
                                        <option value="jdsl">Magrib</option>
                                        <option value="jdsl">Isha</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div>Date</div>
                                <div>
                                    <input type="date" name="date" id="" />
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
                    <form action="">
                        <div className="meal_report">
                            <div>
                                <div>Select All</div>
                                <div className="checkbox_field">
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </div>
                            <button
                                className="btn btn-sm btn-outline-info"
                                type="submit"
                            >
                                Submit Salah Reports
                            </button>
                        </div>
                    </form>
                </div>
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Name</th>
                                    <th>Fajr</th>
                                    <th>Dhuhr</th>
                                    <th>Asr</th>
                                    <th>Magrib</th>
                                    <th>Isha</th>
                                    <th>Check All</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i: { [key: string]: any }) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>
                                                {i.fajr == 'yes' ? (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        defaultChecked
                                                    />
                                                ) : (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                    />
                                                )}
                                            </td>
                                            <td>
                                                {i.dhuhr == 'yes' ? (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        defaultChecked
                                                    />
                                                ) : (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                    />
                                                )}
                                            </td>
                                            <td>
                                                {i.asr == 'yes' ? (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        defaultChecked
                                                    />
                                                ) : (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                    />
                                                )}
                                            </td>
                                            <td>
                                                {i.magrib == 'yes' ? (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        defaultChecked
                                                    />
                                                ) : (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                    />
                                                )}
                                            </td>
                                            <td>
                                                {i.isha == 'yes' ? (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        defaultChecked
                                                    />
                                                ) : (
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                    />
                                                )}
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-outline-info"
                                                    type="submit"
                                                >
                                                    Check All
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

export default Index;
