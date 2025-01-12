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
                'id, building_name, building_code, photo, description, attachment, status',
            ),
        );
        dispatch(all({}) as any);
    }, []);

    function quick_view(data: anyObject = {}) {
        dispatch(storeSlice.actions.set_item(data));
        dispatch(storeSlice.actions.set_show_quick_view_canvas(true));
    }

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
                                        <th>Photo</th>
                                        <TableHeading
                                            label={`Building Name`}
                                            col_name={`building_name`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Building Code`}
                                            col_name={`building_code`}
                                            sort={true}
                                        />
                                        {/* <TableHeading
                                            label={`Total Room`}
                                            col_name={`total_room`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Total Office`}
                                            col_name={`total_office`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Total Class`}
                                            col_name={`total_class`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Total Leaving`}
                                            col_name={`total_leaving`}
                                            sort={true}
                                        /> */}
                                        <TableHeading
                                            label={`Attachment`}
                                            col_name={`attachment`}
                                            sort={true}
                                        />
                                        <TableHeading
                                            label={`Description`}
                                            col_name={`deacription`}
                                            sort={true}
                                        />
                                    </tr>
                                </thead>
                                <tbody id="all_list">
                                    {/* {(state.all as any)?.data?.map( */}
                                    {(state.all as any)?.data?.map(
                                        (i: { [key: string]: any }) => {
                                            return (
                                                <tr
                                                    key={i.id}
                                                    className={`table_rows table_row_${i.id}`}
                                                >
                                                    <td>
                                                        <TableRowAction
                                                            item={i}
                                                        />
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
                                                            src={i.photo}
                                                            alt="Building Photo"
                                                            style={{
                                                                height: 30,
                                                            }}
                                                        />
                                                    </td>
                                                    <td>{i.building_name}</td>
                                                    <td>{i.building_code}</td>
                                                    {/* <td>{i.total_room}</td>
                                                    <td>{i.total_office}</td>
                                                    <td>{i.total_class}</td>
                                                    <td>{i.total_leaving}</td> */}
                                                    <td className="font-medium text-dark-medium">
                                                        <a
                                                            href={i.attachment}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Show File
                                                        </a>
                                                    </td>
                                                    <td>{i.description}</td>
                                                </tr>
                                            );
                                        },
                                    )}
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
