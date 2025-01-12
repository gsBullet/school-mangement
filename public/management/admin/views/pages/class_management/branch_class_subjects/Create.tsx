import React, { useEffect, useState } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
import { initialState } from './config/store/inital_state';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import storeSlice from './config/store';
import { classes } from './config/store/async_actions/classes';
import { sections } from './config/store/async_actions/sections';
import { teachers } from './config/store/async_actions/teachers';
import { rooms } from './config/store/async_actions/rooms';
export interface Props {}

const Create: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();

    async function handle_submit(e) {
        e.preventDefault();
        let response = await dispatch(store(new FormData(e.target)) as any);
        if (!Object.prototype.hasOwnProperty.call(response, 'error')) {
            e.target.reset();
        }
    }

    async function initdependancy() {
        await dispatch(storeSlice.actions.set_item({}));
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
    // let days = Array.from({ length: 7 });
    let days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
    ];

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
                                        <h4>Class Subjects</h4>
                                    </div>
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
                                                        Branch class section id
                                                    </label>
                                                    <div className="form_elements">
                                                        <select
                                                            name="branch_class_section_id"
                                                            id=""
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
                                                    <label>Teacher id</label>
                                                    <div className="form_elements">
                                                        <select
                                                            name="user_teacher_id"
                                                            id=""
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
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group form-vertical">
                                                    <label>Description</label>
                                                    <div className="form_elements">
                                                        <textarea
                                                            name="description"
                                                            id=""
                                                            placeholder="description"
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
                                            {days.map((i, index) => (
                                                <div className="d-flex">
                                                    <div className="form-group form-vertical">
                                                        <label>Day</label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="text"
                                                                readOnly
                                                                placeholder="date"
                                                                name="day"
                                                                defaultValue={i}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        {/* <label>Day No</label> */}
                                                        <div className="form_elements">
                                                            <input
                                                                type="hidden"
                                                                // readOnly
                                                                placeholder="date"
                                                                name="day_no"
                                                                defaultValue={
                                                                    index + 1
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>Time</label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="time"
                                                                placeholder="start time"
                                                                name="start_time"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-vertical">
                                                        <label>Time</label>
                                                        <div className="form_elements">
                                                            <input
                                                                type="time"
                                                                placeholder="end time"
                                                                name="end_time"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
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
                                                    <label>Description</label>
                                                    <div className="form_elements">
                                                        <input
                                                            type="text"
                                                            placeholder="teacher description"
                                                            name="teacher_description"
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
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Create;
