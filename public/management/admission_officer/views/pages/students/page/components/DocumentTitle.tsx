import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../../common_types/object';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../store';
import { initialState } from '../../config/store/inital_state';
import setup from '../../config/setup';
export interface Props {
    // state: anyObject;
    setTotalGuardians: Function;
}

const DocumentTitle: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );
    const [updateGuardians, setUpdateGuardians] = useState<anyObject[]>([]);

    function addNewBackground() {
        let temp = [...updateGuardians];
        temp.push({
            id: null,
            user_student_id: state.item.id,
            is_parent: '',
            relation: '',
            user_parent_id: '',
        });
        setUpdateGuardians(temp);
    }

    useEffect(() => {
        setUpdateGuardians(state.item?.parents);
        props.setTotalGuardians(state.item?.parents);
    }, [state.item]);

    function remove_from_state(index, state, setState) {
        let t = [...state];
        t.splice(index, 1);
        setState(t);
        props.setTotalGuardians(t);
    }

    function setData(index: number, name: string, value: string) {
        let t = JSON.parse(JSON.stringify(updateGuardians));
        t[index][name] = value;
        console.log({ t, index, name, value, data: t[index] });
        setUpdateGuardians(t);
        props.setTotalGuardians(t);
    }
    return (
        <>
            <div className="full_width">
                <div className="form_section_heading">
                    <h4>DocumentTitle</h4>
                </div>
                <div className="multi_inputs">
                    {/* <div className="pb-4 px-0">
                        <span
                            className="btn btn-sm  btn-outline-info"
                            onClick={addNewBackground}
                        >
                            Add new
                        </span>
                    </div> */}

                    <input
                        type="hidden"
                        name="totalParent_count"
                        value={updateGuardians?.length}
                    />
                    {updateGuardians?.map((i, index) => {
                        const defaultYearOfLeaving = i.year_of_leaving
                            ? moment(i.year_of_leaving).format('YYYY-MM-DD')
                            : moment().format('YYYY-MM-DD');
                        return (
                            <div key={index} className="multi_input_group">
                                <div>{index + 1}</div>
                                <div className="d-flex">
                                    <div className="form-group form-vertical">
                                        <label>Relation</label>
                                        <div className="form_elements">
                                            <select
                                                name={`relation${index}`}
                                                id=""
                                                defaultValue={i.relation}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'relation',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            >
                                                <option value="gdfg">
                                                    gdfg
                                                </option>
                                                <option value="father">
                                                    father
                                                </option>
                                                <option value="mother">
                                                    mother
                                                </option>
                                                <option value="husband">
                                                    husband
                                                </option>
                                                <option value="brother">
                                                    brother
                                                </option>
                                                <option value="sister">
                                                    sister
                                                </option>
                                                <option value="uncle">
                                                    uncle
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Is parent</label>
                                        <div className="form_elements">
                                            <select
                                                name={`is_parent${index}`}
                                                defaultValue={i.is_parent}
                                                id=""
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'is_parent',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            >
                                                <option value="0">no</option>
                                                <option value="1">yes</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>User parent id</label>
                                        <div className="form_elements">
                                            <select
                                                name={`user_parent_id${index}`}
                                                id=""
                                                defaultValue={i.user_parent_id}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'user_parent_id',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            >
                                                <option value="1">
                                                    parent1
                                                </option>
                                                <option value="2">
                                                    parent2
                                                </option>
                                                <option value="3">
                                                    parent3
                                                </option>
                                                <option value="4">
                                                    parent4
                                                </option>
                                                <option value="6">
                                                    parent6
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* {updateGuardians.length > 1 && (
                                    <div>
                                        <span
                                            onClick={() =>
                                                remove_from_state(
                                                    index,
                                                    updateGuardians,
                                                    setUpdateGuardians,
                                                )
                                            }
                                            className="btn btn-danger"
                                        >
                                            remove
                                        </span>
                                    </div>
                                )} */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default DocumentTitle;
