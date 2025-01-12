import React, { useEffect } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../../store';
import { details } from './config/store/async_actions/details';
import { initialState } from './config/store/inital_state';
import { useParams } from 'react-router-dom';
import storeSlice from './config/store';
export interface Props {}

const Details: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(details({ id: params.id }) as any);
    }, []);

    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    <Header page_title={setup.details_page_title}></Header>

                    {Object.keys(state.item).length && (
                        <div className="content_body">
                            <table className="table quick_modal_table table-hover">
                                <tbody>
                                    <tr>
                                        <td>Vehicle Title</td>
                                        <td>:</td>
                                        <td>{state.item.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Vehicle Type</td>
                                        <td>:</td>
                                        <td>{state.item.type}</td>
                                    </tr>
                                    <tr>
                                        <td>Driver</td>
                                        <td>:</td>
                                        <td>{state.item?.driver?.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Driver Number</td>
                                        <td>:</td>
                                        <td>
                                            {state.item?.driver?.driver_number}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Driver Assistant Number</td>
                                        <td>:</td>
                                        <td>
                                            {
                                                state.item?.driver
                                                    ?.assistant_number_1
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Driver Present Address</td>
                                        <td>:</td>
                                        <td>
                                            {
                                                state.item?.driver
                                                    ?.present_address
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Driver permanent Address</td>
                                        <td>:</td>
                                        <td>
                                            {
                                                state.item?.driver
                                                    ?.permanent_address
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Driver licence</td>
                                        <td>:</td>
                                        <td>
                                            {state.item?.driver?.driver_licence}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Details;
