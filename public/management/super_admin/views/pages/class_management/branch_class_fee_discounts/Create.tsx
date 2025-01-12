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
                                            <option value="demo1">demo1</option>
                                            <option value="demo1">demo1</option>
                                            <option value="demo1">demo1</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Branch class id</label>
                                    <div className="form_elements">
                                        <select name="branch_class_id" id="">
                                            <option value="demo1">demo1</option>
                                            <option value="demo1">demo1</option>
                                            <option value="demo1">demo1</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Branch class fee id</label>
                                    <div className="form_elements">
                                        <select
                                            name="branch_class_fee_id"
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
                                            name="description"
                                            id=""
                                            placeholder="description"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Amount</label>
                                    <div className="form_elements">
                                        <input
                                            type="text"
                                            placeholder="amount"
                                            name="amount"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-horizontal">
                                    <label>Discount type</label>
                                    <div className="form_elements">
                                        <select name="discount_type" id="">
                                            <option value="percentage">
                                                Percentage
                                            </option>
                                            <option value="fixed">Fixed</option>
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
