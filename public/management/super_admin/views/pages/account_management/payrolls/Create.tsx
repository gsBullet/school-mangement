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
                                    <label>Gross Salary</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            placeholder="gross salary"
                                            name="gross_salary"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Intensive</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            placeholder="intensive"
                                            name="intensive"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Lunch Bill</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            placeholder="lunch bill"
                                            name="lunch_bill"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Let Fine</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            placeholder="let fine"
                                            name="let_fine"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Other Deduction</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            placeholder="other deduction"
                                            name="other_deduction"
                                        />
                                    </div>
                                </div>
                                {/* <div className="form-group form-horizontal">
                                    <label>Net Salary</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            placeholder="net salary"
                                            name="nat_salary"
                                        />
                                    </div>
                                </div> */}
                                <div className="form-group form-horizontal">
                                    <label>Total</label>
                                    <div className="form_elements">
                                        <input
                                            type="number"
                                            name="total"
                                            id=""
                                            placeholder="Total after all deductions"
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
