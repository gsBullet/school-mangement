import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    interface data {
        [key: string]: any;
    }
    const datas: data[] = [
        {
            id: 1,
            item: 'Note book',
            quantity: '2',
            price: '280',
            amount: '280',
        },
        {
            id: 2,
            item: 'Clipboard',
            quantity: '1',
            price: '120',
            amount: '120',
        },
        {
            id: 3,
            item: 'Folder',
            quantity: '3',
            price: '200',
            amount: '200',
        },
        {
            id: 4,
            item: 'Pen',
            quantity: '10',
            price: '60',
            amount: '60',
        },
    ];

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <div className="order_invoice">
                    <div className="invoice_top">
                        <div className="">
                            <div className="invoice_top_left">
                                <div className="invoice_photo">
                                    <img
                                        src="/assets/dashboard/images/book.jpeg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h3>Nurul Hiqmah Model Madrasa</h3>
                                </div>
                            </div>
                            <div className="invoice_num_date">
                                <p>Invoice Number: 1220</p>
                                <p>Date: 02/02/2022</p>
                            </div>
                        </div>
                        <div className="invoice_top_right">
                            <h3>
                                <span className="horizon_line1"></span>
                                <span className="horizon_line2"></span>
                                <span>I</span>
                                <span>N</span>
                                <span>V</span>
                                <span>O</span>
                                <span>I</span>
                                <span>C</span>
                                <span>E</span>
                            </h3>
                        </div>
                    </div>
                    <div className="invoice_horizontal_border"></div>
                    <div className="invoice_bill">
                        <div>
                            <h5>Bill from:</h5>
                            <p>Company Name</p>
                            <p>Street Address, Zip Code</p>
                            <p>Phone Number</p>
                        </div>
                        <div>
                            <h5>Bill to:</h5>
                            <p>Company Name</p>
                            <p>Street Address, Zip Code</p>
                            <p>Phone Number</p>
                        </div>
                    </div>
                    <div className="data_list">
                        <div className="table_responsive custom_scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Serial</th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody id="all_list">
                                    {datas?.map((i: { [key: string]: any }) => {
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{i.id}</td>
                                                <td>{i.item}</td>
                                                <td>{i.quantity}</td>
                                                <td>{i.price} tk</td>
                                                <td>{i.amount} tk</td>
                                            </tr>
                                        );
                                    })}

                                    <td colSpan={6}>
                                        <div className="invoice_total">
                                            <div className="total_price">
                                                <div className="sub_total">
                                                    <p className="total_text">
                                                        Sub Total :
                                                    </p>
                                                    <p className="">
                                                        660.00 tk
                                                    </p>
                                                </div>
                                                <div className="sub_total">
                                                    <p className="total_text">
                                                        Discount :
                                                    </p>
                                                    <p className="">0.00 tk</p>
                                                </div>
                                                <div className="sub_total">
                                                    <p className="total_text">
                                                        Paid:
                                                    </p>
                                                    <p className="">
                                                        100.00 tk
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <tr>
                                        <td colSpan={6}></td>
                                    </tr>
                                    <td colSpan={6}>
                                        <div className="invoice_total">
                                            <div className="total_price">
                                                <div className="sub_total">
                                                    <p className="total_text">
                                                        Grand Total :
                                                    </p>
                                                    <p className="">
                                                        560.00 tk
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
