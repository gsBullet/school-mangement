import React, { useEffect } from 'react';
// import Header from './components/management_data_page/Header';
// import Footer from './components/management_data_page/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import setup from './config/setup';
// import { RootState, useAppDispatch } from '../../../../store';
// import { details } from './config/store/async_actions/details';
// import { initialState } from './config/store/inital_state';
import { Link, Outlet, useParams } from 'react-router-dom';
// import storeSlice from './config/store';
export interface Props {}

const AcademicResources: React.FC<Props> = (props: Props) => {
    // const state: typeof initialState = useSelector(
    //     (state: RootState) => state[setup.module_name],
    // );

    // const dispatch = useAppDispatch();
    // const params = useParams();

    // useEffect(() => {
    //     dispatch(storeSlice.actions.set_item({}));
    //     dispatch(details({ id: params.id }) as any);
    // }, []);

    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    {/* <Header page_title={setup.details_page_title}></Header> */}

                    {/* {Object.keys(state.item).length && (
                        <div className="content_body">
                            <table className="table quick_modal_table table-hover">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>:</td>
                                        <td>{state.item.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Preffered Name</td>
                                        <td>:</td>
                                        <td>{state.item.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )} */}
                    <div className="content_body custom_scroll">
                        <div className="single-info-details">
                            {/* <div className="item-img">
                                <img
                                    className="user_profile_img"
                                    src="/assets/dashboard/images/avatar.png"
                                    alt="teacher"
                                />
                            </div> */}
                            <div className="item-content">
                                <div className="header-inline item-header details_header">
                                    <h3 className="text-dark-medium profile_name font-medium">
                                        Academic resources
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <Footer></Footer> */}
                </div>
            </div>
        </>
    );
};

export default AcademicResources;
