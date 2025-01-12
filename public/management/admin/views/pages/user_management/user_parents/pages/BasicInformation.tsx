import React, { useEffect } from 'react';
import Header from './../components/management_data_page/Header';
import Footer from './../components/management_data_page/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import setup from './../config/setup';
import { RootState, useAppDispatch } from '../../../../../store';
import { details } from './../config/store/async_actions/details';
import { initialState } from './../config/store/inital_state';
import { Link, Outlet, useParams } from 'react-router-dom';
import storeSlice from './../config/store';
export interface Props {}

const BasicInformation: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(details({ id: params.id }) as any);
    }, []);
    return (
        <div className="admin_dashboard">
            <h3 className="table_heading">Basic information</h3>
            <table className="table text-nowrap">
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td className="font-medium text-dark-medium">
                            {state.item.name}
                        </td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td className="font-medium text-dark-medium">
                            {state.item.email}
                        </td>
                    </tr>
                    {/* <tr>
                        <td>Gender:</td>
                        <td className="font-medium text-dark-medium">
                            {state.item.gender}
                        </td>
                    </tr> */}
                    <tr>
                        <td>Phone number:</td>
                        <td className="font-medium text-dark-medium">
                            {state.item.phone_number}
                        </td>
                    </tr>
                    <tr>
                        <td>Stutas:</td>
                        <td className="font-medium text-dark-medium">
                            {state.item.status ? 'active' : 'deactive'}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BasicInformation;
