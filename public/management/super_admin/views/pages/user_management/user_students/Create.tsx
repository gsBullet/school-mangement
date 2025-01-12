import React, { useState } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { useAppDispatch } from '../../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
export interface Props {}

const Create: React.FC<Props> = (props: Props) => {
    const dispatch = useAppDispatch();
    const [totalDocument, setTotalDocument] = useState([1]);
    const [totalParent, setTotalParent] = useState([1]);
    const [totalContactNumber, setTotalContactNumber] = useState([1]);
    const [totalLanguage, setTotalLanguage] = useState([1]);
    const [totalSkill, setTotalSkill] = useState([1]);
    const [totalEducationalBackground, setTotalEducationalBackground] =
        useState([1]);

    async function handle_submit(e) {
        e.preventDefault();
        let response = await dispatch(store(new FormData(e.target)) as any);
        if (!Object.prototype.hasOwnProperty.call(response, 'error')) {
            e.target.reset();
        }
    }

    function remove_from_state(index, state, setState) {
        let t = [...state];
        t.splice(index, 1);
        setState(t);
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
                                        <h2 className="">Basic Information</h2>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-group form-vertical">
                                            <label>Name</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="name"
                                                    name="name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Gender</label>
                                            <div className="form_elements">
                                                <select name="gender" id="">
                                                    <option value="male">
                                                        male
                                                    </option>
                                                    <option value="female">
                                                        female
                                                    </option>
                                                    <option value="others">
                                                        others
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Email</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="email"
                                                    name="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Phone number</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="phone number"
                                                    name="phone_number"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Image</label>
                                            <div className="form_elements">
                                                <input
                                                    type="file"
                                                    placeholder="image"
                                                    name="image"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
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
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Password</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="password"
                                                    name="password"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Confirm Password</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="confirm password"
                                                    name="confirm_password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="full_width">
                                    <div className="form_section_heading">
                                        <h2 className="">
                                            Admission Information
                                        </h2>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-group form-vertical">
                                            <label>Branch</label>
                                            <div className="form_elements">
                                                <select name="branch_id" id="">
                                                    <option value="Uttora">
                                                        Uttora
                                                    </option>
                                                    <option value="Banani">
                                                        Banani
                                                    </option>
                                                    <option value="Gulshan">
                                                        Gulshan
                                                    </option>

                                                    <option value="Demra">
                                                        Demra
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Addmission no</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="addmission no"
                                                    name="addmission_no"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Roll no</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="roll no"
                                                    name="roll_no"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Addmission date</label>
                                            <div className="form_elements">
                                                <input
                                                    type="date"
                                                    name="addmission_date"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Class</label>
                                            <div className="form_elements">
                                                <select name="class_id" id="">
                                                    <option value="six">
                                                        six
                                                    </option>
                                                    <option value="seven">
                                                        seven
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Shift</label>
                                            <div className="form_elements">
                                                <select name="shift" id="">
                                                    <option value=" boy morning">
                                                        boy morning
                                                    </option>
                                                    <option value="boy evening">
                                                        boy evening
                                                    </option>
                                                    <option value="girls evening">
                                                        girls evening
                                                    </option>
                                                    <option value="girl morning">
                                                        girl morning
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Section</label>
                                            <div className="form_elements">
                                                <select name="section" id="">
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="full_width">
                                    <div className="form_section_heading">
                                        <h4>Information</h4>
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-group form-vertical">
                                            <label>Present Address</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="present address"
                                                    name="present_address"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Permanent Address</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="permanent address"
                                                    name="permanent_address"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Date of birth</label>
                                            <div className="form_elements">
                                                <input
                                                    type="date"
                                                    name="date_of_birth"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Religion</label>
                                            <div className="form_elements">
                                                <select name="religion" id="">
                                                    <option value="islam">
                                                        islam
                                                    </option>
                                                    <option value="hindu">
                                                        hindu
                                                    </option>
                                                    <option value="kristian">
                                                        kristian
                                                    </option>
                                                    <option value="budda">
                                                        budda
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Nationality</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="nationality"
                                                    name="nationality"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Division</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="division"
                                                    name="division"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Post code</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="post code"
                                                    name="post_code"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Country</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="country"
                                                    name="country"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Medical condition</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="medical condition"
                                                    name="medical_condition"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Current medcation</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="current medcation"
                                                    name="current_medcation"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Telegram name</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="telegram name"
                                                    name="telegram_name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Telegram id</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="telegram id"
                                                    name="telegram_id"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Qr code</label>
                                            <div className="form_elements">
                                                <input
                                                    type="file"
                                                    name="qr_code"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Blood group</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="blood group"
                                                    name="blood_group"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Student expire date</label>
                                            <div className="form_elements">
                                                <input
                                                    type="date"
                                                    name="student_expire_date"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Height</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="height"
                                                    name="height"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Weight</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="weight"
                                                    name="weight"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>As on date</label>
                                            <div className="form_elements">
                                                <input
                                                    type="date"
                                                    name="ass_on_date"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Familly information</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="familly information"
                                                    name="familly_information"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Shibling information</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="shibling information"
                                                    name="shibling_information"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Living house type</label>
                                            <div className="form_elements">
                                                <input
                                                    type="text"
                                                    placeholder="living house type"
                                                    name="living_house_type"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Birth certificate</label>
                                            <div className="form_elements">
                                                <input
                                                    type="file"
                                                    name="birth_certificate"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>NID</label>
                                            <div className="form_elements">
                                                <input type="file" name="nid" />
                                            </div>
                                        </div>
                                        <div className="form-group form-vertical">
                                            <label>Cast</label>
                                            <div className="form_elements">
                                                <select name="cast" id="">
                                                    <option value="Khan">
                                                        Khan
                                                    </option>
                                                    <option value="Chowdhuri">
                                                        Chowdhuri
                                                    </option>
                                                    <option value="Patowari">
                                                        Patowari
                                                    </option>
                                                    <option value="Shikdar">
                                                        Shikdar
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="full_width">
                                    <div className="form_section_heading">
                                        <h4>Document</h4>
                                    </div>
                                    <div className="multi_inputs">
                                        <div className="pb-4 px-0">
                                            <button
                                                className="btn"
                                                onClick={() =>
                                                    setTotalDocument([
                                                        ...totalDocument,
                                                        1,
                                                    ])
                                                }
                                            >
                                                Add new
                                            </button>
                                        </div>
                                        {totalDocument.map((i, index) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="multi_input_group"
                                                >
                                                    <div className="d-flex">
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Document title
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="text"
                                                                    placeholder="document title"
                                                                    name="document_title"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Document file
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="file"
                                                                    placeholder="document file"
                                                                    name="file"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Issue Date
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="date"
                                                                    name="issue_date"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Expire Date
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="date"
                                                                    name="expire_date"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {totalDocument.length >
                                                        1 && (
                                                        <div>
                                                            <button
                                                                onClick={() =>
                                                                    remove_from_state(
                                                                        index,
                                                                        totalDocument,
                                                                        setTotalDocument,
                                                                    )
                                                                }
                                                                className="btn btn-danger"
                                                            >
                                                                remove
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="full_width">
                                    <div className="form_section_heading">
                                        <h4>Guardians</h4>
                                    </div>
                                    <div className="multi_inputs">
                                        <div className="pb-4 px-0">
                                            <button
                                                className="btn"
                                                onClick={() =>
                                                    setTotalParent([
                                                        ...totalParent,
                                                        1,
                                                    ])
                                                }
                                            >
                                                Add new
                                            </button>
                                        </div>
                                        {totalParent.map((i, index) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="multi_input_group"
                                                >
                                                    <div className="d-flex">
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Relation
                                                            </label>
                                                            <div className="form_elements">
                                                                <select
                                                                    name="relation"
                                                                    id=""
                                                                >
                                                                    <option value="father">
                                                                        father
                                                                    </option>
                                                                    <option value="mother">
                                                                        mother
                                                                    </option>
                                                                    <option value="husband">
                                                                        husband
                                                                    </option>
                                                                    <option value="brother">
                                                                        brother
                                                                    </option>
                                                                    <option value="sister">
                                                                        sister
                                                                    </option>
                                                                    <option value="uncle">
                                                                        uncle
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Is parent
                                                            </label>
                                                            <div className="form_elements">
                                                                <select
                                                                    name="is_parent"
                                                                    defaultValue="no"
                                                                    id=""
                                                                >
                                                                    <option value="0">
                                                                        no
                                                                    </option>
                                                                    <option value="1">
                                                                        yes
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                User parent id
                                                            </label>
                                                            <div className="form_elements">
                                                                <select
                                                                    name="user_parent_id"
                                                                    id=""
                                                                >
                                                                    <option value="parent1">
                                                                        parent1
                                                                    </option>
                                                                    <option value="parent2">
                                                                        parent2
                                                                    </option>
                                                                    <option value="parent3">
                                                                        parent3
                                                                    </option>
                                                                    <option value="parent4">
                                                                        parent4
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {totalParent.length > 1 && (
                                                        <div>
                                                            <button
                                                                onClick={() =>
                                                                    remove_from_state(
                                                                        index,
                                                                        totalParent,
                                                                        setTotalParent,
                                                                    )
                                                                }
                                                                className="btn btn-danger"
                                                            >
                                                                remove
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="full_width">
                                    <div className="form_section_heading">
                                        <h4>Contact Number</h4>
                                    </div>
                                    <div className="multi_inputs">
                                        <div className="pb-4 px-0">
                                            <button
                                                className="btn"
                                                onClick={() =>
                                                    setTotalContactNumber([
                                                        ...totalContactNumber,
                                                        1,
                                                    ])
                                                }
                                            >
                                                Add new
                                            </button>
                                        </div>
                                        {totalContactNumber.map((i, index) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="multi_input_group"
                                                >
                                                    <div className="d-flex">
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Contact number
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="text"
                                                                    placeholder="contact number"
                                                                    name="contact_number"
                                                                    id=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>Owner</label>
                                                            <div className="form_elements">
                                                                <select
                                                                    name="owner"
                                                                    id=""
                                                                >
                                                                    <option value="personal">
                                                                        personal
                                                                    </option>
                                                                    <option value="home">
                                                                        home
                                                                    </option>
                                                                    <option value="friend">
                                                                        friend
                                                                    </option>
                                                                    <option value="relative">
                                                                        relative
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {totalContactNumber.length >
                                                        1 && (
                                                        <div>
                                                            <button
                                                                onClick={() =>
                                                                    remove_from_state(
                                                                        index,
                                                                        totalContactNumber,
                                                                        setTotalContactNumber,
                                                                    )
                                                                }
                                                                className="btn btn-danger"
                                                            >
                                                                remove
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="full_width">
                                    <div className="form_section_heading">
                                        <h4>Language</h4>
                                    </div>
                                    <div className="multi_inputs">
                                        <div className="pb-4 px-0">
                                            <button
                                                className="btn"
                                                onClick={() =>
                                                    setTotalLanguage([
                                                        ...totalLanguage,
                                                        1,
                                                    ])
                                                }
                                            >
                                                Add new
                                            </button>
                                        </div>
                                        {totalLanguage.map((i, index) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="multi_input_group"
                                                >
                                                    <div className="d-flex">
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Language title
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="text"
                                                                    placeholder="language title"
                                                                    name="language_title"
                                                                    id=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Profeciency
                                                            </label>
                                                            <div className="form_elements">
                                                                <select
                                                                    name="profeciency"
                                                                    id=""
                                                                >
                                                                    <option value="fluent">
                                                                        fluent
                                                                    </option>
                                                                    <option value="native">
                                                                        native
                                                                    </option>
                                                                    <option value="mid">
                                                                        mid
                                                                    </option>
                                                                    <option value="low">
                                                                        low
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {totalLanguage.length >
                                                        1 && (
                                                        <div>
                                                            <button
                                                                onClick={() =>
                                                                    remove_from_state(
                                                                        index,
                                                                        totalLanguage,
                                                                        setTotalLanguage,
                                                                    )
                                                                }
                                                                className="btn btn-danger"
                                                            >
                                                                remove
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="full_width">
                                    <div className="form_section_heading">
                                        <h4>Skill</h4>
                                    </div>
                                    <div className="multi_inputs">
                                        <div className="pb-4 px-0">
                                            <button
                                                className="btn"
                                                onClick={() =>
                                                    setTotalSkill([
                                                        ...totalSkill,
                                                        1,
                                                    ])
                                                }
                                            >
                                                Add new
                                            </button>
                                        </div>
                                        {totalSkill.map((i, index) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="multi_input_group"
                                                >
                                                    <div className="d-flex">
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Skills title
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="text"
                                                                    placeholder="skills title"
                                                                    name="skills_title"
                                                                    id=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>Level</label>
                                                            <div className="form_elements">
                                                                <select
                                                                    name="level"
                                                                    id=""
                                                                >
                                                                    <option value="native">
                                                                        native
                                                                    </option>
                                                                    <option value="mid">
                                                                        mid
                                                                    </option>
                                                                    <option value="low">
                                                                        low
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {totalSkill.length > 1 && (
                                                        <div>
                                                            <button
                                                                onClick={() =>
                                                                    remove_from_state(
                                                                        index,
                                                                        totalSkill,
                                                                        setTotalSkill,
                                                                    )
                                                                }
                                                                className="btn btn-danger"
                                                            >
                                                                remove
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="full_width">
                                    <div className="form_section_heading">
                                        <h4>Educational Background</h4>
                                    </div>
                                    <div className="multi_inputs">
                                        <div className="pb-4 px-0">
                                            <button
                                                className="btn"
                                                onClick={() =>
                                                    setTotalEducationalBackground(
                                                        [
                                                            ...totalEducationalBackground,
                                                            1,
                                                        ],
                                                    )
                                                }
                                            >
                                                Add new
                                            </button>
                                        </div>
                                        {totalEducationalBackground.map(
                                            (i, index) => {
                                                return (
                                                    <div
                                                        key={i}
                                                        className="multi_input_group"
                                                    >
                                                        <div className="d-flex">
                                                            <div className="form-group form-vertical">
                                                                <label>
                                                                    Previous
                                                                    institute
                                                                </label>
                                                                <div className="form_elements">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="previous institute"
                                                                        name="previous_institute"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-vertical">
                                                                <label>
                                                                    Year of
                                                                    living
                                                                </label>
                                                                <div className="form_elements">
                                                                    <input
                                                                        type="date"
                                                                        name="year_of_living"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-vertical">
                                                                <label>
                                                                    Result
                                                                </label>
                                                                <div className="form_elements">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="result"
                                                                        name="result"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-vertical">
                                                                <label>
                                                                    Transcript
                                                                    certificate
                                                                </label>
                                                                <div className="form_elements">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="transfer certificate"
                                                                        name="transfer_certificate"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {totalEducationalBackground.length >
                                                            1 && (
                                                            <div>
                                                                <button
                                                                    onClick={() =>
                                                                        remove_from_state(
                                                                            index,
                                                                            totalEducationalBackground,
                                                                            setTotalEducationalBackground,
                                                                        )
                                                                    }
                                                                    className="btn btn-danger"
                                                                >
                                                                    remove
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            },
                                        )}
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
