import React, { useEffect } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
import storeSlice from './config/store';
import { drivers } from './config/store/async_actions/drivers';
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

    async function initdependancy() {
        await dispatch(storeSlice.actions.set_item({}));
        await dispatch(drivers({}) as any);
    }

    useEffect(() => {
        initdependancy();
    }, []);
    console.log('branch state', state.drivers);

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
                                    <label>Branch transport driver </label>
                                    <div className="form_elements">
                                        <select
                                            name="branch_transport_driver_id"
                                            id=""
                                        >
                                            {state?.drivers?.length &&
                                                state.drivers?.map(
                                                    (i: {
                                                        [key: string]: any;
                                                    }) => {
                                                        return (
                                                            <option
                                                                value={i.id}
                                                            >
                                                                {i.name}
                                                            </option>
                                                        );
                                                    },
                                                )}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Transport Title</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="transport title"
                                            name="title"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Vehicle No</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="vehicle number"
                                            name="vehicle_no"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Type</label>
                                    <div className="form_elements">
                                        <select name="type" id="">
                                            <option value="van">van</option>
                                            <option value="bus">bus</option>
                                            <option value="microbus">
                                                microbus
                                            </option>
                                            <option value="private">
                                                private
                                            </option>
                                            <option value="riksaw">
                                                riksaw
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
