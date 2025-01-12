import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const BasicInformation: React.FC<Props> = (props: Props) => {
    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Basic information</h3>
            <table className="table text-nowrap">
                <tbody>
                    <tr>
                        <td>Permanent Address:</td>
                        <td className="font-medium text-dark-medium">Pabna</td>
                    </tr>
                    <tr>
                        <td>Present Address:</td>
                        <td className="font-medium text-dark-medium">Dhaka</td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td className="font-medium text-dark-medium">
                            Bangladeshi
                        </td>
                    </tr>
                    <tr>
                        <td>District:</td>
                        <td className="font-medium text-dark-medium">Pabna</td>
                    </tr>
                    <tr>
                        <td>Thana:</td>
                        <td className="font-medium text-dark-medium">Pabna</td>
                    </tr>
                    <tr>
                        <td>Graduation:</td>
                        <td className="font-medium text-dark-medium">BSc</td>
                    </tr>
                    <tr>
                        <td>Qualification:</td>
                        <td className="font-medium text-dark-medium">BSc</td>
                    </tr>
                    <tr>
                        <td>Experience:</td>
                        <td className="font-medium text-dark-medium">
                            6 Years teaching in notre dame school
                        </td>
                    </tr>
                    <tr>
                        <td>Department:</td>
                        <td className="font-medium text-dark-medium">
                            English
                        </td>
                    </tr>
                    <tr>
                        <td>Blood Groupe:</td>
                        <td className="font-medium text-dark-medium">AB +</td>
                    </tr>
                    <tr>
                        <td>IsMarried:</td>
                        <td className="font-medium text-dark-medium">Yes</td>
                    </tr>
                    <tr>
                        <td>Class:</td>
                        <td className="font-medium text-dark-medium">Six</td>
                    </tr>
                    <tr>
                        <td>Guardian Contact Number:</td>
                        <td className="font-medium text-dark-medium">
                            01879838345
                        </td>
                    </tr>
                    <tr>
                        <td>Stutas:</td>
                        <td className="font-medium text-dark-medium">Active</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BasicInformation;
