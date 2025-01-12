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
                                    <label>Employee</label>
                                    <div className="form_elements">
                                        <select name="employee_id" id="">
                                            <option value="employee1">
                                                employee1
                                            </option>
                                            <option value="employee2">
                                                employee2
                                            </option>
                                            <option value="employee3">
                                                employee3
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Payment Date</label>
                                    <div className="form_elements">
                                        <input
                                            type="date"
                                            name="payment_date"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Gross Salary</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            name="gross_salary"
                                            placeholder="gross salary"
                                            id=""
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Other deduction</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            name="gross_salary"
                                            placeholder="gross salary"
                                            id=""
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Net Salary</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            name="net_salary"
                                            placeholder="net salary after deduction"
                                            id=""
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Payment Method</label>
                                    <div className="form_elements">
                                        <select name="payment_method" id="">
                                            <option value="bkash">bkash</option>
                                            <option value="cash">cash</option>
                                            <option value="check">check</option>
                                            <option value="bank transfer">
                                                bank transfer
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Salary Status</label>
                                    <div className="form_elements">
                                        <select name="salary_status" id="">
                                            <option value="processed">
                                                processed
                                            </option>
                                            <option value="pending">
                                                pending
                                            </option>
                                            <option value="faild">faild</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Notes</label>
                                    <div className="form_elements">
                                        <textarea
                                            name="notes"
                                            id=""
                                            placeholder="Take a notes"
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
