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
            name: 'Student1',
            class: 'Six',
            roll: '201',
            attendance: 21,
            axpected_attendance: 24,
            sick_leave: 1,
            sick_reason: 'for some problem',
            casual_leave: 2,
            casual_reason: 'for some problem',
            attendace_avg: 90,
        },
        {
            id: 2,
            name: 'Student2',
            class: 'Six',
            roll: '202',
            attendance: 22,
            axpected_attendance: 24,
            sick_leave: 1,
            sick_reason: 'for some problem',
            casual_leave: 1,
            casual_reason: 'for some problem',
            attendace_avg: 92,
        },
        {
            id: 3,
            name: 'Student3',
            class: 'Six',
            roll: '203',
            attendance: 22,
            axpected_attendance: 24,
            sick_leave: 2,
            sick_reason: 'for some problem',
            casual_leave: 0,
            casual_reason: 'for some problem',
            attendace_avg: 92,
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
                                            label={`Expected Attendance`}
                                            col_name={`exprcted_attendace`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Total Attendance`}
                                            col_name={`attendance`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Sick Leave`}
                                            col_name={`sick_leave`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Reason`}
                                            col_name={`reason`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Casual Leave`}
                                            col_name={`casual_leave`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Reason`}
                                            col_name={`reason`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Attendance_avg`}
                                            col_name={`attendance_avg`}
                                            sort={true}
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
                                            <td>{i.name}</td>
                                            <td>{i.class}</td>
                                            <td>{i.roll}</td>
                                            <td>{i.axpected_attendance}</td>
                                            <td>{i.attendance}</td>
                                            <td>{i.sick_leave}</td>
                                            <td>{i.sick_reason}</td>
                                            <td>{i.casual_leave}</td>
                                            <td>{i.casual_reason}</td>
                                            <td>{i.attendace_avg}%</td>
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
                <TableFooter></TableFooter>
            </div>

            <Filter></Filter>
            <QuickView></QuickView>
        </div>
    );
};

export default Attendance;
