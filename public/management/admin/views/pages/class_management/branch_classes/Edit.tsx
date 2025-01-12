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
                                    <label>Code</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="code"
                                            name="code"
                                            defaultValue={state.item.code}
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
                                            defaultValue={state.item.capacity}
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
                                            defaultValue={state.item.fee}
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
                                            defaultValue={
                                                state.item.prerequisities
                                            }
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
                                            defaultValue={
                                                state.item.student_instructions
                                            }
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
                                            defaultValue={
                                                state.item.parent_instructions
                                            }
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
                                            defaultValue={state.item.policies}
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Rules</label>
                                    <div className="form_elements">
                                        <textarea
                                            placeholder="rules"
                                            name="rules"
                                            defaultValue={state.item.rules}
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Waiver rules</label>
                                    <div className="form_elements">
                                        <textarea
                                            placeholder="waiver rules"
                                            name="waiver_rules"
                                            defaultValue={
                                                state.item.waiver_rules
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Discount rules</label>
                                    <div className="form_elements">
                                        <textarea
                                            placeholder="discount rules"
                                            name="discount_rules"
                                            defaultValue={
                                                state.item.discount_rules
                                            }
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
