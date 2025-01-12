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

const Kpi: React.FC<Props> = (props: Props) => {
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
            attendance: '20/30',
            exam_marks: '40/50',
            ct_marks: '14/20',
            total: '74/100',
            phone_number: '01786867672',
            email: 'student1@gamil.com',
            address: 'Mirpur',
            image: '/assets/dashboard/images/avatar.png',
        },
        {
            id: 2,
            branch: 'Barishal',
            name: 'Student2',
            class: 'Six',
            roll: '203',
            attendance: '22/30',
            exam_marks: '38/50',
            ct_marks: '18/20',
            total: '78/100',
            phone_number: '01786867673',
            email: 'student2@gamil.com',
            address: 'Uttora',
            image: '/assets/dashboard/images/avatar.png',
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
                                            label={`Exam Marks`}
                                            col_name={`exam_marks`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Ct Marks`}
                                            col_name={`ct_marks`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Total`}
                                            col_name={`total`}
                                            sort={true}
                                        />
                                    </tr>
                                </thead>
                                <tbody id="all_list">
                                    {/* {(state.all as any)?.data?.map( */}
                                    {datas?.map((i: { [key: string]: any }) => {
                                        return (
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
                                                <td>{i.exam_marks}</td>
                                                <td>{i.ct_marks}</td>
                                                <td>{i.total}</td>
                                            </tr>
                                        );
                                    })}
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

export default Kpi;
