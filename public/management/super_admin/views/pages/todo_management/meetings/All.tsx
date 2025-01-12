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
            title: 'Weekly',
            attachment: '/assets/dashboard/attachment/file.pdf',
            agendas: 'mc-meeting',
            text: 'On 12th june first mc meeting',
            date: '12 June, 2023',
        },
        {
            id: 2,
            title: 'Yearly',
            attachment: '/assets/dashboard/attachment/file.pdf',
            agendas: 'ec-meeting',
            text: 'On 12th march first ec meeting',
            date: '12 March, 2023',
        },
        {
            id: 3,
            title: 'Monthly',
            attachment: '/assets/dashboard/attachment/file.pdf',
            agendas: 'monthly-meeting',
            text: 'On 12th july first monthly meeting',
            date: '12 July, 2023',
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
                                            label={`Title`}
                                            col_name={`title`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Date`}
                                            col_name={`date`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Agendas`}
                                            col_name={`agendas`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Attachment`}
                                            col_name={`attachment`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Text`}
                                            col_name={`text`}
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
                                                <td>{i.title}</td>
                                                <td>{i.date}</td>
                                                <td>{i.agendas}</td>
                                                <td>{i.attachment}</td>
                                                <td>{i.text}</td>
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
