import React, { useState, useEffect, useRef } from 'react';
import { anyObject } from '../../../common_types/object';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Result: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    // const [data, setData] = useState([]);
    const [subjects, setSubjects] = useState<any>([]);
    const [exames, setExames] = useState<any>([]);
    const [students, setStudents] = useState<any>([]);
    const subjRefId = useRef<HTMLSelectElement>(null);
    const examRefId = useRef<HTMLSelectElement>(null);
    const studentIdRef = useRef<HTMLInputElement>(null);
    const markRef = useRef<HTMLInputElement>(null);
    const otherMarkRef = useRef<HTMLInputElement>(null);
    const { id } = useParams();

    const fetchClasses = async () => {
        try {
            const response = await axios.get(
                `/api/v1/branch-class-subjects/class-wise-subject/${id}`,
            );
            setSubjects(response.data.data);
            // setData(response.data);
        } catch (error) {
            setError(error);
        }
    };
    const fetchExames = async () => {
        try {
            const response = await axios.get(`/api/v1/exams/all-exam`);
            setExames(response.data.data);
            // setData(response.data);
        } catch (error) {
            setError(error);
        }
    };
    const fetchStudent = async (id1, id2) => {
        try {
            const response = await axios.get(
                `/api/v1/exam-attendent-students/attend-all?sub=${id1}&exam=${id2}&class=${id}`,
            );
            setStudents(response.data.data);
            // setData(response.data);
        } catch (error) {
            setError(error);
            setStudents([]);
        }
    };

    useEffect(() => {
        fetchClasses();
        fetchExames();
    }, []);

    useEffect(() => {
        const id1 = subjRefId.current?.value;
        const id2 = examRefId.current?.value;
        fetchStudent(id1, id2);
    }, [subjects, exames]);

    const handleSubmit = () => {
        const id1 = subjRefId.current?.value;
        const id2 = examRefId.current?.value;
        fetchStudent(id1, id2); // Pass the id to fetchClass
    };

    const handleMarkBlur = async (e: any, i: any) => {
        const mark = e.target.name == 'mark' ? e.target.value : '';
        const other_mark = e.target.name == 'other_mark' ? e.target.value : '';
        console.log('Student mark:', i);
        console.log('Student mark:', mark);
        console.log('Student other_mark:', other_mark);
        try {
            const payload = {
                mark,
                other_mark,
                ...i,
            };
            const response = await axios.post(
                '/api/v1/exam-student-marks/mark-store',
                payload,
            );
            fetchClasses();
            e.target.value = '';
            console.log('response', 'response');
        } catch (error) {
            // setError(error); // Set error state
        }
    };

    return (
        <div className="admin_dashboard">
            <div className="result_details">
                <h3 className="table_heading mt-4"></h3>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <div className="teacher_result">
                        <div>
                            <div>Subject</div>
                            <div>
                                <select name="subject" id="" ref={subjRefId}>
                                    {subjects.map((i, index) => {
                                        return (
                                            <option value={i.id}>
                                                {i.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>Exam</div>
                            <div>
                                <select name="exam" id="" ref={examRefId}>
                                    {exames.map((i, index) => {
                                        return (
                                            <option value={i.id}>
                                                {i.title}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <button
                            className="btn btn-sm btn-outline-info "
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="content_body">
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Serial</th>
                                    <th>Name</th>
                                    <th>Result</th>
                                    <th>Other Mark</th>
                                    <th>Mark</th>
                                    <th>Other Mark</th>
                                </tr>
                            </thead>
                            <tbody id="all_list">
                                {students?.map(
                                    (i: { [key: string]: any }, index) => {
                                        return (
                                            <tr>
                                                <td></td>
                                                <td>{index + 1}</td>
                                                <td>{i.student?.name}</td>
                                                <td>
                                                    {i.studentMarks
                                                        ? i.studentMarks
                                                            ?.obtained_mark
                                                        : 'no'}
                                                </td>
                                                <td>
                                                    {i.studentMarks
                                                        ? i.studentMarks
                                                            ?.other_mark
                                                        : 'no'}
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        name="mark"
                                                        id=""
                                                        onBlur={(e) =>
                                                            handleMarkBlur(e, i)
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        name="other_mark"
                                                        id=""
                                                        onBlur={(e) =>
                                                            handleMarkBlur(e, i)
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
