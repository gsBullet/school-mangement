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
                        <div className="content_body custom_scroll">
                            <table className="table quick_modal_table table-hover">
                                <tbody>
                                    <tr>
                                        <td>Photo</td>
                                        <td>:</td>
                                        <td>
                                            <a
                                                href={state.item.image}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={state.item.image}
                                                    alt="profile image"
                                                    style={{
                                                        height: 50,
                                                    }}
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
                                        <td>Phone Number</td>
                                        <td>:</td>
                                        <td>{state.item.phone_number}</td>
                                    </tr>
                                    <tr>
                                        <td>Parmenent Address</td>
                                        <td>:</td>
                                        <td>
                                            {
                                                state.item.teacher_infos
                                                    ?.parmenent_address
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Present Address</td>
                                        <td>:</td>
                                        <td>
                                            {
                                                state.item.teacher_infos
                                                    ?.present_address
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Guardian Number</td>
                                        <td>:</td>
                                        <td>
                                            {
                                                state.item.teacher_infos
                                                    ?.guardian_contact_number
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>District</td>
                                        <td>:</td>
                                        <td>
                                            {state.item.teacher_infos?.district}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Post Code</td>
                                        <td>:</td>
                                        <td>
                                            {
                                                state.item.teacher_infos
                                                    ?.post_code
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>:</td>
                                        <td>
                                            {state.item.teacher_infos?.gender}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>National ID</td>
                                        <td>:</td>
                                        <td>
                                            <a
                                                href={
                                                    state.item.teacher_infos
                                                        ?.national_id
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={
                                                        state.item.teacher_infos
                                                            ?.national_id
                                                    }
                                                    alt="national id"
                                                    style={{
                                                        height: 30,
                                                    }}
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Certificate No. 1</td>
                                        <td>:</td>
                                        <td>
                                            <a
                                                href={
                                                    state.item.teacher_infos
                                                        ?.certificate_no_1
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={
                                                        state.item.teacher_infos
                                                            ?.certificate_no_1
                                                    }
                                                    alt="certificate 1"
                                                    style={{
                                                        height: 30,
                                                    }}
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Certificate No. 2</td>
                                        <td>:</td>
                                        <td>
                                            <a
                                                href={
                                                    state.item.teacher_infos
                                                        ?.certificate_no_2
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={
                                                        state.item.teacher_infos
                                                            ?.certificate_no_2
                                                    }
                                                    alt="certificate 2"
                                                    style={{
                                                        height: 30,
                                                    }}
                                                />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Blood Group</td>
                                        <td>:</td>
                                        <td>
                                            {
                                                state.item.teacher_infos
                                                    ?.blood_group
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Is Married</td>
                                        <td>:</td>
                                        <td>
                                            {state.item.teacher_infos
                                                ?.is_married
                                                ? 'Married'
                                                : 'Un Married'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Joining Date</td>
                                        <td>:</td>
                                        <td>
                                            {moment(
                                                state.item.teachers
                                                    ?.joining_date,
                                            ).format('YYYY-MM-DD')}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Department</td>
                                        <td>:</td>
                                        <td>
                                            {state.item.teachers?.department}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {/* this is for all details for teacher dashboard which is suitable for only teacher or specific staff  or teacher*/}
                    {/* <div className="content_body custom_scroll">
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
                                    <h3 className="text-dark-medium profile_name font-medium mt-4">
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
                                        <Link to="/user-teachers/details/3/basic-information">
                                            Basic informations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user-teachers/details/3/academic-information">
                                            Academic informations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user-teachers/details/3/class-routine">
                                            Class routine
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user-teachers/details/3/payment">
                                            Payment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user-teachers/details/3/loan">
                                            Loan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user-teachers/details/3/kpi">
                                            Kpi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user-teachers/details/3/attendance">
                                            Attendance
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
