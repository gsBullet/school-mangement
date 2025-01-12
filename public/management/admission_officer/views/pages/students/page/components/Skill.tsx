import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../../common_types/object';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../store';
import { initialState } from '../../config/store/inital_state';
import setup from '../../config/setup';
export interface Props {
    // state: anyObject;
    setTotalSkill: Function;
}

const Skill: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );
    const [updateSkill, setUpdateSkill] = useState<anyObject[]>([]);

    function addNewBackground() {
        let temp = [...updateSkill];
        temp.push({
            id: null,
            user_student_id: state.item.id,
            title: '',
            level: '',
            branch_id: '',
        });
        setUpdateSkill(temp);
    }

    useEffect(() => {
        setUpdateSkill(state.item?.skills);
        props.setTotalSkill(state.item?.skills);
        // console.log('updatenumber', updateSkill);
    }, [state]);

    function remove_from_state(index, state, setState) {
        let t = [...state];
        t.splice(index, 1);
        setState(t);
        props.setTotalSkill(t);
    }

    function setData(index: number, name: string, value: string) {
        let t = JSON.parse(JSON.stringify(updateSkill));
        t[index][name] = value;
        console.log({ t, index, name, value, data: t[index] });
        setUpdateSkill(t);
        props.setTotalSkill(t);
    }
    return (
        <>
            <div className="full_width">
                <div className="form_section_heading">
                    <h4>Skill</h4>
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
                        name="student_skills_count"
                        value={updateSkill?.length}
                    />
                    {updateSkill?.map((i, index) => {
                        return (
                            <div key={index} className="multi_input_group">
                                <div>{index + 1}</div>
                                <div className="d-flex">
                                    <div className="form-group form-vertical">
                                        <label>Skills title</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="skills title"
                                                name={`skills_title${index}`}
                                                id=""
                                                defaultValue={i.title}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'title',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Level</label>
                                        <div className="form_elements">
                                            <select
                                                name={`skills_level${index}`}
                                                id=""
                                                defaultValue={i.level}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'level',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            >
                                                <option value="high">
                                                    high
                                                </option>
                                                <option value="mid">mid</option>
                                                <option value="low">low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* {updateSkill.length > 1 && (
                                    <div>
                                        <span
                                            onClick={() =>
                                                remove_from_state(
                                                    index,
                                                    updateSkill,
                                                    setUpdateSkill,
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

export default Skill;
