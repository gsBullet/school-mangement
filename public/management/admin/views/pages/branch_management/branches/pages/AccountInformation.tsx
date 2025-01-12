import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const BranchInformation: React.FC<Props> = (props: Props) => {
    return (
        <div className="admin_dashboard">
            <h2>Branch Account Informations</h2>
            <div>
                <form className="form_600 mx-auto pt-3">
                    <div className="d-flex">
                        <div className="form-group form-vertical">
                            <label>Start Date</label>
                            <div className="form_elements">
                                <input type="date" name="start_date" id=" " />
                            </div>
                        </div>
                        <div className="form-group form-vertical">
                            <label>End Date</label>
                            <div className="form_elements">
                                <input type="date" name="end_date" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <table className="table text-nowrap">
                <tbody>
                    <tr>
                        <td>Salary:</td>
                        <td className="font-medium text-dark-medium">200000</td>
                    </tr>
                    <tr>
                        <td>Fee Collection:</td>
                        <td className="font-medium text-dark-medium">150000</td>
                    </tr>
                    <tr>
                        <td>Purchase:</td>
                        <td className="font-medium text-dark-medium">50000</td>
                    </tr>
                    <tr>
                        <td>Admission Fee:</td>
                        <td className="font-medium text-dark-medium">250000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BranchInformation;
