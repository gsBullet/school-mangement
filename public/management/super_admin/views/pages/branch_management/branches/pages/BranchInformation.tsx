import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const BranchInformation: React.FC<Props> = (props: Props) => {
    return (
        <div className="admin_dashboard">
            <h2>Branch information</h2>
            <table className="table text-nowrap">
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td className="font-medium text-dark-medium">Uttora</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td className="font-medium text-dark-medium">Male</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td className="font-medium text-dark-medium">
                            masud1@gmail.com
                        </td>
                    </tr>
                    <tr>
                        <td>Phone number:</td>
                        <td className="font-medium text-dark-medium">
                            01897867563
                        </td>
                    </tr>
                    <tr>
                        <td>Stutas:</td>
                        <td className="font-medium text-dark-medium">Active</td>
                    </tr>
                    <tr>
                        <td>Branch:</td>
                        <td className="font-medium text-dark-medium">Uttora</td>
                    </tr>
                    <tr>
                        <td>Admission no:</td>
                        <td className="font-medium text-dark-medium">
                            A202411303
                        </td>
                    </tr>
                    <tr>
                        <td>Roll no:</td>
                        <td className="font-medium text-dark-medium">323</td>
                    </tr>
                    <tr>
                        <td>Addmission date:</td>
                        <td className="font-medium text-dark-medium">
                            06-09-2024
                        </td>
                    </tr>
                    <tr>
                        <td>Class:</td>
                        <td className="font-medium text-dark-medium">Seven</td>
                    </tr>
                    <tr>
                        <td>Shift:</td>
                        <td className="font-medium text-dark-medium">
                            Boy morning
                        </td>
                    </tr>
                    <tr>
                        <td>Section:</td>
                        <td className="font-medium text-dark-medium">A</td>
                    </tr>
                    <tr>
                        <td>Present Address:</td>
                        <td className="font-medium text-dark-medium">
                            Mirpur, dhaka
                        </td>
                    </tr>
                    <tr>
                        <td>Permanent Address:</td>
                        <td className="font-medium text-dark-medium">
                            Barishal
                        </td>
                    </tr>
                    <tr>
                        <td>Date of birth:</td>
                        <td className="font-medium text-dark-medium">
                            15, Jamuary 2012
                        </td>
                    </tr>
                    <tr>
                        <td>Religion:</td>
                        <td className="font-medium text-dark-medium">Islam</td>
                    </tr>
                    <tr>
                        <td>Nationality:</td>
                        <td className="font-medium text-dark-medium">
                            Bangladeshi
                        </td>
                    </tr>
                    <tr>
                        <td>Division:</td>
                        <td className="font-medium text-dark-medium">
                            Noakhali
                        </td>
                    </tr>
                    <tr>
                        <td>Subject:</td>
                        <td className="font-medium text-dark-medium">
                            English
                        </td>
                    </tr>
                    <tr>
                        <td>Class:</td>
                        <td className="font-medium text-dark-medium">2</td>
                    </tr>
                    <tr>
                        <td>Section:</td>
                        <td className="font-medium text-dark-medium">Pink</td>
                    </tr>
                    <tr>
                        <td>ID No:</td>
                        <td className="font-medium text-dark-medium">10005</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td className="font-medium text-dark-medium">
                            House #10, Road #6, Australia
                        </td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td className="font-medium text-dark-medium">
                            + 88 98568888418
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BranchInformation;
