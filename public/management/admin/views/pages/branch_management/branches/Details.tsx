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

                    {Object.keys(state.item).length && (
                        <div className="content_body custom_scroll">
                            <table className="table quick_modal_table table-hover">
                                <tbody>
                                    <tr>
                                        <td>Logo</td>
                                        <td>:</td>
                                        <td>
                                            <a
                                                href={state.item.logo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={state.item.logo}
                                                    width={50}
                                                    alt="branch logo"
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>:</td>
                                        <td>{state.item.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>{state.item.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>:</td>
                                        <td>{state.item.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Primary Contact</td>
                                        <td>:</td>
                                        <td>{state.item.primary_contact}</td>
                                    </tr>
                                    <tr>
                                        <td>Latitude</td>
                                        <td>:</td>
                                        <td>{state.item.lat}</td>
                                    </tr>
                                    <tr>
                                        <td>Longitude</td>
                                        <td>:</td>
                                        <td>{state.item.lng}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>:</td>
                                        <td>
                                            {state.item.status == 'active'
                                                ? 'Active'
                                                : 'Deactive'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Map</td>
                                        <td>:</td>
                                        <td>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: state.item.map,
                                                }}
                                            ></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {/* <div className="content_body custom_scroll">
                        <div className="single-info-details">
                            <div className="item-content">
                                <div className="header-inline item-header details_header">
                                    <h3 className="text-dark-medium profile_name font-medium">
                                        Uttora
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
                                        <Link to="/branches/details/3/branch-informatin">
                                            Branch information
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/branches/details/3/class">
                                            Class
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/branches/details/3/teacher">
                                            Teacher
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/branches/details/3/student">
                                            Student
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/branches/details/3/staff">
                                            Staff
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/branches/details/3/guardian">
                                            Guardian
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/branches/details/3/transport">
                                            Transport
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/branches/details/3/class-routine">
                                            Class routine
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/branches/details/3/hostel">
                                            Buildings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/branches/details/3/account-information">
                                            Accounts
                                        </Link>
                                    </li>
                                </ul>
                                <div></div>
                                <div className="info-table table-responsive">
                                    <Outlet></Outlet>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Details;
