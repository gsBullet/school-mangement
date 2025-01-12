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
import { agendas } from './config/store/async_actions/agendas';
export interface Props {}

const Agenda: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(agendas({ id: params.id }) as any);
        // console.log('state agenda', state.agendas);
    }, []);
    useEffect(() => {
        console.log('state agenda', state.agendas);
    }, [state.agendas]);
    if (state) {
        console.log('condition', state.agendas?.agendas);
    }

    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    <Header page_title={'Meeting agendas'}></Header>

                    {Object.keys(state.agendas).length && (
                        <div className="content_body custom_scroll">
                            <table className="table quick_modal_table table-hover">
                                <tbody>
                                    <tr>
                                        <td>Title</td>
                                        <td>:</td>
                                        <td>{state.agendas?.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>:</td>
                                        <td>{state.agendas?.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>:</td>
                                        <td>
                                            {moment(state.agendas?.date).format(
                                                'YYYY-MM-DD',
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h1 className="my-4">Meeting Agendas Part</h1>
                            {state?.agendas?.agendas?.length &&
                                state?.agendas?.agendas?.map(
                                    (i: { [key: string]: any }, index) => {
                                        return (
                                            <div className="my-4">
                                                <p>No.{index + 1}</p>
                                                <p className="mt-1">
                                                    {i.title}
                                                </p>
                                                <p className="mt-2">
                                                    {i.description}
                                                </p>
                                            </div>
                                        );
                                    },
                                )}
                        </div>
                    )}

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Agenda;
