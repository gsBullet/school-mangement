import React, { useEffect } from 'react';
// import Header from './components/management_data_page/Header';
// import Footer from './components/management_data_page/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import setup from '../config/setup.ts';
import { RootState, useAppDispatch } from '../../../../store';
import { details } from '../config/store/async_actions/details';
import { class_details } from '../config/store/async_actions/class_details.ts';
import { initialState } from '../config/store/inital_state';
import { Link, useParams } from 'react-router-dom';
import storeSlice from '../config/store';
import moment from 'moment/moment';
export interface Props {}

const Details: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();
    console.log('id', params.id);

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(details({ id: params.id }) as any);
        // dispatch(class_details({ id: params.id }) as any);
    }, []);

    if (state.item) {
        console.log('state item result', state.item);
    }

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Basic information</h3>
            <div className="content_body ">
                <div className="student_details">
                    <div>
                        <Link
                            to="/add-new"
                            className="btn btn-sm btn-outline-info mb-2"
                            type="submit"
                        >
                            Add New
                        </Link>
                    </div>
                    <div>
                        <img
                            src={state.item?.image}
                            style={{ width: '100px' }}
                            alt=""
                        />
                    </div>
                </div>
                {Object.keys(state.item) && (
                    <div className="single_student_details">
                        <div className="">
                            <h4>Basic information</h4>
                            <div className="basic_info mb-4">
                                <table className="table text-nowrap student_table">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {state.item?.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {state.item?.email}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Phone number</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {state.item?.phone_number}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="table text-nowrap student_table ml-2">
                                    <tbody>
                                        <tr>
                                            <td>Whatsapp number</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {state.item?.whatsapp_number}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.gender
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Stutas</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {state.item?.status}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h4>Admission information</h4>
                            <div className="basic_info mb-4 ">
                                <table className="table text-nowrap student_table">
                                    <tbody>
                                        <tr>
                                            <td>Branch</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                Uttora
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Student Id</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.student_id
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Roll no</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.role_no
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Addmission date</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {moment(
                                                    state.item?.student_info
                                                        ?.admission_date,
                                                ).format('YYYY-MM-DD')}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="table text-nowrap student_table ml-2">
                                    <tbody>
                                        <tr>
                                            <td>Class</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.class?.name
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shift</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.student_shift?.title
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Student Category</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.student_category
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Section</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.student_section?.title
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h4>Information</h4>
                            <div className="basic_info mb-4 ">
                                <table className="table text-nowrap student_table">
                                    <tbody>
                                        <tr>
                                            <td>Present Address</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.present_address
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Permanent Address</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.permanent_address
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Religion</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.religion
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {state.item?.student_info?.city}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Telegram Id</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.telegram_id
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Blood Group</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.blood_group
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Student Expire Date</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {moment(
                                                    state.item?.student_info
                                                        ?.student_expire_date,
                                                ).format('YYYY-MM-DD')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Height</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.height
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.weight
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>As on Date</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {moment(
                                                    state.item?.student_info
                                                        ?.as_on_date,
                                                ).format('YYYY-MM-DD')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Familly Information</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.family_information
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shibling Information</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.shibling_information
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Living House type</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.living_house_type
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="table text-nowrap student_table ml-2">
                                    <tbody>
                                        <tr>
                                            <td>Nationality</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.nationality
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Division</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.division
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ID No</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.student_id
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.present_address
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Post code</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.post_code
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.country
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Medical Condition</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.medical_condition
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Current Medication</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.current_medications
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Telegram Name</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.telegram_name
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Student House type</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {
                                                    state.item?.student_info
                                                        ?.student_house
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Birth Cirtificate</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {/* {
                                                    state.item?.student_info
                                                        ?.birth_certificate
                                                } */}
                                                <a
                                                    href={
                                                        state.item?.student_info
                                                            ?.birth_certificate
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Show cirtificate
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>National ID</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {/* {
                                                    state.item?.student_info
                                                        ?.birth_certificate
                                                } */}
                                                <a
                                                    href={
                                                        state.item?.student_info
                                                            ?.national_id
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Show NID
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Cast</td>
                                            <td>:</td>
                                            <td className="font-medium text-dark-medium">
                                                {state.item?.student_info?.cast}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h4>Document</h4>
                            {Object.keys(state.item)?.length &&
                                state.item?.document_titles &&
                                state.item?.document_titles.map(
                                    (i: { [key: string]: any }) => {
                                        return (
                                            <div className="basic_info mb-4 ">
                                                <table className="table text-nowrap student_table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Document Title
                                                            </td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {i.title}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Issue Date</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {moment(
                                                                    i
                                                                        .values_title
                                                                        ?.issue_date,
                                                                ).format(
                                                                    'YYYY-MM-DD',
                                                                )}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className="table text-nowrap student_table ml-2">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Document File
                                                            </td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                <a
                                                                    href={
                                                                        i
                                                                            .values_title
                                                                            ?.file
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Show File
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Expire date</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {moment(
                                                                    i
                                                                        .values_title
                                                                        ?.expire_date,
                                                                ).format(
                                                                    'YYYY-MM-DD',
                                                                )}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    },
                                )}
                        </div>
                        <div>
                            <h4>Contact Numbers</h4>
                            {Object.keys(state.item)?.length &&
                                state.item?.student_numbers &&
                                state.item?.student_numbers.map(
                                    (i: { [key: string]: any }) => {
                                        return (
                                            <div className="basic_info mb-4 ">
                                                <table className="table text-nowrap student_table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Contact Number
                                                            </td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {
                                                                    i.contact_number
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className="table text-nowrap student_table ml-2">
                                                    <tbody>
                                                        <tr>
                                                            <td>Owner</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {i.owner}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    },
                                )}
                        </div>
                        <div>
                            <h4>Skills</h4>
                            {Object.keys(state.item)?.length &&
                                state.item?.skills &&
                                state.item?.skills.map(
                                    (i: { [key: string]: any }) => {
                                        return (
                                            <div className="basic_info mb-4 ">
                                                <table className="table text-nowrap student_table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Skill Title</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {i.title}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className="table text-nowrap student_table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Level</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {i.level}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    },
                                )}
                        </div>
                        <div>
                            <h4>Languages</h4>
                            {Object.keys(state.item)?.length &&
                                state.item?.languages &&
                                state.item?.languages.map(
                                    (i: { [key: string]: any }) => {
                                        return (
                                            <div className="basic_info mb-4 ">
                                                <table className="table text-nowrap student_table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Language</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {
                                                                    i.language_title
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className="table text-nowrap student_table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Profeciency</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {i.profeciency}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    },
                                )}
                        </div>
                        <div>
                            <h4>Educational Background</h4>
                            {Object.keys(state.item)?.length &&
                                state.item?.educational_backgrounds &&
                                state.item?.educational_backgrounds.map(
                                    (i: { [key: string]: any }) => {
                                        return (
                                            <div className="basic_info mb-4 ">
                                                <table className="table text-nowrap student_table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Previous
                                                                Institute
                                                            </td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {
                                                                    i.previous_institute
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Year Of Leaving
                                                            </td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {moment(
                                                                    i.year_of_leaving,
                                                                ).format(
                                                                    'YYYY-MM-DD',
                                                                )}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className="table text-nowrap student_table ml-2">
                                                    <tbody>
                                                        <tr>
                                                            <td>Result</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {i.result}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Transfer
                                                                Cirtificate
                                                            </td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                <a
                                                                    href={
                                                                        i.transfer_cirtificate
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Show File
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    },
                                )}
                        </div>
                        <div>
                            <h4>Guardians</h4>
                            {Object.keys(state.item)?.length &&
                                state.item?.parents &&
                                state.item?.parents.map(
                                    (i: { [key: string]: any }) => {
                                        return (
                                            <div className="basic_info mb-4 ">
                                                <table className="table text-nowrap student_table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {
                                                                    i
                                                                        .parent_details
                                                                        ?.name
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {
                                                                    i
                                                                        .parent_details
                                                                        ?.email
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Relation</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {i.relation}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table className="table text-nowrap student_table ml-2">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Phone Number
                                                            </td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {
                                                                    i
                                                                        .parent_details
                                                                        ?.phone_number
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Status</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                {
                                                                    i
                                                                        .parent_details
                                                                        ?.status
                                                                }
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Picture</td>
                                                            <td>:</td>
                                                            <td className="font-medium text-dark-medium">
                                                                <a
                                                                    href={
                                                                        i
                                                                            .parent_details
                                                                            ?.image
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Show Image
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    },
                                )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;
