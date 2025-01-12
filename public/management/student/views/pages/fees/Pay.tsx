import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Dues: React.FC<Props> = (props: Props) => {
    return (
        <div className="admin_dashboard pt-5">
            <h3 className="table_heading">Pay Dues</h3>
            <div className="content_body">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table text-light my-4">
                            <tbody>
                                <tr>
                                    <td>Class Fee</td>
                                    <td className="text-end">200</td>
                                </tr>
                                <tr>
                                    <td>Exam Fee</td>
                                    <td className="text-end">800</td>
                                </tr>
                                <tr>
                                    <td>Hostel Fee</td>
                                    <td className="text-end">2800</td>
                                </tr>
                                <tr>
                                    <td>Transport Fee</td>
                                    <td className="text-end">250</td>
                                </tr>
                                <tr>
                                    <td className="text-end">Total</td>
                                    <td className="text-end">4050</td>
                                </tr>
                            </tbody>
                        </table>
                        <form>
                            <button className="btn btn-outline-info mt-3">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dues;
