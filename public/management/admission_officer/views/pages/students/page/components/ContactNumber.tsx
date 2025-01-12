import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../../common_types/object';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../store';
import { initialState } from '../../config/store/inital_state';
import setup from '../../config/setup';
export interface Props {
    // state: anyObject;
    setTotalNumber: Function;
}

const ContactNumber: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );
    const [updateNumber, setUpdateNumber] = useState<anyObject[]>([]);

    function addNewBackground() {
        let temp = [...updateNumber];
        temp.push({
            id: null,
            user_student_id: state.item.id,
            owner: '',
            contact_number: '',
            branch_id: '',
        });
        setUpdateNumber(temp);
    }

    useEffect(() => {
        setUpdateNumber(state.item?.student_numbers);
        props.setTotalNumber(state.item?.student_numbers);
        // console.log('updatenumber', updateNumber);
    }, [state]);

    function remove_from_state(index, state, setState) {
        let t = [...state];
        t.splice(index, 1);
        setState(t);
        props.setTotalNumber(t);
    }

    function setData(index: number, name: string, value: string) {
        let t = JSON.parse(JSON.stringify(updateNumber));
        t[index][name] = value;
        console.log({ t, index, name, value, data: t[index] });
        setUpdateNumber(t);
        props.setTotalNumber(t);
    }
    return (
        <>
            <div className="full_width">
                <div className="form_section_heading">
                    <h4>Contact Number</h4>
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
                        name="contact_number_count"
                        value={updateNumber?.length}
                    />
                    {updateNumber?.map((i, index) => {
                        return (
                            <div key={index} className="multi_input_group">
                                <div>{index + 1}</div>
                                <div className="d-flex">
                                    <div className="form-group form-vertical">
                                        <label>Contact number</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="contact number"
                                                name={`contact_number${index}`}
                                                // id=""
                                                defaultValue={i.contact_number}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'contact_number',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Owner</label>
                                        <div className="form_elements">
                                            <select
                                                name={`number_owner${index}`}
                                                id=""
                                                defaultValue={i.owner}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'owner',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            >
                                                <option value="personal">
                                                    personal
                                                </option>
                                                <option value="home">
                                                    home
                                                </option>
                                                <option value="friend">
                                                    friend
                                                </option>
                                                <option value="relative">
                                                    relative
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* {updateNumber.length > 1 && (
                                    <div>
                                        <span
                                            onClick={() =>
                                                remove_from_state(
                                                    index,
                                                    updateNumber,
                                                    setUpdateNumber,
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

export default ContactNumber;
