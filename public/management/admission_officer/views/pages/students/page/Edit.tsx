import React, { useState, useEffect } from 'react';
import setup from '../config/setup';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../store';
import { initialState } from '../config/store/inital_state';
import { initialState as addNewState } from '../../add_new/config/store/inital_state';
import { update } from '../config/store/async_actions/update';
import { Link, useParams } from 'react-router-dom';
import storeSlice from '../config/store';
import moment from 'moment/moment';
import { full_details } from '../config/store/async_actions/full_details';
import { anyObject } from '../../../../common_types/object';
import EducationalBackgound from './components/EducationalBackgound';
import Guardians from './components/Guardians';
import ContactNumber from './components/ContactNumber';
import Languages from './components/Languages';
import Skill from './components/Skill';
import Documents from './components/Document';

import { classes } from '../../add_new/config/store/async_actions/classes';
import { branches } from '../../add_new/config/store/async_actions/branches';
import { sections } from '../../add_new/config/store/async_actions/sections';
import { shifts } from '../../add_new/config/store/async_actions/shifts';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const dispatch = useAppDispatch();
    // const [totalDocument, setTotalDocument] = useState([1]);
    const [totalContactNumber, setTotalContactNumber] = useState([1]);
    const [totalLanguage, setTotalLanguage] = useState<anyObject[]>([]);
    const [totalSkill, setTotalSkill] = useState<anyObject[]>([]);
    const [educationalBackground, setEducationalBackground] = useState<
        anyObject[]
    >([]);
    const [totalGuardians, setTotalGuardians] = useState<anyObject[]>([]);
    const [totalNumbers, setTotalNumber] = useState<anyObject[]>([]);
    const [totalDocuments, setTotalDocument] = useState<anyObject[]>([]);
    // const [totalParent, setTotalParent] = useState<anyObject[]>([]);
    // let date22 = moment().format('YYYY-DD-MM');

    async function initdependancy() {
        // await dispatch(storeSlice.actions.set_item({}));
        await dispatch(shifts({}) as any);
        await dispatch(shifts({}) as any);
        await dispatch(branches({}) as any);
        await dispatch(classes({}) as any);
        await dispatch(sections({}) as any);
    }

    async function handle_submit(e) {
        e.preventDefault();
        console.log('this is clikck');

        let formData = new FormData(e.target);
        formData.append(
            'updated_background_data',
            JSON.stringify(educationalBackground),
        );
        formData.append(
            'updated_guardian_data',
            JSON.stringify(totalGuardians),
        );
        formData.append(
            'updated_contact_number_data',
            JSON.stringify(totalNumbers),
        );
        formData.append(
            'updated_document_data',
            JSON.stringify(totalDocuments),
        );
        formData.append('updated_language_data', JSON.stringify(totalLanguage));
        let response = await dispatch(update(formData) as any);
        if (!Object.prototype.hasOwnProperty.call(response, 'error')) {
            // e.target.reset();
        }
    }
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );
    const add_new_state: typeof addNewState = useSelector(
        (state: RootState) => state['student_add_new'],
    );

    useEffect(() => {
        initdependancy();
    }, []);
    useEffect(() => {
        console.log('frontend state', add_new_state);
    }, [add_new_state]);

    const params = useParams();
    console.log('id', params.id);

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(full_details({ id: params.id }) as any);
        console.log('state', state);
    }, []);

    // console.log('moment', moment().format('YYYY-DD-MM'));

    // for admission date
    const admissionDate = state.item?.student_info?.admission_date;
    const formattedAdmissionDate = admissionDate
        ? moment(admissionDate).format('YYYY-MM-DD')
        : moment().format('YYYY-MM-DD');

    // for date of birth
    const student_date = state.item?.student_info?.date_of_birth;
    const formattedStudentDate = student_date
        ? moment(student_date).format('YYYY-MM-DD')
        : moment().format('YYYY-MM-DD');

    // // for date of birth
    const studentAson_date = state.item?.student_info?.as_on_date;
    const formattedStudentAsOnDate = studentAson_date
        ? moment(studentAson_date).format('YYYY-MM-DD')
        : moment().format('YYYY-MM-DD');

    // for date of birth
    const studentExpire_date = state.item?.student_info?.student_expire_date;
    const formattedStudentExpireDate = studentExpire_date
        ? moment(studentExpire_date).format('YYYY-MM-DD')
        : moment().format('YYYY-MM-DD');

    return (
        <div className="admin_dashboard">
            {Object.keys(state.item)?.length && (
                <div className="content_body">
                    <form
                        onSubmit={(e) => handle_submit(e)}
                        className="form_6002 mx-auto pt-3"
                    >
                        <div className="student_form">
                            <input
                                type="hidden"
                                name="id"
                                defaultValue={params.id}
                            />
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
                                                defaultValue={state.item.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Gender</label>
                                        <div className="form_elements">
                                            <select
                                                name="gender"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.gender
                                                }
                                                id=""
                                            >
                                                <option value=""></option>
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
                                                defaultValue={state.item.email}
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
                                                defaultValue={
                                                    state.item.phone_number
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Whatsapp</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="Whatsapp number"
                                                name="whatsapp_number"
                                                defaultValue={
                                                    state.item.whatsapp_number
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Image</label>
                                        <div className="form_elements">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                placeholder="image"
                                                name="image"
                                            />
                                            <img
                                                src={state.item.image}
                                                style={{ width: '100px' }}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Status</label>
                                        <div className="form_elements">
                                            <select
                                                name="status"
                                                defaultValue={state.item.status}
                                                id=""
                                            >
                                                <option value=""></option>
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
                                    <h2 className="">Admission Information</h2>
                                </div>
                                <div className="d-flex">
                                    <div className="form-group form-vertical">
                                        <label>Branch</label>
                                        <div className="form_elements">
                                            <select
                                                name="branch_id"
                                                // defaultValue={
                                                //     state.item.student_info
                                                //         ?.branch_id
                                                // }
                                                id=""
                                            >
                                                {add_new_state?.branches
                                                    ?.length &&
                                                    add_new_state.branches?.map(
                                                        (i: {
                                                            [key: string]: any;
                                                        }) => {
                                                            return (
                                                                <option
                                                                    value={i.id}
                                                                >
                                                                    {i.name}
                                                                </option>
                                                            );
                                                        },
                                                    )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Addmission no</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="addmission no"
                                                name="admission_no"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.addmission_no
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Roll no</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="roll no"
                                                name="role_no"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.role_no
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Student Id</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="student id"
                                                name="student_id"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.student_id
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Addmission date</label>
                                        <div className="form_elements">
                                            <input
                                                type="date"
                                                defaultValue={
                                                    formattedAdmissionDate
                                                }
                                                name="admission_date"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Class</label>
                                        <div className="form_elements">
                                            <select
                                                name="class"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.s_class
                                                }
                                                id=""
                                            >
                                                {add_new_state?.classes
                                                    ?.length &&
                                                    add_new_state.classes?.map(
                                                        (i: {
                                                            [key: string]: any;
                                                        }) => {
                                                            return (
                                                                <option
                                                                    value={i.id}
                                                                >
                                                                    {i.name}
                                                                </option>
                                                            );
                                                        },
                                                    )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Shift</label>
                                        <div className="form_elements">
                                            <select
                                                name="shift"
                                                // defaultValue={
                                                //     state.item.student_info
                                                //         ?.shift
                                                // }
                                                id=""
                                            >
                                                {add_new_state.shifts?.length &&
                                                    add_new_state.shifts?.map(
                                                        (i: {
                                                            [key: string]: any;
                                                        }) => {
                                                            return (
                                                                <option
                                                                    value={i.id}
                                                                >
                                                                    {i.title}
                                                                </option>
                                                            );
                                                        },
                                                    )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Section</label>
                                        <div className="form_elements">
                                            <select
                                                name="section"
                                                // defaultValue={
                                                //     state.item.student_info
                                                //         ?.section
                                                // }
                                                id=""
                                            >
                                                {add_new_state.sections
                                                    ?.length &&
                                                    add_new_state.sections?.map(
                                                        (i: {
                                                            [key: string]: any;
                                                        }) => {
                                                            return (
                                                                <option
                                                                    value={i.id}
                                                                >
                                                                    {i.title}
                                                                </option>
                                                            );
                                                        },
                                                    )}
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.present_address
                                                }
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.permanent_address
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Date of birth</label>
                                        <div className="form_elements">
                                            <input
                                                type="date"
                                                name="date_of_birth"
                                                defaultValue={
                                                    formattedStudentDate
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Religion</label>
                                        <div className="form_elements">
                                            <select
                                                name="religion"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.religion
                                                }
                                                id=""
                                            >
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.nationality
                                                }
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.division
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>City</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="City"
                                                name="city"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.city
                                                }
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.post_code
                                                }
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.country
                                                }
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.medical_condition
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Current medcation</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="current medcation"
                                                name="current_medications"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.current_medications
                                                }
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.telegram_name
                                                }
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.telegram_id
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Blood group</label>
                                        <div className="form_elements">
                                            <select
                                                name="blood_group"
                                                defaultValue={
                                                    state.item.student_info
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
                                                <option value="O+">O+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Student expire date</label>
                                        <div className="form_elements">
                                            <input
                                                type="date"
                                                name="student_expire_date"
                                                defaultValue={
                                                    formattedStudentExpireDate
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Height</label>
                                        <div className="form_elements">
                                            <input
                                                type="number"
                                                placeholder="height"
                                                name="height"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.height
                                                }
                                                step={'any'}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Weight</label>
                                        <div className="form_elements">
                                            <input
                                                type="number"
                                                placeholder="weight"
                                                name="weight"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.weight
                                                }
                                                step={'any'}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>As on date</label>
                                        <div className="form_elements">
                                            <input
                                                type="date"
                                                name="as_on_date"
                                                defaultValue={
                                                    formattedStudentAsOnDate
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Family information</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="family information"
                                                name="family_information"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.family_information
                                                }
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.shibling_information
                                                }
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
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.living_house_type
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Student house type</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="Student house type"
                                                name="student_house_type"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.student_house
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Birth certificate</label>
                                        <div className="form_elements">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="birth_certificate"
                                            />
                                            <img
                                                src={
                                                    state.item.student_info
                                                        ?.birth_certificate
                                                }
                                                style={{ width: '100px' }}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>NID</label>
                                        <div className="form_elements">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                name="national_id"
                                            />
                                            <img
                                                src={
                                                    state.item.student_info
                                                        ?.national_id
                                                }
                                                style={{ width: '100px' }}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Cast</label>
                                        <div className="form_elements">
                                            <select
                                                name="cast"
                                                defaultValue={
                                                    state.item.student_info
                                                        ?.cast
                                                }
                                                id=""
                                            >
                                                <option value="Khan">
                                                    Khan
                                                </option>
                                                <option value="chowdhuri">
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

                            <Documents
                                setTotalDocument={setTotalDocument}
                            ></Documents>

                            <Guardians
                                setTotalGuardians={setTotalGuardians}
                            ></Guardians>
                            <EducationalBackgound
                                setEducationalBackground={
                                    setEducationalBackground
                                }
                            ></EducationalBackgound>
                            <ContactNumber
                                setTotalNumber={setTotalNumber}
                            ></ContactNumber>
                            <Languages
                                setTotalLanguage={setTotalLanguage}
                            ></Languages>
                            <Skill setTotalSkill={setTotalSkill}></Skill>
                        </div>
                        <div className="form-group student_submit form-horizontal">
                            <label></label>
                            <div className="form_elements">
                                <button className="btn btn-sm  btn-outline-info">
                                    submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Index;
