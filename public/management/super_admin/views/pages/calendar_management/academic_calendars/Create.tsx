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
                                    <label>Start Date</label>
                                    <div className="form_elements">
                                        <input type="date" name="start_date" />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>End Date</label>
                                    <div className="form_elements">
                                        <input type="date" name="end_date" />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Event</label>
                                    <div className="form_elements">
                                        <select name="event" id="">
                                            <option value="Eid-ul-fitr">
                                                Eid-ul-fitr
                                            </option>
                                            <option value="Eid-ul-adha">
                                                Eid-ul-adha
                                            </option>
                                            <option value="Shab-e-Qadr">
                                                Shab-e-Qadr
                                            </option>
                                            <option value="May day">
                                                May day
                                            </option>
                                        </select>
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
