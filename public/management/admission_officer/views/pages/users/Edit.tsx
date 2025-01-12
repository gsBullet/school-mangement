import React, { useEffect } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import { useSelector } from 'react-redux';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../store';
import { details } from './config/store/async_actions/details';
import { initialState } from './config/store/inital_state';
import { Link, useParams } from 'react-router-dom';
import storeSlice from './config/store';
import { update } from './config/store/async_actions/update';
import Input from './components/management_data_page/Input';
import InputImage from './components/management_data_page/InputImage';
import DropDown from './components/dropdown/DropDown';
import Select from './components/management_data_page/Select';
import { anyObject } from '../../../common_types/object';
export interface Props {}

const Edit: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();
    console.log('id', params.id);

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(details({ id: params.id }) as any);
    }, []);

    useEffect(() => {
        if (state.item?.reference_info) {
            dispatch(
                storeSlice.actions.set_selected([state.item.reference_info]),
            );
        }
    }, [state.item]);

    async function handle_submit(e) {
        e.preventDefault();
        const response = await dispatch(update(new FormData(e.target)) as any);
    }

    function get_value(key) {
        try {
            if (state.item[key]) return state.item[key];
            if (state.item?.info[key]) return state.item?.info[key];
        } catch (error) {
            return '';
        }
        return '';
    }
    function get_reference(): anyObject[] | [] {
        try {
            if (state.item.reference_info) return [state.item.reference_info];
        } catch (error) {
            return [];
        }
        return [];
    }

    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    <Header page_title={setup.edit_page_title}></Header>

                    {Object.keys(state.item).length && (
                        <div className="content_body custom_scroll">
                            <form
                                onSubmit={(e) => handle_submit(e)}
                                className="mx-auto pt-3"
                            >
                                <input
                                    type="hidden"
                                    name="id"
                                    defaultValue={state.item.id}
                                />

                                <div>
                                    <h5 className="mb-4">
                                        Personal Informations
                                    </h5>
                                    <div className="form_auto_fit">
                                        <div className="form-group form-vertical">
                                            <Input
                                                name={'uid'}
                                                label="Employee ID"
                                            />
                                        </div>
                                        {[
                                            'name',
                                            'email',
                                            'father_name',
                                            'mother_name',
                                            'husband_spouse',
                                            'phone_number',
                                            'nid',
                                            'education',
                                            'permanent_address',
                                            'present_address',
                                        ].map((i) => (
                                            <div className="form-group form-vertical">
                                                <Input
                                                    name={i}
                                                    value={get_value(i)}
                                                />
                                            </div>
                                        ))}

                                        <div className="form-group form-vertical">
                                            <Select
                                                value={state.item.designation}
                                                label="Designation"
                                                name="designation"
                                                values={[
                                                    { text: 'ED', value: 'ed' },
                                                    { text: 'GM', value: 'gm' },
                                                    {
                                                        text: 'AGM',
                                                        value: 'agm',
                                                    },
                                                    { text: 'MO', value: 'mo' },
                                                ]}
                                            />
                                        </div>

                                        <div className="form-group form-vertical">
                                            <label>Reference</label>
                                            <div className="form_elements">
                                                <DropDown
                                                    multiple={false}
                                                    get_selected_data={(
                                                        result,
                                                    ) => console.log(result)}
                                                    default_value={get_reference()}
                                                    name={`reference`}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group form-vertical">
                                            <Input name={'password'} />
                                        </div>

                                        <div className="form-group grid_full_width form-vertical">
                                            <InputImage
                                                label={'image'}
                                                name={'image'}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="mb-4">Bank Informations</h5>
                                    <div className="form_auto_fit">
                                        {[
                                            'bank_name',
                                            'branch_name',
                                            'bank_account_no',
                                            'bank_routing_no',
                                            'mobile_banking_portal',
                                            'mobile_banking_ac_no',
                                        ].map((i) => (
                                            <div className="form-group form-vertical">
                                                <Input
                                                    name={i}
                                                    value={get_value(i)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group form-vertical">
                                    <label></label>
                                    <div className="form_elements">
                                        <button className="btn btn-outline-info">
                                            submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}

                    <Footer>
                        {state?.item?.id && (
                            <li>
                                <Link
                                    to={`/${setup.route_prefix}/details/${state.item?.id}`}
                                    className="outline"
                                >
                                    <span className="material-symbols-outlined fill">
                                        visibility
                                    </span>
                                    <div className="text">Details</div>
                                </Link>
                            </li>
                        )}
                    </Footer>
                </div>
            </div>
        </>
    );
};

export default Edit;
