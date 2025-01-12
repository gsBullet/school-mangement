import React, { useEffect } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import { useSelector } from 'react-redux';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../../store';
import { details } from './config/store/async_actions/details';
import { initialState } from './config/store/inital_state';
import { useParams } from 'react-router-dom';
import storeSlice from './config/store';
import { update } from './config/store/async_actions/update';
import moment from 'moment/moment';
export interface Props {}

const Edit: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(details({ id: params.id }) as any);
    }, []);

    async function handle_submit(e) {
        e.preventDefault();
        let response = await dispatch(update(new FormData(e.target)) as any);
    }

    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    <Header page_title={setup.edit_page_title}></Header>

                    {Object.keys(state.item).length && (
                        <div className="content_body custom_scroll">
                            <form
                                onSubmit={(e) => handle_submit(e)}
                                className="form_600 mx-auto pt-3"
                            >
                                <input
                                    type="hidden"
                                    name="id"
                                    defaultValue={state.item.id}
                                />
                                <div className="form-group form-horizontal">
                                    <label>Name</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="name"
                                            name="name"
                                            defaultValue={state.item.name}
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Email</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="email"
                                            name="email"
                                            defaultValue={state.item.email}
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Password</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="password"
                                            name="password"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Phone number</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="phone number"
                                            name="phone_number"
                                            defaultValue={
                                                state.item.phone_number
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Image</label>
                                    <div className="form_elements">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            placeholder="image"
                                            name="staff_image"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Parmanent Address</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="Parmenent address"
                                            name="parmenent_address"
                                            defaultValue={
                                                state.item.staff_infos
                                                    ?.parmenent_address
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Country</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="country"
                                            name="country"
                                            defaultValue={
                                                state.item.staff_infos?.country
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>District</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="district"
                                            name="district"
                                            defaultValue={
                                                state.item.staff_infos?.district
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Post Code</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="post_code"
                                            name="post_code"
                                            defaultValue={
                                                state.item.staff_infos
                                                    ?.post_code
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Present Address</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="present address"
                                            name="present_address"
                                            defaultValue={
                                                state.item.staff_infos
                                                    ?.present_address
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Gruardian Contact Number</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="guardian number"
                                            name="guardian_contact_number"
                                            defaultValue={
                                                state.item.staff_infos
                                                    ?.guardian_contact_number
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Qualification</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="qualification"
                                            name="qualification"
                                            defaultValue={
                                                state.item.staff_infos
                                                    ?.qualification
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Gender</label>
                                    <div className="form_elements">
                                        <select
                                            name="gender"
                                            id=""
                                            defaultValue={
                                                state.item.staff_infos?.gender
                                            }
                                        >
                                            <option value="male">male</option>
                                            <option value="female">
                                                female
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Is Married</label>
                                    <div className="form_elements">
                                        <select
                                            name="is_married"
                                            defaultValue={
                                                state.item.staff_infos
                                                    ?.is_married
                                                    ? 'Married'
                                                    : 'UnMarried'
                                            }
                                            id=""
                                        >
                                            <option value="1">yes</option>
                                            <option value="0">no</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Blood group</label>
                                    <div className="form_elements">
                                        <select
                                            name="blood_group"
                                            defaultValue={
                                                state.item.staff_infos
                                                    ?.blood_group
                                            }
                                            id=""
                                        >
                                            <option value="A+">A+</option>
                                            <option value="B+">B+</option>
                                            <option value="A-">A-</option>
                                            <option value="AB-">AB-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="B-">B-</option>
                                            <option value="O-">O-</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Joining Date</label>
                                    <div className="form_elements">
                                        <input
                                            type="date"
                                            name="joining_date"
                                            defaultValue={moment(
                                                state.item.staffs?.joining_date,
                                            ).format('YYYY-MM-DD')}
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Department</label>
                                    <div className="form_elements">
                                        <select
                                            name="department"
                                            defaultValue={
                                                state.item.staffs?.department
                                            }
                                            id=""
                                        >
                                            <option value="marketing">
                                                Marketing
                                            </option>
                                            <option value="english">
                                                English
                                            </option>
                                            <option value="it">It</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Role</label>
                                    <div className="form_elements">
                                        <select
                                            name="role"
                                            defaultValue={state.item.role}
                                            id=""
                                        >
                                            <option value="principle">
                                                principle
                                            </option>
                                            <option value="vice-principle">
                                                vice-principle
                                            </option>
                                            <option value="accountant">
                                                accountant
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Responsibilies</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="responsibility"
                                            name="responsibility"
                                            defaultValue={
                                                state.item.staff_infos
                                                    ?.responsibility
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>National Id</label>
                                    <div className="form_elements">
                                        <input
                                            type="file"
                                            placeholder="national id"
                                            name="national_id"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Certificate No. 1</label>
                                    <div className="form_elements">
                                        <input
                                            type="file"
                                            placeholder="certificate 1"
                                            name="certificate_1"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Certificate No. 2</label>
                                    <div className="form_elements">
                                        <input
                                            type="file"
                                            placeholder="certificate 2"
                                            name="certificate_2"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Position</label>
                                    <div className="form_elements">
                                        <select
                                            name="possition"
                                            // defaultValue={
                                            //     state.item.staffs?.possition
                                            // }
                                            id=""
                                        >
                                            <option value="accountant">
                                                accountant
                                            </option>
                                            <option value="senior">
                                                senior
                                            </option>
                                            <option value="junior">
                                                junior
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label></label>
                                    <div className="form_elements">
                                        <button className="btn btn_1">
                                            submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Edit;
