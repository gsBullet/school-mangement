import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Create: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            order_no: '01ADC010',
            order_amount: '300',
            price: '300',
            date: '12 Jan, 2024',
        },
        {
            id: 2,
            order_no: '01ADC011',
            order_amount: '280',
            price: '280',
            date: '10 Jan, 2024',
        },
        {
            id: 3,
            order_no: '01ADC012',
            order_amount: '10',
            price: '10',
            date: '15 Feb, 2024',
        },
        // {
        //     id: 4,
        //     order_no: '01ADC013',
        //     order_amount: '100',
        //     date: '10 March, 2024',
        // },
        // {
        //     id: 5,
        //     order_no: '01ADC014',
        //     order_amount: '120',
        //     date: '14 March, 2024',
        // },
        // {
        //     id: 6,
        //     order_no: '01ADC015',
        //     order_amount: '80',
        //     date: '15 March, 2024',
        // },
    ];
    return (
        <div className="admin_dashboard">
            {/* <h3>Create New Create</h3> */}
            <div className="content_body create_order">
                <form className="form_600aa mx-auto pt-3">
                    <div className="create_order_customer">
                        <div className="form-group form-horizontal">
                            <label>Customer Name</label>
                            <div className="form_elements">
                                <input
                                    type="text"
                                    placeholder="Customer Name"
                                    name="customer_name"
                                />
                            </div>
                        </div>
                        <div className="form-group form-horizontal">
                            <label>Phone Number</label>
                            <div className="form_elements">
                                <input
                                    type="text"
                                    placeholder="Customer Phone Number"
                                    name="phone_number"
                                />
                            </div>
                        </div>
                        <div className="form-group form-horizontal">
                            <label>Sales Date</label>
                            <div className="form_elements">
                                <input type="date" name="sales_date" />
                            </div>
                        </div>
                        <div className="form-group form-horizontal">
                            <label>Due Date</label>
                            <div className="form_elements">
                                <input type="date" name="due_date" />
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="create_order_search">
                        <div className="form-group form-vertical">
                            <label>Search Your Products</label>
                            <div className="form_elements">
                                <input
                                    type="search"
                                    placeholder="product name/id/code"
                                    name="customer_name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="data_list">
                        <div className="table_responsive custom_scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Serial</th>
                                        <th>Item Name</th>
                                        <th>Quantity</th>
                                        <th>Unit price</th>
                                        <th>Total Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="all_list">
                                    {datas?.map((i: { [key: string]: any }) => {
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{i.id}</td>
                                                <td>{i.order_no}</td>
                                                <td className="create_order_quantity_td">
                                                    <div className="create_order_quantity">
                                                        <div className="minus">
                                                            -
                                                        </div>
                                                        <div className="product_quantity">
                                                            <input
                                                                type="text"
                                                                name=""
                                                                id=""
                                                                value={1}
                                                                className="product_quantity_input"
                                                            />
                                                        </div>
                                                        <div className="plus">
                                                            +
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{i.price}</td>
                                                <td>{i.order_amount}</td>
                                                <td>
                                                    <Link
                                                        className="btn btn-sm order_delete_btn mr-1"
                                                        to="/order/create"
                                                    >
                                                        <i
                                                            className="fa fa-trash"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="total_price">
                        <div className="sub_total">
                            <h3>Sub Total :</h3>
                            <p className="">590 tk</p>
                        </div>
                        <div className="grand_total">
                            <h3>Grand Total :</h3>
                            <p className="">590 tk</p>
                        </div>
                    </div>
                    <div className="payment_part">
                        <h3>Payment</h3>
                        <div className="payment">
                            <div className="payment_first">
                                <div className="form-group form-vertical">
                                    <label>Amount</label>
                                    <div className="payment_first_input">
                                        <input
                                            type="number"
                                            placeholder="Amount"
                                            name="amount"
                                            className="input_field"
                                        />
                                    </div>
                                </div>
                                <div className="form-group form-vertical">
                                    <label>Payment Type</label>
                                    <div className="payment_first_input">
                                        <select
                                            name="payment_type"
                                            className="input_field"
                                            id=""
                                        >
                                            <option value="">Cash</option>
                                            <option value="">
                                                Mobile Banking
                                            </option>
                                            <option value="">Bank</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group form-vertical">
                                    <label>Account</label>
                                    <div className="payment_first_input">
                                        <select
                                            name="account"
                                            className="input_field"
                                            id=""
                                        >
                                            <option value="">Cash</option>
                                            <option value="">Bkash</option>
                                            <option value="">Nagad</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="payment_second">
                                <div className="form-group form-vertical">
                                    <label>Payment Note</label>
                                    <div className="form_elements">
                                        <textarea
                                            placeholder="Take some note"
                                            name="payment_note"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="save_btn">
                        <button className="btn btn-sm btn-outline-info">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
