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
                                    <label>Branch id</label>
                                    <div className="form_elements">
                                        <select name="branch_id" id="">
                                            <option value="uttora">
                                                uttora
                                            </option>
                                            <option value="mirpur">
                                                mirpur
                                            </option>
                                            <option value="gulshan">
                                                gulshan
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Student Id</label>
                                    <div className="form_elements">
                                        {/* <select name="branch_class_id" id="">
                                            <option value="student1">
                                                student1
                                            </option>
                                            <option value="student2">
                                                student2
                                            </option>
                                            <option value="student3">
                                                student3
                                            </option>
                                        </select> */}
                                        <input
                                            type="text"
                                            name="student_id"
                                            id=""
                                            placeholder="type student id"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Student Name</label>
                                    <div className="form_elements">
                                        {/* <select name="branch_class_id" id="">
                                            <option value="student1">
                                                student1
                                            </option>
                                            <option value="student2">
                                                student2
                                            </option>
                                            <option value="student3">
                                                student3
                                            </option>
                                        </select> */}
                                        <input
                                            type="text"
                                            placeholder="student name"
                                            readOnly
                                        />
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
                                    <label>Perpous</label>
                                    <div className="form_elements">
                                        <select name="perpous" id="">
                                            <option value="admission fee">
                                                admission fee
                                            </option>
                                            <option value="hostel bill">
                                                hostel bill
                                            </option>
                                            <option value="transport fee">
                                                transport fee
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Fee type</label>
                                    <div className="form_elements">
                                        <select name="perpous" id="">
                                            <option value="monthly ">
                                                monthly
                                            </option>
                                            <option value="yearly ">
                                                yearly
                                            </option>
                                            <option value="one time ">
                                                one time
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Total Due</label>
                                    <div className="form_elements">
                                        <input type="number" name="total_due" />
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
                                    <label>Payment Method</label>
                                    <div className="form_elements">
                                        <select name="payment_method" id="">
                                            <option value="cash">cash</option>
                                            <option value="bkash">bkash</option>
                                            <option value="nagad">nagad</option>
                                            <option value="bank transfer">
                                                bank transfer
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Payment Status</label>
                                    <div className="form_elements">
                                        <select
                                            name="payment_status"
                                            defaultValue="pending"
                                            id=""
                                        >
                                            <option value="complete">
                                                complete
                                            </option>
                                            <option value="pending">
                                                pending
                                            </option>
                                            <option value="faild">faild</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Receipt Number</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="receipt number"
                                            name="receipt_number"
                                        />
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
