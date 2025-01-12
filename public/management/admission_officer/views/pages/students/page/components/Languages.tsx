import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../../common_types/object';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../store';
import { initialState } from '../../config/store/inital_state';
import setup from '../../config/setup';
export interface Props {
    // state: anyObject;
    setTotalLanguage: Function;
}

const Languages: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );
    const [updateLanguage, setUpdateLanguage] = useState<anyObject[]>([]);

    function addNewBackground() {
        let temp = [...updateLanguage];
        temp.push({
            id: null,
            user_student_id: state.item.id,
            language_title: '',
            profeciency: '',
            branch_id: '',
        });
        setUpdateLanguage(temp);
    }

    useEffect(() => {
        setUpdateLanguage(state.item?.languages);
        props.setTotalLanguage(state.item?.languages);
    }, [state]);

    function remove_from_state(index, state, setState) {
        let t = [...state];
        t.splice(index, 1);
        setState(t);
        props.setTotalLanguage(t);
    }

    function setData(index: number, name: string, value: string) {
        let t = JSON.parse(JSON.stringify(updateLanguage));
        t[index][name] = value;
        console.log({ t, index, name, value, data: t[index] });
        setUpdateLanguage(t);
        props.setTotalLanguage(t);
    }
    return (
        <>
            <div className="full_width">
                <div className="form_section_heading">
                    <h4>Languages</h4>
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
                        name="student_language_count"
                        value={updateLanguage?.length}
                    />
                    {updateLanguage?.map((i, index) => {
                        return (
                            <div key={index} className="multi_input_group">
                                <div>{index + 1}</div>
                                <div className="d-flex">
                                    <div className="form-group form-vertical">
                                        <label>Language title</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="language title"
                                                name={`language_title${index}`}
                                                id=""
                                                defaultValue={i.language_title}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'language_title',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Profeciency</label>
                                        <div className="form_elements">
                                            <select
                                                name={`language_profeciency${index}`}
                                                id=""
                                                defaultValue={i.profeciency}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'profeciency',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            >
                                                <option value="fluent">
                                                    fluent
                                                </option>
                                                <option value="native">
                                                    native
                                                </option>
                                                <option value="mid">mid</option>
                                                <option value="low">low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* {updateLanguage.length > 1 && (
                                    <div>
                                        <span
                                            onClick={() =>
                                                remove_from_state(
                                                    index,
                                                    updateLanguage,
                                                    setUpdateLanguage,
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

export default Languages;
