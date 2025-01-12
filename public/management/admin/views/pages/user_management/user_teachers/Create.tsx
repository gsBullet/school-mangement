import React from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { useAppDispatch } from '../../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
import moment from 'moment/moment';
export interface Props {}

const Create: React.FC<Props> = (props: Props) => {
    const dispatch = useAppDispatch();

    async function handle_submit(e) {
        e.preventDefault();
        let response = await dispatch(store(new FormData(e.target)) as any);
        if (!Object.prototype.hasOwnProperty.call(response, 'error')) {
            e.target.reset();
        }
    }

    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    <Header page_title={setup.create_page_title}></Header>
                    <div className="content_body custom_scroll">
                        <form
                            onSubmit={(e) => handle_submit(e)}
                            className="form_6002 mx-auto pt-3"
                        >
                            <div className="student_form">
                                <div className="full_width">
                                    <div className="form_section_heading">
                                        <h2 className=""> Major Information</h2>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-group form-horizontal">
                                            <label>Name</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="name"
                                                    name="name"
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
                                                    name="teacher_image"
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
                                    </div>
                                    <div className="full_width">
                                        <div className="form_section_heading">
                                            <h2 className="">
                                                Basic Information
                                            </h2>
                                        </div>
                                        <div className="d-flex">
                                            <div className="form-group form-horizontal">
                                                <label>Parmanent Address</label>
                                                <div className="form_elements">
                                                    <input
                                                        type="text"
                                                        placeholder="Parmenent address"
                                                        name="parmenent_address"
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
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group form-horizontal">
                                                <label>
                                                    Gruardian Contact Number
                                                </label>
                                                <div className="form_elements">
                                                    <input
                                                        type="text"
                                                        placeholder="guardian number"
                                                        name="guardian_contact_number"
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
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group form-horizontal">
                                                <label>Gender</label>
                                                <div className="form_elements">
                                                    <select name="gender" id="">
                                                        <option value="male">
                                                            male
                                                        </option>
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
                                                        id=""
                                                    >
                                                        <option value="1">
                                                            yes
                                                        </option>
                                                        <option value="0">
                                                            no
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group form-horizontal">
                                                <label>Blood group</label>
                                                <div className="form_elements">
                                                    <select
                                                        name="blood_group"
                                                        id=""
                                                    >
                                                        <option value="A+">
                                                            A+
                                                        </option>
                                                        <option value="B+">
                                                            B+
                                                        </option>
                                                        <option value="A-">
                                                            A-
                                                        </option>
                                                        <option value="AB-">
                                                            AB-
                                                        </option>
                                                        <option value="AB+">
                                                            AB+
                                                        </option>
                                                        <option value="B-">
                                                            B-
                                                        </option>
                                                        <option value="O-">
                                                            O-
                                                        </option>
                                                        <option value="O-">
                                                            O-
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group form-horizontal">
                                                <label>Joining Date</label>
                                                <div className="form_elements">
                                                    <input
                                                        type="date"
                                                        name="joining_date"
                                                        defaultValue={moment().format(
                                                            'YYYY-MM-DD',
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group form-horizontal">
                                                <label>Department</label>
                                                <div className="form_elements">
                                                    <select
                                                        name="department"
                                                        id=""
                                                    >
                                                        <option value="1">
                                                            Bangla
                                                        </option>
                                                        <option value="2">
                                                            English
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* <div className="form-group form-horizontal">
                                                <label>Role</label>
                                                <div className="form_elements">
                                                    <input
                                                        type="text"
                                                        placeholder="Staff role"
                                                        name="role"
                                                    />
                                                </div>
                                            </div> */}
                                            {/* <div className="form-group form-horizontal">
                                                <label>Responsibilies</label>
                                                <div className="form_elements">
                                                    <input
                                                        type="text"
                                                        placeholder="responsibility"
                                                        name="responsibility"
                                                    />
                                                </div>
                                            </div> */}
                                            <div className="form-group form-horizontal">
                                                <label>Class</label>
                                                <div className="form_elements">
                                                    <select name="class" id="">
                                                        <option value="1">
                                                            Six
                                                        </option>
                                                        <option value="2">
                                                            Seven
                                                        </option>
                                                    </select>
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
                                            {/* <div className="form-group form-horizontal">
                                                <label>Status</label>
                                                <div className="form_elements">
                                                    <select name="status" id="">
                                                        <option value="active">
                                                            active
                                                        </option>
                                                        <option value="block">
                                                            block
                                                        </option>
                                                    </select>
                                                </div>
                                            </div> */}
                                            {/* <div className="form-group form-horizontal">
                                                <label>Position</label>
                                                <div className="form_elements">
                                                    <select
                                                        name="position"
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
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group student_submit form-horizontal">
                                <label></label>
                                <div className="form_elements">
                                    <button className="btn btn_1">
                                        submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Create;
