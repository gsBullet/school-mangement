import React from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { useAppDispatch } from '../../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
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
                            className="form_600 mx-auto pt-3"
                        >
                            {/* <div className="form_section_heading">
                                <h2 className=""> Major Information</h2>
                            </div> */}
                            <div className="">
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
                                    <label>Code</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="code"
                                            name="code"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Capacity</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="capacity"
                                            name="capacity"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Fee</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            placeholder="fee"
                                            name="fee"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Prerequisities</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="prerequisities"
                                            name="prerequisities"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Student instructions</label>
                                    <div className="form_elements">
                                        <textarea
                                            name="student_instructions"
                                            id=""
                                            placeholder="student instructions"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Parent instructions</label>
                                    <div className="form_elements">
                                        <textarea
                                            name="parent_instructions"
                                            id=""
                                            placeholder="parent instructions"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Policies</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="policies"
                                            name="policies"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Rules</label>
                                    <div className="form_elements">
                                        <textarea
                                            placeholder="rules"
                                            name="rules"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Waiver rules</label>
                                    <div className="form_elements">
                                        <textarea
                                            placeholder="waiver rules"
                                            name="waiver_rules"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Discount rules</label>
                                    <div className="form_elements">
                                        <textarea
                                            placeholder="discount rules"
                                            name="discount_rules"
                                        />
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
