import React from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { useAppDispatch } from '../../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
import moment from 'moment/moment';
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

    let formateddata = moment().format('YYYY-MM-DD');
    // console.log('dateff', formateddata);

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
                            <div className="">
                                <div className="form-group form-horizontal">
                                    <label>Title</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="title"
                                            name="title"
                                        />
                                        {/* <div className="form_error">
                                            The title field is required
                                        </div> */}
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Description</label>
                                    <div className="form_elements">
                                        <textarea
                                            name="description"
                                            id=""
                                            placeholder="description"
                                        ></textarea>
                                    </div>
                                </div>
                                {/* <div className="form-group form-horizontal">
                                    <label>Admin</label>
                                    <div className="form_elements">
                                        <select name="admin" id="">
                                            <option value="admin1">
                                                Admin1
                                            </option>
                                            <option value="running">
                                                Admin2
                                            </option>
                                            <option value="completed">
                                                Admin3
                                            </option>
                                            <option value="nexttime">
                                                Admin4
                                            </option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="form-group form-horizontal">
                                    <label>Date</label>
                                    <div className="form_elements">
                                        <input
                                            type="date"
                                            defaultValue={formateddata}
                                            name="date"
                                            id=""
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
