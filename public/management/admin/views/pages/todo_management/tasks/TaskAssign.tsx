import React, { useEffect, useState } from 'react';
import Header from './components/management_data_page/Header';
import Footer from './components/management_data_page/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import setup from './config/setup';
import { RootState, useAppDispatch } from '../../../../store';
import { details } from './config/store/async_actions/details';
import { initialState } from './config/store/inital_state';
import { useParams } from 'react-router-dom';
import storeSlice from './config/store';
import moment from 'moment/moment';
import { all_staff } from './config/store/async_actions/all_staff';
import { all_teacher } from './config/store/async_actions/all_teacher';
import { assign_task } from './config/store/async_actions/assign_task';
export interface Props {}

const TaskAssign: React.FC<Props> = (props: Props) => {
    const [staffs, setStaffs] = useState<number[]>([]);
    const [teachers, setTeachers] = useState<number[]>([]);
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();
    const params = useParams();
    let id = params.id;
    console.log('assing page id', id);

    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(details({ id: params.id }) as any);
    }, []);

    function toggleStaff(id: number, user: string) {
        if (user === 'staff') {
            setStaffs((prevStaffs) => {
                if (prevStaffs.includes(id)) {
                    // Remove the ID if it's already in the array
                    return prevStaffs.filter((staffId) => staffId !== id);
                } else {
                    // Add the ID if it's not in the array
                    return [...prevStaffs, id];
                }
            });
        } else if (user === 'teacher') {
            setTeachers((prevStaffs) => {
                if (prevStaffs.includes(id)) {
                    // Remove the ID if it's already in the array
                    return prevStaffs.filter((staffId) => staffId !== id);
                } else {
                    // Add the ID if it's not in the array
                    return [...prevStaffs, id];
                }
            });
        }
    }
    useEffect(() => {
        dispatch(storeSlice.actions.set_item({}));
        dispatch(all_staff({}) as any);
        dispatch(all_teacher({}) as any);
    }, []);

    // useEffect(() => {
    //     console.log('teachers', teachers);
    // }, [teachers]);

    // useEffect(() => {
    //     console.log('staffs', staffs);
    // }, [staffs]);

    // if (state.teachers) {
    //     console.log('state teachers', state.teachers);
    // }

    async function handle_submit(e) {
        e.preventDefault();
        console.log('yamjin');

        let response = await dispatch(
            assign_task({ staffs, teachers, id }) as any,
        );
    }

    return (
        <>
            <div className="page_content">
                <div className="explore_window fixed_size">
                    <Header page_title={setup.details_page_title}></Header>

                    {Object.keys(state.item).length && (
                        <div className="content_body">
                            <table className="table quick_modal_table table-hover">
                                <tbody>
                                    <tr>
                                        <td>Title</td>
                                        <td>:</td>
                                        <td>{state.item.title}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <h1 className="my-2">Staffs :</h1>
                                <div>
                                    <ul className="assign_tasks">
                                        {state?.staffs?.length &&
                                            state?.staffs?.map(
                                                (
                                                    i: { [key: string]: any },
                                                    index,
                                                ) => {
                                                    return (
                                                        <li
                                                            className="assign_task_list"
                                                            onClick={() =>
                                                                toggleStaff(
                                                                    i.id,
                                                                    'staff',
                                                                )
                                                            }
                                                            style={{
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id={i.id}
                                                                    checked={staffs.includes(
                                                                        i.id,
                                                                    )}
                                                                    readOnly
                                                                />
                                                            </div>
                                                            <div>:</div>
                                                            <div>{i.name}</div>
                                                        </li>
                                                    );
                                                },
                                            )}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h1 className="my-4">Teachers :</h1>
                                <div>
                                    <ul className="assign_tasks">
                                        {state?.teachers?.length &&
                                            state?.teachers?.map(
                                                (
                                                    i: { [key: string]: any },
                                                    index,
                                                ) => {
                                                    return (
                                                        <li
                                                            className="assign_task_list"
                                                            onClick={() =>
                                                                toggleStaff(
                                                                    i.id,
                                                                    'teacher',
                                                                )
                                                            }
                                                            style={{
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id={i.id}
                                                                    checked={teachers.includes(
                                                                        i.id,
                                                                    )}
                                                                    readOnly
                                                                />
                                                            </div>
                                                            <div>:</div>
                                                            <div>{i.name}</div>
                                                        </li>
                                                    );
                                                },
                                            )}
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group form-horizonta">
                                <div className="task_assign_submit_btn">
                                    <button
                                        onClick={handle_submit}
                                        className="btn btn_1"
                                    >
                                        submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default TaskAssign;
