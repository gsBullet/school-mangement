import React, { useEffect, useRef } from 'react';
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
import { meeting_all } from './config/store/async_actions/meeting_all';
export interface Props {}

const Edit: React.FC<Props> = (props: Props) => {
    const meetingId = useRef<HTMLSelectElement>(null);
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(details({ id: params.id }) as any);
        dispatch(meeting_all({}) as any);
        dispatch(meeting_all({}) as any);
    }, []);

    async function handle_submit(e) {
        e.preventDefault();
        let response = await dispatch(update(new FormData(e.target)) as any);
    }

    useEffect(() => {
        if (meetingId.current) {
            meetingId.current.value = state.item?.agenda?.meeting_id || ''; // Safely set the value
        }
        // console.log('Updated meetingId:', meetingId.current?.value);
    }, [state.meeting]);
    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    <Header page_title={setup.edit_page_title}></Header>

                    {Object.keys(state.item).length && (
                        <div className="content_body">
                            <form
                                onSubmit={(e) => handle_submit(e)}
                                className="form_600 mx-auto pt-3"
                            >
                                <input
                                    type="hidden"
                                    name="id"
                                    defaultValue={state.item?.agenda?.id}
                                />
                                <div className="form-group form-horizontal">
                                    <label>Meeting id</label>
                                    <div className="form_elements">
                                        <select
                                            name="meeting_id"
                                            id=""
                                            ref={meetingId}
                                            // defaultValue={meetingId}
                                        >
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
                                <div className="form-group form-horizontal">
                                    <label>Title</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="title"
                                            name="title"
                                            defaultValue={
                                                state.item?.agenda?.title
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Description</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="description"
                                            name="description"
                                            defaultValue={
                                                state.item?.agenda?.description
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
