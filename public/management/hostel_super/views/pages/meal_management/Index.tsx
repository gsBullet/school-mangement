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
            breakfast: 'yes',
            lunch: 'yes',
            dinner: 'no',
        },
        {
            id: 2,
            name: 'Ramim',
            breakfast: 'no',
            lunch: 'yes',
            dinner: 'yes',
        },
        {
            id: 3,
            name: 'Tamim',
            breakfast: 'no',
            lunch: 'yes',
            dinner: 'no',
        },
        {
            id: 4,
            name: 'Mahin',
            breakfast: 'yes',
            lunch: 'no',
            dinner: 'yes',
        },
        {
            id: 5,
            name: 'Areeba',
            breakfast: 'yes',
            lunch: 'yes',
            dinner: 'no',
        },
        {
            id: 6,
            name: 'Nayeem',
            breakfast: 'no',
            lunch: 'no',
            dinner: 'yes',
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
                                        <option value="jdsl">Breakfast</option>
                                        <option value="jdsl">Lunch</option>
                                        <option value="jdsl">Dinner</option>
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
                                Submit Meal Reports
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
                                    <th>Breakfast</th>
                                    <th>Lunch</th>
                                    <th>Dinner</th>
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
                                                {i.breakfast == 'yes' ? (
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
                                                {i.lunch == 'yes' ? (
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
                                                {i.dinner == 'yes' ? (
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
