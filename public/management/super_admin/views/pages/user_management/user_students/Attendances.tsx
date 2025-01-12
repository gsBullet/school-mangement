import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../../store';
import { all } from './config/store/async_actions/all';
import setup from './config/setup';
import { initialState } from './config/store/inital_state';
import Header from './components/all_data_page/Header';
import TableFooter from './components/all_data_page/TableFooter';
import Paginate from '../../../components/Paginate';
import Filter from './components/canvas/Filter';
import QuickView from './components/canvas/QuickView';
import storeSlice from './config/store';
import { anyObject } from '../../../../common_types/object';
import TableRowAction from './components/all_data_page/TableRowAction';
import SelectItem from './components/all_data_page/SelectItem';
import SelectAll from './components/all_data_page/SelectIAll';
import TableHeading from './components/all_data_page/TableHeading';
import { Link } from 'react-router-dom';
import ExportSelected from './components/all_data_page/ExportSelected';
import AllDeactivatedData from './components/all_data_page/AllDeactivatedData';
let route_prefix = setup.route_prefix;

export interface Props {}

const Attendance: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            storeSlice.actions.set_select_fields(
                'id, name, email, phone_number, status',
            ),
        );
        dispatch(all({}) as any);
    }, []);

    function quick_view(data: anyObject = {}) {
        dispatch(storeSlice.actions.set_item(data));
        dispatch(storeSlice.actions.set_show_quick_view_canvas(true));
    }

    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            branch: 'kustia',
            name: 'Student1',
            class: 'Six',
            roll: '202',
            attendance: '75%',
            phone_number: '01786867672',
            email: 'student1@gamil.com',
            address: 'Mirpur',
            image: '/assets/dashboard/images/avatar.png',
            '1-sat': 1,
            '2-sun': 0,
            '3-mon': 1,
            '4-tue': 0,
            '5-wed': 0,
        },
        {
            id: 2,
            branch: 'Barishal',
            name: 'Student2',
            class: 'Six',
            roll: '203',
            attendance: '65%',
            phone_number: '01786867673',
            email: 'student2@gamil.com',
            address: 'Uttora',
            image: '/assets/dashboard/images/avatar.png',
            '1-sat': 1,
            '2-sun': 1,
            '3-mon': 1,
            '4-tue': 1,
            '5-wed': 1,
        },
    ];

    return (
        <div className="page_content">
            <div className="explore_window fixed_size">
                <Header></Header>

                <div className="content_body">
                    <div className="data_list">
                        <div className="table_responsive custom_scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th />
                                        <th>
                                            <SelectAll />
                                        </th>
                                        <TableHeading
                                            label={`ID`}
                                            col_name={`id`}
                                            sort={true}
                                        />
                                        <th>Image</th>
                                        <TableHeading
                                            label={`Branch`}
                                            col_name={`branch`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Name`}
                                            col_name={`name`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Class`}
                                            col_name={`class`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Roll`}
                                            col_name={`roll`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Phone number`}
                                            col_name={`phone_number`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Attendance`}
                                            col_name={`attendance`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`1-sat`}
                                            col_name={`1`}
                                            sort={false}
                                        />
                                        <TableHeading
                                            label={`2-sun`}
                                            col_name={`2`}
                                            sort={false}
                                        />
                                        <TableHeading
                                            label={`3-mon`}
                                            col_name={`3`}
                                            sort={false}
                                        />
                                        <TableHeading
                                            label={`4-tue`}
                                            col_name={`4`}
                                            sort={false}
                                        />
                                        <TableHeading
                                            label={`5-wed`}
                                            col_name={`5`}
                                            sort={false}
                                        />
                                    </tr>
                                </thead>
                                <tbody id="all_list">
                                    {/* {(state.all as any)?.data?.map( */}
                                    {datas?.map((i: { [key: string]: any }) => (
                                        <tr
                                            key={i.id}
                                            className={`table_rows table_row_${i.id}`}
                                        >
                                            <td>
                                                <TableRowAction item={i} />
                                            </td>
                                            <td>
                                                <SelectItem item={i} />
                                            </td>
                                            <td>
                                                <span
                                                    className="quick_view_trigger"
                                                    onClick={() =>
                                                        quick_view(i)
                                                    }
                                                >
                                                    {i.id}
                                                </span>
                                            </td>
                                            <td>
                                                <img
                                                    src="/assets/dashboard/images/avatar.png"
                                                    alt=""
                                                    style={{
                                                        height: 30,
                                                    }}
                                                />
                                            </td>
                                            <td>{i.branch}</td>
                                            <td>{i.name}</td>
                                            <td>{i.class}</td>
                                            <td>{i.roll}</td>
                                            <td>{i.phone_number}</td>
                                            <td>{i.attendance}</td>
                                            <td>
                                                {i['1-sat'] == 0 ? (
                                                    <span className="material-symbols-outlined fill">
                                                        close
                                                    </span>
                                                ) : (
                                                    <span className="material-symbols-outlined fill">
                                                        check
                                                    </span>
                                                )}
                                            </td>
                                            <td>
                                                {i['2-sun'] == 0 ? (
                                                    <span className="material-symbols-outlined fill">
                                                        close
                                                    </span>
                                                ) : (
                                                    <span className="material-symbols-outlined fill">
                                                        check
                                                    </span>
                                                )}
                                            </td>
                                            <td>
                                                {i['3-mon'] == 0 ? (
                                                    <span className="material-symbols-outlined fill">
                                                        close
                                                    </span>
                                                ) : (
                                                    <span className="material-symbols-outlined fill">
                                                        check
                                                    </span>
                                                )}
                                            </td>
                                            <td>
                                                {i['4-tue'] == 0 ? (
                                                    <span className="material-symbols-outlined fill">
                                                        close
                                                    </span>
                                                ) : (
                                                    <span className="material-symbols-outlined fill">
                                                        check
                                                    </span>
                                                )}
                                            </td>
                                            <td>
                                                {i['5-wed'] == 0 ? (
                                                    <span className="material-symbols-outlined fill">
                                                        close
                                                    </span>
                                                ) : (
                                                    <span className="material-symbols-outlined fill">
                                                        check
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <Paginate
                            set_url={storeSlice.actions.set_url}
                            set_paginate={storeSlice.actions.set_paginate}
                            set_page={storeSlice.actions.set_page}
                            all={all}
                            data={state.all as any}
                            selected_paginate={state.paginate}
                        ></Paginate>
                    </div>
                </div>
                {/* <TableFooter></TableFooter> */}
                <div className="footer">
                    <div className="action_btns">
                        <ul>
                            <li>
                                <Link to={`/${route_prefix}/take-attendance`}>
                                    <span className="material-symbols-outlined fill">
                                        add
                                    </span>
                                    <div className="text">Take Attendances</div>
                                </Link>
                            </li>
                            <li>
                                <ExportSelected />
                            </li>
                            <li>
                                <AllDeactivatedData />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Filter></Filter>
            <QuickView></QuickView>
        </div>
    );
};

export default Attendance;
