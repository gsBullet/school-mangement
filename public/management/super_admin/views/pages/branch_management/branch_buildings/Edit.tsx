import React, { useEffect, useState } from 'react';
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
    const [file, setFile] = useState<any>();
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

    function getFile(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log('file3', file);
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
                                    <label>Building Name</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="building name"
                                            name="building_name"
                                            defaultValue={
                                                state.item.building_name
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Building code</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="building code"
                                            name="building_code"
                                            defaultValue={
                                                state.item.building_code
                                            }
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
                                            onChange={getFile}
                                        />
                                        <div className="form-group form-horizontal">
                                            <label>Preview img</label>
                                            <div className="form_elements">
                                                <a target="blank" href={file}>
                                                    <img
                                                        src={file}
                                                        className="img-80"
                                                        alt="Preview image"
                                                    />
                                                </a>
                                            </div>
                                            <label>Previous Img</label>
                                            <div className="form_elements">
                                                <a target="blank" href={file}>
                                                    <img
                                                        src={state.item?.photo}
                                                        className="img-80"
                                                        alt="Preview image"
                                                    />
                                                </a>
                                            </div>
                                        </div>
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
                                                state.item.description
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
