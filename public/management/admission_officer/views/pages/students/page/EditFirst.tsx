import React, { useState, useEffect } from 'react';
import setup from '../config/setup';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../store';
import { initialState } from '../config/store/inital_state';
import { update } from '../config/store/async_actions/update';
import { Link, useParams } from 'react-router-dom';
// import { details } from '../config/store/async_actions/details';
import storeSlice from '../config/store';
import moment from 'moment/moment';
import { full_details } from '../config/store/async_actions/full_details';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const dispatch = useAppDispatch();
    const [totalDocument, setTotalDocument] = useState([1]);
    const [totalParent, setTotalParent] = useState([1]);
    const [totalContactNumber, setTotalContactNumber] = useState([1]);
    const [totalLanguage, setTotalLanguage] = useState([1]);
    const [totalSkill, setTotalSkill] = useState([1]);
    const [totalEducationalBackground, setTotalEducationalBackground] =
        useState([1]);
    let date22 = moment().format('YYYY-MM-DD');
    console.log('moment date', date22);

    async function handle_submit(e) {
        e.preventDefault();
        console.log('this is clikck');

        let response = await dispatch(update(new FormData(e.target)) as any);
        if (!Object.prototype.hasOwnProperty.call(response, 'error')) {
            // e.target.reset();
        }
    }
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const params = useParams();
    console.log('id', params.id);

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(full_details({ id: params.id }) as any);
        console.log('state', state);
    }, []);

    useEffect(() => {
        console.log('state data', state.item);
    }, [state]);

    function remove_from_state(index, state, setState) {
        let t = [...state];
        t.splice(index, 1);
        setState(t);
    }
    // console.log('moment', moment().format('YYYY-MM-DD'));

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

    return (
        <div className="admin_dashboard">
            {Object.keys(state.item).length && (
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
                                                        .gender
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
                                    <div className="form-group form-vertical">
                                        <label>Parent</label>
                                        <div className="form_elements">
                                            <select
                                                name="parent_id"
                                                defaultValue={
                                                    state.item.parent_id
                                                }
                                                id=""
                                            >
                                                <option value=""></option>
                                                <option value="1">
                                                    parent1
                                                </option>
                                                <option value="2">
                                                    parent2
                                                </option>
                                                <option value="3">
                                                    parent3
                                                </option>
                                            </select>
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
                                                defaultValue={
                                                    state.item.student_info
                                                        .branch_id
                                                }
                                                id=""
                                            >
                                                <option value="1">
                                                    Uttora
                                                </option>
                                                <option value="2">
                                                    Banani
                                                </option>
                                                <option value="3">
                                                    Gulshan
                                                </option>
                                                <option value="4">Demra</option>
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
                                                        .addmission_no
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
                                                        .role_no
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Addmission date</label>
                                        <div className="form_elements">
                                            <input
                                                type="date"
                                                // defaultValue={moment(
                                                //     state.item.student_info
                                                //         .admission_date,
                                                // ).format('YYYY-MM-DD')}
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
                                                        .s_class
                                                }
                                                id=""
                                            >
                                                <option value=""></option>
                                                <option value="Six">Six</option>
                                                <option value="Seven">
                                                    Seven
                                                </option>
                                                <option value="Eight">
                                                    Eight
                                                </option>
                                                <option value="Nine">
                                                    Nine
                                                </option>
                                                <option value="Ten">Ten</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Shift</label>
                                        <div className="form_elements">
                                            <select
                                                name="shift"
                                                defaultValue={
                                                    state.item.student_info
                                                        .shift
                                                }
                                                id=""
                                            >
                                                <option value="boy morning">
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
                                            <select
                                                name="section"
                                                defaultValue={
                                                    state.item.student_info
                                                        .section
                                                }
                                                id=""
                                            >
                                                <option value="c">c</option>
                                                <option value="A section">
                                                    A
                                                </option>
                                                <option value="B section">
                                                    B
                                                </option>
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
                                                        .present_address
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
                                                        .permanent_address
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
                                                // defaultValue={moment(
                                                //     state.item.student_info
                                                //         .date_of_birth,
                                                // ).format('YYYY-MM-DD')}
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
                                                        .religion
                                                }
                                                id=""
                                            >
                                                {/* <option value="vv">vv</option> */}
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
                                                        .nationality
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
                                                        .division
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
                                                    state.item.student_info.city
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
                                                        .post_code
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
                                                        .country
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
                                                        .medical_condition
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
                                                        .current_medications
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
                                                        .telegram_name
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
                                                        .telegram_id
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
                                                        .blood_group
                                                }
                                                id=""
                                            >
                                                {/* <option value="c">c</option> */}
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
                                                // defaultValue={'2024-10-10'}
                                                name="student_expire_date"
                                                defaultValue={moment(
                                                    state.item.student_info
                                                        .student_expire_date,
                                                ).format('YYYY-MM-DD')}
                                                // defaultValue={
                                                //     formattedStudentExpireDate
                                                // }
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
                                                        .height
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
                                                        .weight
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
                                                // defaultValue={'2024-10-10'}
                                                name="as_on_date"
                                                // defaultValue={moment(
                                                //     state.item.student_info
                                                //         .as_on_date,
                                                // ).format('YYYY-MM-DD')}
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
                                                        .family_information
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
                                                        .shibling_information
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
                                                        .living_house_type
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
                                                        .student_house
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
                                                        .birth_certificate
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
                                                        .national_id
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
                                                    state.item.student_info.cast
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
                            <div className="full_width">
                                <div className="form_section_heading">
                                    <h4>Document Title</h4>
                                </div>
                                <div className="multi_inputs">
                                    <input
                                        type="hidden"
                                        name="total_docement_count_file"
                                        value={
                                            state.item.document_titles.length
                                        }
                                    />
                                    {state.item.document_titles.map(
                                        (i, index) => {
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
                                                                    name={`document_title${index}`}
                                                                    defaultValue={
                                                                        i.title
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                            <div className="full_width">
                                <div className="form_section_heading">
                                    <h4>Document file</h4>
                                </div>
                                <div className="multi_inputs">
                                    <input
                                        type="hidden"
                                        name="total_docement_count"
                                        value={
                                            state.item.document_values.length
                                        }
                                    />
                                    {state.item.document_values.map(
                                        (i, index) => {
                                            const defaultIssueDate =
                                                i.issue_date
                                                    ? moment(
                                                        i.issue_date,
                                                    ).format('YYYY-MM-DD')
                                                    : moment().format(
                                                        'YYYY-MM-DD',
                                                    );
                                            const defaultExpireDate =
                                                i.expire_date
                                                    ? moment(
                                                          i.expire_date,
                                                      ).format('YYYY-MM-DD')
                                                    : moment().format(
                                                          'YYYY-MM-DD',
                                                      );
                                            return (
                                                <div
                                                    key={i}
                                                    className="multi_input_group"
                                                >
                                                    <div className="d-flex">
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Document file
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    placeholder="document file"
                                                                    name={`document_file${index}`}
                                                                    // defaultValue={
                                                                    //     i.file
                                                                    // }
                                                                />
                                                                <img
                                                                    src={i.file}
                                                                    style={{
                                                                        width: '100px',
                                                                        height: '50px',
                                                                    }}
                                                                    alt=""
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
                                                                    defaultValue={
                                                                        defaultIssueDate
                                                                    }
                                                                    // defaultValue={moment(
                                                                    //     i.issue_date,
                                                                    // ).format(
                                                                    //     'YYYY-MM-DD',
                                                                    // )}
                                                                    name={`issue_date${index}`}
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
                                                                    defaultValue={
                                                                        defaultExpireDate
                                                                    }
                                                                    // defaultValue={
                                                                    //     i.expire_date ?
                                                                    //     (moment(
                                                                    //         i.expire_date,
                                                                    //     ).format(
                                                                    //         'YYYY-MM-DD',
                                                                    //     ) |
                                                                    //         moment().format(
                                                                    //             'YYYY-MM-DD',
                                                                    //         ))
                                                                    // }
                                                                    name={`expire_date${index}`}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                            <div className="full_width">
                                <div className="form_section_heading">
                                    <h4>Guardians</h4>
                                </div>
                                <div className="multi_inputs">
                                    <input
                                        type="hidden"
                                        name="totalParent_count"
                                        value={state.item.parents.length}
                                    />
                                    {state.item.parents.map((i, index) => {
                                        return (
                                            <div
                                                key={i}
                                                className="multi_input_group"
                                            >
                                                <div className="d-flex">
                                                    <div className="form-group form-vertical">
                                                        <label>Relation</label>
                                                        <div className="form_elements">
                                                            <select
                                                                name={`relation${index}`}
                                                                id=""
                                                                defaultValue={
                                                                    i.relation
                                                                }
                                                            >
                                                                <option value="gdfg">
                                                                    gdfg
                                                                </option>
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
                                                        <label>Is parent</label>
                                                        <div className="form_elements">
                                                            <select
                                                                name={`is_parent${index}`}
                                                                defaultValue={
                                                                    i.is_parent
                                                                }
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
                                                                name={`user_student_parent_id${index}`}
                                                                id=""
                                                                defaultValue={
                                                                    i.user_student_parent_id
                                                                }
                                                            >
                                                                <option value="1">
                                                                    parent1
                                                                </option>
                                                                <option value="2">
                                                                    parent2
                                                                </option>
                                                                <option value="3">
                                                                    parent3
                                                                </option>
                                                                <option value="4">
                                                                    parent4
                                                                </option>
                                                                <option value="6">
                                                                    parent6
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
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
                                    {/* <div className="pb-4 px-0">
                                        <span
                                            className="btn btn-sm  btn-outline-info"
                                            onClick={() =>
                                                setTotalContactNumber([
                                                    ...totalContactNumber,
                                                    1,
                                                ])
                                            }
                                        >
                                            Add new
                                        </span>
                                    </div> */}
                                    <input
                                        type="hidden"
                                        name="contact_number_count"
                                        value={
                                            state.item.student_numbers.length
                                        }
                                    />
                                    {state.item.student_numbers.map(
                                        (i, index) => {
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
                                                                    name={`contact_number${index}`}
                                                                    id=""
                                                                    defaultValue={
                                                                        i.contact_number
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>Owner</label>
                                                            <div className="form_elements">
                                                                <select
                                                                    name={`number_owner${index}`}
                                                                    id=""
                                                                    defaultValue={
                                                                        i.owner
                                                                    }
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
                                                            <span
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
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                            <div className="full_width">
                                <div className="form_section_heading">
                                    <h4>Language</h4>
                                </div>
                                <div className="multi_inputs">
                                    <div className="pb-4 px-0">
                                        {/* <span
                                            className="btn btn-sm  btn-outline-info"
                                            onClick={() =>
                                                setTotalLanguage([
                                                    ...totalLanguage,
                                                    1,
                                                ])
                                            }
                                        >
                                            Add new
                                        </span> */}
                                    </div>
                                    <input
                                        type="hidden"
                                        name="student_language_count"
                                        value={state.item.languages.length}
                                    />
                                    {state.item.languages.map((i, index) => {
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
                                                                name={`language_title${index}`}
                                                                id=""
                                                                defaultValue={
                                                                    i.language_title
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>
                                                            Profeciency
                                                        </label>
                                                        <div className="form_elements">
                                                            <select
                                                                name={`language_profeciency${index}`}
                                                                id=""
                                                                defaultValue={
                                                                    i.profeciency
                                                                }
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
                                                {/* {state.item.languages.length >
                                                    1 && (
                                                    <div>
                                                        <span
                                                            onClick={() =>
                                                                remove_from_state(
                                                                    index,
                                                                    state.item
                                                                        .languages,
                                                                    setTotalLanguage,
                                                                )
                                                            }
                                                            className="btn btn-danger"
                                                        >
                                                            remove
                                                        </span>
                                                    </div>
                                                )} */}
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
                                    {/* <div className="pb-4 px-0">
                                        <span
                                            className="btn btn-sm  btn-outline-info"
                                            onClick={() =>
                                                setTotalSkill([
                                                    ...totalSkill,
                                                    1,
                                                ])
                                            }
                                        >
                                            Add new
                                        </span>
                                    </div> */}
                                    <input
                                        type="hidden"
                                        name="student_skills_count"
                                        value={state.item.skills.length}
                                    />
                                    {state.item.skills.map((i, index) => {
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
                                                                name={`skills_title${index}`}
                                                                id=""
                                                                defaultValue={
                                                                    i.title
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>Level</label>
                                                        <div className="form_elements">
                                                            <select
                                                                name={`skills_level${index}`}
                                                                id=""
                                                                defaultValue={
                                                                    i.level
                                                                }
                                                            >
                                                                <option value="high">
                                                                    high
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
                                                        <span
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
                                                        </span>
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
                                    {/* <div className="pb-4 px-0">
                                        <span
                                            className="btn btn-sm  btn-outline-info"
                                            onClick={() =>
                                                setTotalEducationalBackground([
                                                    ...totalEducationalBackground,
                                                    1,
                                                ])
                                            }
                                        >
                                            Add new
                                        </span>
                                    </div> */}

                                    <input
                                        type="hidden"
                                        name="educational_background_count"
                                        value={
                                            state.item.educational_backgrounds
                                                .length
                                        }
                                    />
                                    {state.item.educational_backgrounds.map(
                                        (i, index) => {
                                            const defaultYearOfLeaving =
                                                i.year_of_leaving
                                                    ? moment(
                                                        i.year_of_leaving,
                                                    ).format('YYYY-MM-DD')
                                                    : moment().format(
                                                        'YYYY-MM-DD',
                                                    );
                                            return (
                                                <div
                                                    key={i}
                                                    className="multi_input_group"
                                                >
                                                    <div>{index + 1}</div>
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
                                                                    name={`educational_background_previous_institute_${index}`}
                                                                    defaultValue={
                                                                        i.previous_institute
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Year of leaving
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="date"
                                                                    defaultValue={
                                                                        defaultYearOfLeaving
                                                                    }
                                                                    name={`educational_background_year_of_leaving_${index}`}
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
                                                                    name={`educational_background_result_${index}`}
                                                                    defaultValue={
                                                                        i.result
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Transfer
                                                                certificate
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    placeholder="transfer cirtificate"
                                                                    name={`educational_background_transfer_cirtificate_${index}`}
                                                                />
                                                                <img
                                                                    src={
                                                                        i.transfer_cirtificate
                                                                    }
                                                                    style={{
                                                                        width: '100px',
                                                                        height: '50px',
                                                                    }}
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* {totalEducationalBackground.length >
                                                        1 && (
                                                        <div>
                                                            <span
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
                                                            </span>
                                                        </div>
                                                    )} */}
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
