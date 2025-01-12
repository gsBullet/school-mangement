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
                                        <td>Building Name</td>
                                        <td>:</td>
                                        <td>{state.item.building_name}</td>
                                    </tr>
                                    <tr>
                                        <td>building code</td>
                                        <td>:</td>
                                        <td>{state.item.building_code}</td>
                                    </tr>
                                    <tr>
                                        <td>Attachment</td>
                                        <td>:</td>
                                        <td className="font-medium text-dark-medium">
                                            <a
                                                href={state.item.attachment}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={state.item.attachment}
                                                    width={30}
                                                    alt="attachment"
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Photo</td>
                                        <td>:</td>
                                        <td>
                                            <a
                                                href={state.item.photo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={state.item.photo}
                                                    width={30}
                                                    alt="building photo"
                                                />
                                            </a>
                                        </td>
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
