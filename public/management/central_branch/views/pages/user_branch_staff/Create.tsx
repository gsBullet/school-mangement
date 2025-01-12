import React from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { useAppDispatch } from '../../../store';
import { store } from './config/store/async_actions/store';
import DropDown from './components/dropdown/DropDown';
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

    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    <Header page_title={setup.create_page_title}></Header>
                    <div className="content_body">
                        <form
                            onSubmit={(e) => handle_submit(e)}
                            className="form_600 mx-auto pt-3"
                        >
                            <div className="form-group form-horizontal">
                                <label>Name</label>
                                <div className="form_elements">
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                    />
                                </div>
                            </div>
                            <div className="form-group form-horizontal">
                                <label>Preferred Name</label>
                                <div className="form_elements">
                                    <input
                                        type="text"
                                        placeholder="email"
                                        name="email"
                                    />
                                </div>
                            </div>
                            <div className="form-group form-horizontal">
                                <label>Select user</label>
                                <div className="form_elements">
                                    <DropDown
                                        get_selected_data={(result) =>
                                            console.log(result)
                                        }
                                        name={`selected_users`}
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
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Create;
