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
                                    <label>Branch</label>
                                    <div className="form_elements">
                                        <select name="branch_id" id="">
                                            <option value="gulshan">
                                                gulshan
                                            </option>
                                            <option value="mirpur">
                                                mirpur
                                            </option>
                                            <option value="uttara">
                                                uttara
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Branch class</label>
                                    <div className="form_elements">
                                        <select name="branch_class_id" id="">
                                            <option value="Six">Six</option>
                                            <option value="Seven">Seven</option>
                                            <option value="Eight">Eight</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Branch Subject</label>
                                    <div className="form_elements">
                                        <select name="branch_subject_id" id="">
                                            <option value="Bangla">
                                                Bangla
                                            </option>
                                            <option value="English">
                                                English
                                            </option>
                                            <option value="Arabic">
                                                Arabic
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Branch Class Room</label>
                                    <div className="form_elements">
                                        <select
                                            name="branch_class_room_id"
                                            id=""
                                        >
                                            <option value="A101">A101</option>
                                            <option value="B101">demo1</option>
                                            <option value="C101">demo1</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Day</label>
                                    <div className="form_elements">
                                        <label htmlFor="">
                                            <input
                                                type="checkbox"
                                                name="day"
                                                id=""
                                            />
                                            <span>Saturday</span>
                                        </label>
                                        <label htmlFor="">
                                            <input
                                                type="checkbox"
                                                name="day"
                                                id=""
                                            />
                                            <span>Sunday</span>
                                        </label>
                                        <label htmlFor="">
                                            <input
                                                type="checkbox"
                                                name="day"
                                                id=""
                                            />
                                            <span>Monday</span>
                                        </label>
                                        <label htmlFor="">
                                            <input
                                                type="checkbox"
                                                name="day"
                                                id=""
                                            />
                                            <span>Tuesday</span>
                                        </label>
                                        <label htmlFor="">
                                            <input
                                                type="checkbox"
                                                name="day"
                                                id=""
                                            />
                                            <span>Wednesday</span>
                                        </label>
                                        <label htmlFor="">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                            <span>thursday</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Start Time</label>
                                    <div className="form_elements">
                                        <input type="time" name="start_time" />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>End Time</label>
                                    <div className="form_elements">
                                        <input type="time" name="end_time" />
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
