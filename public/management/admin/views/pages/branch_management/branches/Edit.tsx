import React, { useEffect } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import { useSelector } from 'react-redux';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../../store';
import { details } from './config/store/async_actions/details';
import { initialState } from './config/store/inital_state';
import { useParams } from 'react-router-dom';
import storeSlice from './config/store';
import { update } from './config/store/async_actions/update';
export interface Props {}

const Edit: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(details({ id: params.id }) as any);
    }, []);

    async function handle_submit(e) {
        e.preventDefault();
        let response = await dispatch(update(new FormData(e.target)) as any);
    }

    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    <Header page_title={setup.edit_page_title}></Header>

                    {Object.keys(state.item).length && (
                        <div className="content_body custom_scroll">
                            <form
                                onSubmit={(e) => handle_submit(e)}
                                className="form_600 mx-auto pt-3"
                            >
                                <input
                                    type="hidden"
                                    name="id"
                                    defaultValue={state.item.id}
                                />
                                <div className="form-group form-horizontal">
                                    <label>Branch code</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="branch code"
                                            name="branch_code"
                                            defaultValue={
                                                state.item.branch_code
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Name</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="name"
                                            name="name"
                                            defaultValue={state.item.name}
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Email</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="email"
                                            name="email"
                                            defaultValue={state.item.email}
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Primary contact</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="primary contact"
                                            name="primary_contact"
                                            defaultValue={
                                                state.item.primary_contact
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Logo</label>
                                    <div className="form_elements">
                                        <input
                                            type="file"
                                            placeholder="logo"
                                            name="logo"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Address</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="address"
                                            name="address"
                                            defaultValue={state.item.address}
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Lat</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="Latitude"
                                            name="lat"
                                            defaultValue={state.item.lat}
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Lang</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="langitude"
                                            name="lng"
                                            defaultValue={state.item.lng}
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Map</label>
                                    <div className="form_elements">
                                        <textarea
                                            placeholder="address"
                                            name="map"
                                            defaultValue={state.item.map}
                                        />
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
                    )}

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Edit;
