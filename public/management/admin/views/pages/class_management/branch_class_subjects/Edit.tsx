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
import { classes } from './config/store/async_actions/classes';
import { sections } from './config/store/async_actions/sections';
import { teachers } from './config/store/async_actions/teachers';
import { rooms } from './config/store/async_actions/rooms';
import moment from 'moment/moment';
export interface Props {}

const Edit: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();

    // useEffect(() => {
    //     dispatch(storeSlice.actions.set_item({}));
    // }, []);

    async function initdependancy() {
        await dispatch(storeSlice.actions.set_item({}));
        dispatch(details({ id: params.id }) as any);
        await dispatch(classes({}) as any);
        await dispatch(classes({}) as any);
        await dispatch(classes({}) as any);
        await dispatch(sections({}) as any);
        await dispatch(teachers({}) as any);
        await dispatch(rooms({}) as any);
    }

    useEffect(() => {
        initdependancy();
    }, []);
    if (state) {
        console.log(state);
    }
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
                                className="form_6002 mx-auto pt-3"
                            >
                                <div className="student_form">
                                    <div className="full_width">
                                        <div className="form_section_heading">
                                            <h4>Class Subjects</h4>
                                        </div>

                                        <input
                                            type="hidden"
                                            name="id"
                                            defaultValue={state.item.id}
                                        />
                                        <div className="multi_inputs">
                                            <div className="multi_input_group">
                                                <div className="d-flex">
                                                    <div className="form-group form-vertical">
                                                        <label>
                                                            Branch class id
                                                        </label>
                                                        <div className="form_elements">
                                                            <select
                                                                name="branch_class_id"
                                                                id=""
                                                                defaultValue={
                                                                    state.item
                                                                        .branch_class_id
                                                                }
                                                            >
                                                                {state?.classes
                                                                    ?.length &&
                                                                    state.classes?.map(
                                                                        (i: {
                                                                            [
                                                                                key: string
                                                                            ]: any;
                                                                        }) => {
                                                                            return (
                                                                                <option
                                                                                    value={
                                                                                        i.id
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        i.name
                                                                                    }
                                                                                </option>
                                                                            );
                                                                        },
                                                                    )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>
                                                            Branch class section
                                                            id
                                                        </label>
                                                        <div className="form_elements">
                                                            <select
                                                                name="branch_class_section_id"
                                                                id=""
                                                                defaultValue={
                                                                    state.item
                                                                        .branch_class_section_id
                                                                }
                                                            >
                                                                {state?.sections
                                                                    ?.length &&
                                                                    state.sections?.map(
                                                                        (i: {
                                                                            [
                                                                                key: string
                                                                            ]: any;
                                                                        }) => {
                                                                            return (
                                                                                <option
                                                                                    value={
                                                                                        i.id
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        i.title
                                                                                    }
                                                                                </option>
                                                                            );
                                                                        },
                                                                    )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>
                                                            Teacher id
                                                        </label>
                                                        <div className="form_elements">
                                                            <select
                                                                name="user_teacher_id"
                                                                id=""
                                                                defaultValue={
                                                                    state.item
                                                                        .routine_day
                                                                        ?.branch_teacher_id
                                                                }
                                                            >
                                                                {state?.teachers
                                                                    ?.length &&
                                                                    state.teachers?.map(
                                                                        (i: {
                                                                            [
                                                                                key: string
                                                                            ]: any;
                                                                        }) => {
                                                                            return (
                                                                                <option
                                                                                    value={
                                                                                        i.id
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        i
                                                                                            .user_teacher
                                                                                            ?.name
                                                                                    }
                                                                                </option>
                                                                            );
                                                                        },
                                                                    )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>Room id</label>
                                                        <div className="form_elements">
                                                            <select
                                                                name="room_id"
                                                                id=""
                                                                defaultValue={
                                                                    state.item
                                                                        .subject_teacher
                                                                        ?.branch_class_room_id
                                                                }
                                                            >
                                                                {state?.rooms
                                                                    ?.length &&
                                                                    state.rooms?.map(
                                                                        (i: {
                                                                            [
                                                                                key: string
                                                                            ]: any;
                                                                        }) => {
                                                                            return (
                                                                                <option
                                                                                    value={
                                                                                        i.id
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        i.room_name
                                                                                    }
                                                                                </option>
                                                                            );
                                                                        },
                                                                    )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>Name</label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="text"
                                                                placeholder="name"
                                                                name="name"
                                                                defaultValue={
                                                                    state.item
                                                                        .name
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>Code</label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="text"
                                                                placeholder="code"
                                                                name="code"
                                                                defaultValue={
                                                                    state.item
                                                                        .code
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>Level</label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="text"
                                                                placeholder="level"
                                                                name="level"
                                                                defaultValue={
                                                                    state.item
                                                                        .level
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>
                                                            Description
                                                        </label>
                                                        <div className="form_elements">
                                                            <textarea
                                                                name="description"
                                                                id=""
                                                                placeholder="description"
                                                                defaultValue={
                                                                    state.item
                                                                        .description
                                                                }
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>Credit</label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="text"
                                                                placeholder="credit"
                                                                name="credit"
                                                                defaultValue={
                                                                    state.item
                                                                        .credit
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>
                                                            Additional Info
                                                        </label>
                                                        <div className="form_elements">
                                                            <textarea
                                                                placeholder="additional info"
                                                                name="additional_info"
                                                                defaultValue={
                                                                    state.item
                                                                        .additional_info
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="full_width">
                                        <div className="form_section_heading">
                                            <h4>Class Routine Time</h4>
                                        </div>
                                        <div className="multi_inputs">
                                            <div className="multi_input_group">
                                                <div className="d-flex">
                                                    <div className="form-group form-vertical">
                                                        <label>Day</label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="date"
                                                                placeholder="date"
                                                                name="day"
                                                                defaultValue={moment(
                                                                    state.item
                                                                        .routine_day
                                                                        ?.day,
                                                                ).format(
                                                                    'YYYY-MM-DD',
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>
                                                            {' '}
                                                            Start Time{' '}
                                                        </label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="time"
                                                                placeholder="start time"
                                                                name="start_time"
                                                                defaultValue={moment(
                                                                    state.item
                                                                        .routine_day
                                                                        ?.start_time,
                                                                    'HH:mm:ss',
                                                                ).format(
                                                                    'HH:mm',
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>End Time</label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="time"
                                                                placeholder="end time"
                                                                name="end_time"
                                                                defaultValue={moment(
                                                                    state.item
                                                                        .routine_day
                                                                        ?.end_time,
                                                                    'HH:mm:ss',
                                                                ).format(
                                                                    'HH:mm',
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="full_width">
                                        <div className="form_section_heading">
                                            <h4>Teacher</h4>
                                        </div>
                                        <div className="multi_inputs">
                                            <div
                                                // key={i}
                                                className="multi_input_group"
                                            >
                                                <div className="d-flex">
                                                    <div className="form-group form-vertical">
                                                        <label>
                                                            Description
                                                        </label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="text"
                                                                placeholder="teacher description"
                                                                name="teacher_description"
                                                                defaultValue={
                                                                    state.item
                                                                        .subject_teacher
                                                                        ?.description
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label></label>
                                    <div className="form_elements">
                                        <button
                                            // onClick={handle_submit}
                                            className="btn btn_1"
                                        >
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
