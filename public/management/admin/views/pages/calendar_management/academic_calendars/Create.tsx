import React, { useEffect } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
import moment from 'moment/moment';
import storeSlice from './config/store';
import { event_types } from './config/store/async_actions/event_types';
import { initialState } from './config/store/inital_state';
import { useSelector } from 'react-redux';
export interface Props {}

const Create: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();

    async function handle_submit(e) {
        e.preventDefault();
        let response = await dispatch(store(new FormData(e.target)) as any);
        if (!Object.prototype.hasOwnProperty.call(response, 'error')) {
            e.target.reset();
        }
    }
    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(event_types({}) as any);
    }, []);
    if (state) {
        console.log(state.event_types);
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
                                    <label>Title</label>
                                    <div className="form_elements">
                                        <input type="text" name="event_name" />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Description</label>
                                    <div className="form_elements">
                                        <input type="text" name="description" />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Event Type</label>
                                    <div className="form_elements">
                                        <select name="event_type_id" id="">
                                            {state?.event_types?.length &&
                                                state?.event_types.map(
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
                                <div className="form-group form-horizontal">
                                    <label>Start Date</label>
                                    <div className="form_elements">
                                        <input
                                            type="date"
                                            defaultValue={moment().format(
                                                'YYYY-MM-DD',
                                            )}
                                            name="start_date"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>End Date</label>
                                    <div className="form_elements">
                                        <input
                                            type="date"
                                            defaultValue={moment().format(
                                                'YYYY-MM-DD',
                                            )}
                                            name="end_date"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Days</label>
                                    <div className="form_elements">
                                        <input type="number" name="days" />
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
