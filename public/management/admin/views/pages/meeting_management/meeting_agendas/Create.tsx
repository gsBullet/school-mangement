import React, { useEffect } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
import { json, useParams } from 'react-router-dom';
import storeSlice from './config/store';
import { meeting_all } from './config/store/async_actions/meeting_all';
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
    const params = useParams();

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(meeting_all({}) as any);
    }, []);
    console.log('state meeting', state.meeting);
    // if (state.meeting.length < 1) return <></>;
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
                                    <label>Meeting id</label>
                                    <div className="form_elements">
                                        <select name="meeting_id" id="">
                                            {state?.meeting?.length &&
                                                state.meeting?.map(
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
                                {/* <div> thsi si five {state.meeting.length}</div> */}
                                <div className="form-group form-horizontal">
                                    <label>Title</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="title"
                                            name="title"
                                        />
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
