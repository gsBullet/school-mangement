import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../../common_types/object';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../store';
import { initialState } from '../../config/store/inital_state';
import setup from '../../config/setup';
export interface Props {
    // state: anyObject;
    setEducationalBackground: Function;
}

const EducationalBackgound: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );
    const [updateEducationalBackground, setUpdateEducationalBackground] =
        useState<anyObject[]>([]);

    function addNewBackground() {
        let temp = [...updateEducationalBackground];
        temp.push({
            id: null,
            user_student_id: state.item.id,
            previous_institute: '',
            year_of_leaving: '',
            result: '',
            transfer_cirtificate: '',
        });
        setUpdateEducationalBackground(temp);
    }

    useEffect(() => {
        setUpdateEducationalBackground(state.item?.educational_backgrounds);
        props.setEducationalBackground(state.item?.educational_backgrounds);
    }, [state.item]);

    function remove_from_state(index, state, setState) {
        let t = [...state];
        t.splice(index, 1);
        setState(t);
        props.setEducationalBackground(t);
    }

    function setData(index: number, name: string, value: string) {
        let t = JSON.parse(JSON.stringify(updateEducationalBackground));
        t[index][name] = value;
        console.log({ t, index, name, value, data: t[index] });
        setUpdateEducationalBackground(t);
        props.setEducationalBackground(t);
    }
    return (
        <>
            <div className="full_width">
                <div className="form_section_heading">
                    <h4>Educational Background</h4>
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
                        name="educational_background_count"
                        value={updateEducationalBackground?.length}
                    />
                    {updateEducationalBackground?.map((i, index) => {
                        const defaultYearOfLeaving = i.year_of_leaving
                            ? moment(i.year_of_leaving).format('YYYY-MM-DD')
                            : moment().format('YYYY-MM-DD');
                        return (
                            <div key={index} className="multi_input_group">
                                <div>{index + 1}</div>
                                <div className="d-flex">
                                    <div className="form-group form-vertical">
                                        <label>Previous institute</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="previous institute"
                                                name={`educational_background_previous_institute_${index}`}
                                                defaultValue={
                                                    i.previous_institute
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'previous_institute',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Year of leaving</label>
                                        <div className="form_elements">
                                            <input
                                                type="date"
                                                defaultValue={
                                                    defaultYearOfLeaving
                                                }
                                                name={`educational_background_year_of_leaving_${index}`}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'year_of_leaving',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Result</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="result"
                                                name={`educational_background_result_${index}`}
                                                defaultValue={i.result}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'result',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Transfer certificate</label>
                                        <div className="form_elements">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                placeholder="transfer cirtificate"
                                                name={`educational_background_transfer_cirtificate_${index}`}
                                            />
                                            <img
                                                src={i.transfer_cirtificate}
                                                style={{
                                                    width: '100px',
                                                    height: '50px',
                                                }}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* {updateEducationalBackground.length > 1 && (
                                    <div>
                                        <span
                                            onClick={() =>
                                                remove_from_state(
                                                    index,
                                                    updateEducationalBackground,
                                                    setUpdateEducationalBackground,
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

export default EducationalBackgound;
