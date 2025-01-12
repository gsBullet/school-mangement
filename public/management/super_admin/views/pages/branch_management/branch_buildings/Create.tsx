import React, { useEffect } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { useAppDispatch } from '../../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
import { useParams } from 'react-router-dom';
import storeSlice from './config/store';
import { details } from './config/store/async_actions/details';
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

    const params = useParams();

    // useEffect(() => {
    //     dispatch(storeSlice.actions.set_item({}));
    //     dispatch(details({ id: params.id }) as any);
    // }, []);

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
                            <div>
                                {/* <div className="form-group form-horizontal">
                                    <label>Branch Code</label>
                                    <div className="form_elements">
                                        <select
                                            name="branch_code"
                                            id=""
                                            // ref={meetingId}
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
                                </div> */}
                                <div className="form-group form-horizontal">
                                    <label>Building Code</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="Building Code"
                                            name="building_code"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Building Name</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="building name"
                                            name="building_name"
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
