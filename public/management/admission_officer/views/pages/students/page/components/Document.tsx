import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../../../common_types/object';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../../store';
import { initialState } from '../../config/store/inital_state';
import setup from '../../config/setup';
export interface Props {
    // state: anyObject;
    setTotalDocument: Function;
}

const Documents: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );
    const [updateDocuments, setUpdateDocuments] = useState<anyObject[]>([]);

    function addNewBackground() {
        let temp = [...updateDocuments];
        temp.push({
            id: null,
            user_student_id: state.item.id,
            document_title: '',
            document_file: '',
            issue_date: '',
            expire_date: '',
        });
        setUpdateDocuments(temp);
    }

    useEffect(() => {
        setUpdateDocuments(state.item?.document_titles);
        props.setTotalDocument(state.item?.document_titles);
    }, [state.item]);

    function remove_from_state(index, state, setState) {
        let t = [...state];
        t.splice(index, 1);
        setState(t);
        props.setTotalDocument(t);
    }

    function setData(index: number, name: string, value: string) {
        let t = JSON.parse(JSON.stringify(updateDocuments));
        t[index][name] = value;
        console.log({ t, index, name, value, data: t[index] });
        setUpdateDocuments(t);
        props.setTotalDocument(t);
    }
    return (
        <>
            <div className="full_width">
                <div className="form_section_heading">
                    <h4>Documents</h4>
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
                        name="total_docement_count"
                        value={updateDocuments?.length}
                    />
                    {updateDocuments?.map((i, index) => {
                        const defaultYearOfLeaving = i.year_of_leaving
                            ? moment(i.year_of_leaving).format('YYYY-MM-DD')
                            : moment().format('YYYY-MM-DD');
                        return (
                            <div key={index} className="multi_input_group">
                                <div>{index + 1}</div>
                                <div className="d-flex">
                                    <input
                                        value={i.id}
                                        type="hidden"
                                        name={`document_id${index}`}
                                    />
                                    <div className="form-group form-vertical">
                                        <label>Document title</label>
                                        <div className="form_elements">
                                            <input
                                                type="text"
                                                placeholder="document title"
                                                name={`document_title${index}`}
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
                                        <label>Document file</label>
                                        <div className="form_elements">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                placeholder="document file"
                                                name={`document_file${index}`}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'file',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            />
                                            <img
                                                src={i.values_title?.file}
                                                style={{
                                                    width: '100px',
                                                    height: '50px',
                                                }}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Issue Date</label>
                                        <div className="form_elements">
                                            <input
                                                type="date"
                                                defaultValue={moment(
                                                    i.values_title?.issue_date,
                                                ).format('YYYY-MM-DD')}
                                                name={`issue_date${index}`}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'issue_date',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group form-vertical">
                                        <label>Expire Date</label>
                                        <div className="form_elements">
                                            <input
                                                type="date"
                                                // defaultValue={
                                                //     i.expire_date ?
                                                //     (moment(
                                                //         i.values_title?.issue_date,
                                                //     ).format(
                                                //         'YYYY-MM-DD',
                                                //     ) |
                                                //         moment().format(
                                                //             'YYYY-MM-DD',
                                                //         ))
                                                // }
                                                defaultValue={moment(
                                                    i.values_title?.expire_date,
                                                ).format('YYYY-MM-DD')}
                                                name={`expire_date${index}`}
                                                onChange={(e) =>
                                                    setData(
                                                        index,
                                                        'expire_date',
                                                        `${e.target.value}`,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* {updateDocuments.length > 1 && (
                                    <div>
                                        <span
                                            onClick={() =>
                                                remove_from_state(
                                                    index,
                                                    updateDocuments,
                                                    setUpdateDocuments,
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

export default Documents;
