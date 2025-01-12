import React, { useEffect, useRef } from 'react';
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
import { classes } from './config/store/async_actions/classes';
import axios from 'axios';
import { subjects } from './config/store/async_actions/class_wise_subjects';
export interface Props {}

const Create: React.FC<Props> = (props: Props) => {
    const search_input = useRef<HTMLSelectElement>(null);
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
        await dispatch(classes({}) as any);
        await dispatch(subjects({ id: 1 }) as any);
    }

    useEffect(() => {
        initdependancy();
    }, []);
    console.log('state', state);

    // const handleSubmitSub = async (e) => {
    //     e.preventDefault(); // Prevent the default form submission behavior
    //     let search_key: string = '';
    //     if (search_input.current) {
    //         search_key = search_input.current.value;
    //         dispatch(storeSlice.actions.set_search_key(search_key) as any);
    //         dispatch(subjects({ id: 1 }) as any);
    //     }
    // };

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
                                    <label>Branch Class id</label>
                                    <div className="form_elements">
                                        <select name="branch_class_id" id="">
                                            {state?.classes?.length &&
                                                state.classes?.map(
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
                                    <label>Branch Class subject id</label>
                                    <div className="form_elements">
                                        <select
                                            name="branch_class_subject_id"
                                            ref={search_input}
                                            id=""
                                        >
                                            <option value="demo1">demo1</option>
                                            <option value="demo1">demo1</option>
                                            <option value="demo1">demo1</option>
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
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Description</label>
                                    <div className="form_elements">
                                        <textarea
                                            placeholder="description"
                                            name="description"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Attachment</label>
                                    <div className="form_elements">
                                        <input
                                            type="file"
                                            name="attachment"
                                            accept="image/*, ./*"
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
