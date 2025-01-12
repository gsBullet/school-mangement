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
import moment from 'moment/moment';
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
                                        <td>Event Name</td>
                                        <td>:</td>
                                        <td>{state.item.event_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Start Date</td>
                                        <td>:</td>
                                        <td>
                                            {moment(
                                                state.item.start_date,
                                            ).format('YYYY-MM-DD')}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>End Date</td>
                                        <td>:</td>
                                        <td>
                                            {moment(state.item.end_date).format(
                                                'YYYY-MM-DD',
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Days</td>
                                        <td>:</td>
                                        <td>{state.item.days}</td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>:</td>
                                        <td>{state.item.description}</td>
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
