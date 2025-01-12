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
                        <td>Name:</td>
                        <td className="font-medium text-dark-medium">
                            Mayeem Hossain
                        </td>
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
                </tbody>
            </table>
        </div>
    );
};

export default BasicInformation;
