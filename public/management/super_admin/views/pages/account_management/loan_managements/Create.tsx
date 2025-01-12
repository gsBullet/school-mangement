import React from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import setup from './config/setup';
import { useAppDispatch } from '../../../../store';
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
                                    <label>Account</label>
                                    <div className="form_elements">
                                        <select name="account_id" id="">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Loan Type</label>
                                    <div className="form_elements">
                                        <select name="loan_type" id="">
                                            <option value="home">home</option>
                                            <option value="medical">
                                                medical
                                            </option>
                                            <option value="others">
                                                others
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Recipient Id</label>
                                    <div className="form_elements">
                                        <select name="recipient_id" id="">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Amount</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            placeholder="amount"
                                            name="amount"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Loan Date</label>
                                    <div className="form_elements">
                                        <input type="date" name="loan_date" />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Return Date</label>
                                    <div className="form_elements">
                                        <input type="date" name="return_date" />
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
                                <div className="form-group form-horizontal">
                                    <label>Loan Status</label>
                                    <div className="form_elements">
                                        <select name="loan_status" id="">
                                            <option value="active">
                                                active
                                            </option>
                                            <option value="overdue">
                                                overdue
                                            </option>
                                            <option value="returned">
                                                returned
                                            </option>
                                            <option value="cancelled">
                                                cancelled
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
