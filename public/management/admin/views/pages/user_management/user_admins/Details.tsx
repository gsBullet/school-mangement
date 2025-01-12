import React, { useEffect } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../../store';
import { details } from './config/store/async_actions/details';
import { initialState } from './config/store/inital_state';
import { Link, Outlet, useParams } from 'react-router-dom';
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
                    )}
 */}
                    <div className="content_body custom_scroll">
                        <div className="single-info-details">
                            <div className="item-img">
                                <img
                                    className="user_profile_img"
                                    src="/assets/dashboard/images/avatar.png"
                                    alt="teacher"
                                />
                            </div>
                            <div className="item-content">
                                <div className="header-inline item-header details_header">
                                    <h3 className="text-dark-medium profile_name font-medium">
                                        Masud Rana
                                    </h3>
                                    <div className="header-elements">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <span className="material-symbols-outlined fill">
                                                        edit_square
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="material-symbols-outlined fill">
                                                        print
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="material-symbols-outlined fill">
                                                        system_update_alt
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="section_naviagation">
                                    <li>
                                        <Link to="/user-admins/details/3/basic-information">
                                            Basic information
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user-admins/details/3/academic-information">
                                            Academic information
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="">Information</a>
                                    </li>
                                    <li>
                                        <a href="">Document</a>
                                    </li>
                                    <li>
                                        <a href="">Parents</a>
                                    </li>
                                    <li>
                                        <a href="">Skills</a>
                                    </li>
                                    <li>
                                        <a href="">Language</a>
                                    </li>
                                    <li>
                                        <a href="">contace number</a>
                                    </li>
                                    <li>
                                        <a href="">educational background</a>
                                    </li>
                                </ul>
                                <div></div>
                                <div className="info-table table-responsive">
                                    <Outlet></Outlet>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Details;
