import React, { useEffect } from 'react';
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
import { details } from './config/store/async_actions/details';
import { building } from './config/store/async_actions/building';
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
        await dispatch(building({}) as any);
    }

    useEffect(() => {
        initdependancy();
    }, []);

    console.log('branch state', state.building);

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
                            <div>
                                <div className="form-group form-horizontal">
                                    <label>Building id</label>
                                    <div className="form_elements">
                                        <select
                                            name="building_id"
                                            id=""
                                        >
                                            {state?.building?.length &&
                                                state.building?.map(
                                                    (i: {
                                                        [key: string]: any;
                                                    }) => {
                                                        return (
                                                            <option
                                                                value={i.id}
                                                            >
                                                                {
                                                                    i.building_name
                                                                }
                                                            </option>
                                                        );
                                                    },
                                                )}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Room Code</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="room code"
                                            name="room_code"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Room Name</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="room name"
                                            name="room_name"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Total seat</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="total seat"
                                            name="total_seat"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Total student</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="total student"
                                            name="total_student"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Attachment</label>
                                    <div className="form_elements">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            placeholder="attachment"
                                            name="attachment"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Photo</label>
                                    <div className="form_elements">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            placeholder="photo"
                                            name="photo"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Description</label>
                                    <div className="form_elements">
                                        <textarea
                                            placeholder="description"
                                            name="description"
                                            id=""
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
