import React, { useState } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { useAppDispatch } from '../../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
export interface Props {}

const Create: React.FC<Props> = (props: Props) => {
    const [totalSubject, setTotalSubject] = useState([1]);

    const dispatch = useAppDispatch();

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
                                        <h4>Class Subjects</h4>
                                    </div>
                                    <div className="multi_inputs">
                                        <div className="pb-4 px-0">
                                            <button
                                                className="btn"
                                                onClick={() =>
                                                    setTotalSubject([
                                                        ...totalSubject,
                                                        1,
                                                    ])
                                                }
                                            >
                                                Add new
                                            </button>
                                        </div>
                                        {totalSubject.map((i, index) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="multi_input_group"
                                                >
                                                    <div className="d-flex">
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Branch id
                                                            </label>
                                                            <div className="form_elements">
                                                                <select
                                                                    name="branch_id"
                                                                    id=""
                                                                >
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Branch class id
                                                            </label>
                                                            <div className="form_elements">
                                                                <select
                                                                    name="branch_class"
                                                                    id=""
                                                                >
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Branch class
                                                                section id
                                                            </label>
                                                            <div className="form_elements">
                                                                <select
                                                                    name="branch_class_section_id"
                                                                    id=""
                                                                >
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
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
                                                                >
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
                                                                    <option value="demo1">
                                                                        demo1
                                                                    </option>
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
                                                            <label>
                                                                Description
                                                            </label>
                                                            <div className="form_elements">
                                                                <textarea
                                                                    name="description"
                                                                    id=""
                                                                    placeholder="description"
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="form-group form-vertical">
                                                            <label>
                                                                Credit
                                                            </label>
                                                            <div className="form_elements">
                                                                <input
                                                                    type="text"
                                                                    placeholder="address"
                                                                    name="address"
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
                                                    {totalSubject.length >
                                                        1 && (
                                                        <div>
                                                            <button
                                                                onClick={() =>
                                                                    remove_from_state(
                                                                        index,
                                                                        totalSubject,
                                                                        setTotalSubject,
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
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Create;
