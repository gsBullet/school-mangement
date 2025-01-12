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
            month: 'Jan',
            day_1: 'yes',
            day_2: 'yes',
            day_3: 'no',
            day_4: 'yes',
            day_5: 'yes',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'no',
            day_11: 'yes',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'yes',
            day_17: 'yes',
            day_18: 'yes',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'yes',
            day_23: 'no',
            day_24: 'yes',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
            day_29: 'yes',
            day_30: 'yes',
            day_31: 'yes',
        },
        {
            id: 2,
            month: 'Feb',
            day_1: 'yes',
            day_2: 'yes',
            day_3: 'yes',
            day_4: 'no',
            day_5: 'yes',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'yes',
            day_11: 'no',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'yes',
            day_17: 'yes',
            day_18: 'no',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'yes',
            day_23: 'yes',
            day_24: 'no',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
        },
        {
            id: 3,
            month: 'March',
            day_1: 'yes',
            day_2: 'yes',
            day_3: 'yes',
            day_4: 'yes',
            day_5: 'no',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'yes',
            day_11: 'no',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'no',
            day_17: 'yes',
            day_18: 'yes',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'yes',
            day_23: 'yes',
            day_24: 'no',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
            day_29: 'no',
            day_30: 'yes',
            day_31: 'yes',
        },
        {
            id: 4,
            month: 'April',
            day_1: 'yes',
            day_2: 'yes',
            day_3: 'no',
            day_4: 'yes',
            day_5: 'yes',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'no',
            day_11: 'yes',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'yes',
            day_17: 'no',
            day_18: 'yes',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'no',
            day_23: 'yes',
            day_24: 'yes',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'no',
            day_28: 'fri',
            day_29: 'yes',
            day_30: 'yes',
            day_31: 'yes',
        },
        {
            id: 5,
            month: 'May',
            day_1: 'yes',
            day_2: 'yes',
            day_3: 'yes',
            day_4: 'no',
            day_5: 'yes',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'yes',
            day_11: 'no',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'yes',
            day_17: 'yes',
            day_18: 'no',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'yes',
            day_23: 'yes',
            day_24: 'no',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
            day_29: 'yes',
            day_30: 'yes',
            day_31: 'no',
        },
        {
            id: 6,
            month: 'June',
            day_1: 'no',
            day_2: 'yes',
            day_3: 'yes',
            day_4: 'yes',
            day_5: 'no',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'yes',
            day_11: 'yes',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'no',
            day_17: 'yes',
            day_18: 'yes',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'no',
            day_23: 'yes',
            day_24: 'yes',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
            day_29: 'no',
            day_30: 'yes',
            day_31: 'yes',
        },
        {
            id: 7,
            month: 'July',
            day_1: 'yes',
            day_2: 'yes',
            day_3: 'no',
            day_4: 'yes',
            day_5: 'yes',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'no',
            day_11: 'yes',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'yes',
            day_17: 'no',
            day_18: 'yes',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'yes',
            day_23: 'no',
            day_24: 'yes',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
            day_29: 'yes',
            day_30: 'no',
            day_31: 'yes',
        },
        {
            id: 8,
            month: 'Augst',
            day_1: 'yes',
            day_2: 'yes',
            day_3: 'no',
            day_4: 'yes',
            day_5: 'yes',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'no',
            day_11: 'yes',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'yes',
            day_17: 'no',
            day_18: 'yes',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'yes',
            day_23: 'no',
            day_24: 'yes',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
            day_29: 'yes',
            day_30: 'no',
            day_31: 'yes',
        },
        {
            id: 9,
            month: 'Sept',
            day_1: 'yes',
            day_2: 'yes',
            day_3: 'yes',
            day_4: 'no',
            day_5: 'yes',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'yes',
            day_11: 'no',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'yes',
            day_17: 'yes',
            day_18: 'no',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'yes',
            day_23: 'yes',
            day_24: 'no',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
            day_29: 'yes',
            day_30: 'yes',
            day_31: 'no',
        },
        {
            id: 10,
            month: 'Oct',
            day_1: 'yes',
            day_2: 'yes',
            day_3: 'no',
            day_4: 'yes',
            day_5: 'yes',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'no',
            day_11: 'yes',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'yes',
            day_17: 'no',
            day_18: 'yes',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'yes',
            day_23: 'no',
            day_24: 'yes',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
            day_29: 'yes',
            day_30: 'no',
            day_31: 'yes',
        },
        {
            id: 11,
            month: 'Nov',
            day_1: 'yes',
            day_2: 'yes',
            day_3: 'yes',
            day_4: 'no',
            day_5: 'yes',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'yes',
            day_10: 'yes',
            day_11: 'no',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'yes',
            day_17: 'yes',
            day_18: 'no',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'yes',
            day_23: 'yes',
            day_24: 'no',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
            day_29: 'yes',
            day_30: 'yes',
            day_31: 'no',
        },
        {
            id: 12,
            month: 'Dec',
            day_1: 'yes',
            day_2: 'no',
            day_3: 'yes',
            day_4: 'yes',
            day_5: 'yes',
            day_6: 'yes',
            day_7: 'fri',
            day_8: 'yes',
            day_9: 'no',
            day_10: 'yes',
            day_11: 'yes',
            day_12: 'yes',
            day_13: 'yes',
            day_14: 'fri',
            day_15: 'yes',
            day_16: 'no',
            day_17: 'yes',
            day_18: 'yes',
            day_19: 'yes',
            day_20: 'yes',
            day_21: 'fri',
            day_22: 'no',
            day_23: 'yes',
            day_24: 'yes',
            day_25: 'yes',
            day_26: 'yes',
            day_27: 'yes',
            day_28: 'fri',
            day_29: 'no',
            day_30: 'yes',
            day_31: 'yes',
        },
    ];
    const generateTableHeaders = (times) => {
        return Array.from({ length: times }).map((_, index) => (
            <th key={index}>{index === 0 ? 'Month' : index}</th>
        ));
    };

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading"></h3>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr className="atttendance_thead_tr">
                                    {generateTableHeaders(32)}
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {datas?.map((i) => {
                                    return (
                                        <tr className="attendance_tr">
                                            <td>{i.month}</td>
                                            <td>
                                                {i.day_1 == 'yes' ? (
                                                    <i className="fa fa-check check_yes check_yes"></i>
                                                ) : i.day_1 == 'fri' ? (
                                                    <span className="check_fri ">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_2 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_2 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_3 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_3 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_4 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_4 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_5 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_5 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_6 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_6 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td className="friday_td">
                                                {i.day_7 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_7 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_8 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_8 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_9 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_9 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_10 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_10 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_11 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_11 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_12 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_12 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_13 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_13 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td className="friday_td">
                                                {i.day_14 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_14 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_15 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_15 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_16 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_16 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_17 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_17 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_18 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_18 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_19 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_19 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_20 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_20 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td className="friday_td">
                                                {i.day_21 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_21 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_22 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_22 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_23 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_23 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_24 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_24 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_25 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_25 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_26 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_26 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_27 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_27 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td className="friday_td">
                                                {i.day_28 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_28 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_29 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_29 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_30 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_30 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
                                            </td>
                                            <td>
                                                {i.day_31 == 'yes' ? (
                                                    <i className="fa fa-check check_yes"></i>
                                                ) : i.day_31 == 'fri' ? (
                                                    <span className="check_fri">
                                                        Fri
                                                    </span>
                                                ) : (
                                                    <i className="fa fa-times check_cross"></i>
                                                )}
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
