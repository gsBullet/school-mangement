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

const All: React.FC<Props> = (props: Props) => {
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
            name: 'SIX',
            code: 'A101',
            capacity: 100,
            fee: 10000,
            prerequisities: 'Must have good manner',
            student_prerequisities: 'At least intermidiate',
            parent_prerequisities: 'dont know',
            policies: 'three step exam',
            rules: 'don`t know',
            waiver_rules: '10% for GPA-5',
            discount_rules: '5% for CGPA-4',
        },
        {
            id: 2,
            name: 'SEVEN',
            code: 'A102',
            capacity: 100,
            fee: 10000,
            prerequisities: 'Must have good manner',
            student_prerequisities: 'At least intermidiate',
            parent_prerequisities: 'dont know',
            policies: 'three step exam',
            rules: 'don`t know',
            waiver_rules: '10% for GPA-5',
            discount_rules: '5% for CGPA-4',
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
                                        {/* <th>Logo</th> */}
                                        <TableHeading
                                            label={`Name`}
                                            col_name={`name`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Code`}
                                            col_name={`code`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Capacity`}
                                            col_name={`capacity`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Fee`}
                                            col_name={`fee`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Prerequisites`}
                                            col_name={`prerequisities`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Policies`}
                                            col_name={`policies`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Rules`}
                                            col_name={`rules`}
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
                                                {/* <td>
                                                    <img
                                                        src="/assets/dashboard/images/avatar.png"
                                                        alt=""
                                                        style={{
                                                            height: 30,
                                                        }}
                                                    />
                                                </td> */}
                                                <td>{i.name}</td>
                                                <td>{i.code}</td>
                                                <td>{i.capacity}</td>
                                                <td>{i.fee}</td>
                                                <td>{i.prerequisities}</td>
                                                <td>{i.policies}</td>
                                                <td>{i.rules}</td>
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

export default All;
