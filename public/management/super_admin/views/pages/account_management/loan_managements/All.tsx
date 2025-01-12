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
            amount: 5000,
            account_id: '1',
            loan_type: 'home',
            loan_date: '12 June, 2023',
            return_date: '12 July, 2024',
            loan_status: 'active',
            recipient_id: 'Shahed',
            description: 'This is home loan',
        },
        {
            id: 2,
            amount: 4000,
            account_id: '2',
            loan_type: 'medical',
            loan_date: '12 June, 2023',
            return_date: '12 July, 2024',
            loan_status: 'active',
            recipient_id: 'Mahin',
            description: 'This is medical loan',
        },
        {
            id: 1,
            amount: 3000,
            account_id: '1',
            loan_type: 'others',
            loan_date: '12 June, 2023',
            return_date: '10 June, 2024',
            loan_status: 'overdue',
            recipient_id: 'Tasnim',
            description: 'This is others loan',
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
                                            label={`Amount`}
                                            col_name={`amount`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Recipient`}
                                            col_name={`recipient`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Loan Type`}
                                            col_name={`loan_type`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Loan Date`}
                                            col_name={`loan_date`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Return Date`}
                                            col_name={`return_date`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Account`}
                                            col_name={`account`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Status`}
                                            col_name={`status`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Description`}
                                            col_name={`description`}
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
                                                <td>{i.amount}</td>
                                                <td>{i.recipient_id}</td>
                                                <td>{i.loan_type}</td>
                                                <td>{i.loan_date}</td>
                                                <td>{i.return_date}</td>
                                                <td>{i.account_id}</td>
                                                <td>{i.loan_status}</td>
                                                <td>{i.description}</td>
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
