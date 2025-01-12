import React, { useState, useEffect, useRef } from 'react';
import { anyObject } from '../../../../common_types/object';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const TakeAttendance: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [branch, setBranch] = useState([]);
    const [classes, setClasses] = useState([]);
    const branchId = useRef<HTMLSelectElement>(null);
    const classId = useRef<HTMLSelectElement>(null);
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const subjectId = searchParams.get('sub');
    console.log('subject id', subjectId);

    const fetchBranches = async () => {
        try {
            const response = await axios.get(`/api/v1/user-students/branches`);
            setBranch(response.data.data);
            // setData(response.data);
        } catch (error) {
            setError(error);
        }
    };

    const fetchClasses = async () => {
        try {
            const response = await axios.get(`/api/v1/user-students/classes`);
            setClasses(response.data.data);
            // setData(response.data);
        } catch (error) {
            setError(error);
        }
    };
    async function initFunc() {
        await fetchClasses();
        await fetchBranches();
    }
    useEffect(() => {
        initFunc();
    }, []);

    const fetchData = async () => {
        if (!branchId.current || !classId.current) {
            console.error('Refs are not ready');
            return;
        }

        const formData = {
            branch: branchId.current.value,
            classes: classId.current.value,
        };

        console.log('Form data:', formData);
        // let formData = 'new FormData();';
        try {
            const response = await axios.post(
                '/api/v1/branch-classes/branch-class-wise-student',
                formData,
            );
            setData(response.data.data);
        } catch (error) {
            setError(error);
        }
    };
    const handleFilter = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let formData = new FormData(e.target);
        try {
            const response = await axios.post(
                '/api/v1/branch-classes/branch-class-wise-student',
                formData,
            );
            setData(response.data.data);
        } catch (error) {
            setError(error);
        }
    };

    let date = moment().format('YYYY-MM-DD');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let newdata;
        if (classId.current) {
            console.error('Refs are not ready');
            newdata = classId.current.value;
        }
        console.log('jsdlfj', newdata);

        let formData = new FormData(e.target);
        formData.append('class_id', newdata);
        try {
            const response = await axios.post(
                '/api/v1/student-attendances/store',
                formData,
            );
            // setData(response.data.data.data);
            // setTotalIncome(response.data.data.data2);
        } catch (error) {
            setError(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [classes, branch]);
    if (data) {
        console.log('founded data', data);
    }
    // console.log('sdlfjlds', classId?.current.value,);

    return (
        <div className="admin_dashboard">
            <div className="content_body">
                <form onSubmit={handleFilter}>
                    <div className="teacher_result">
                        <div>
                            <div className="label">Branch</div>
                            <div>
                                <select name="branch" ref={branchId} id="">
                                    {branch?.length &&
                                        branch?.map(
                                            (i: { [key: string]: any }) => {
                                                return (
                                                    <option value={i.id}>
                                                        {i.name}
                                                    </option>
                                                );
                                            },
                                        )}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="label">Class</div>
                            <div>
                                <select name="classes" ref={classId} id="">
                                    {classes?.length &&
                                        classes?.map(
                                            (i: { [key: string]: any }) => {
                                                return (
                                                    <option value={i.id}>
                                                        {i.name}
                                                    </option>
                                                );
                                            },
                                        )}
                                </select>
                            </div>
                        </div>
                        <button
                            className="btn btn-sm btn-outline-info"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="data_list">
                    <div className="table_responsive custom_scroll">
                        <form onSubmit={handleSubmit}>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Serial</th>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Date</th>
                                        <th></th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody id="all_list">
                                    <input
                                        type="hidden"
                                        name="student_count"
                                        value={data.length}
                                    />
                                    {data?.map(
                                        (i: { [key: string]: any }, index) => {
                                            return (
                                                <tr>
                                                    <td></td>
                                                    <td>{index + 1}</td>
                                                    <td>{i.info?.name}</td>
                                                    <td>
                                                        {i.info_details.role_no}
                                                    </td>
                                                    <td>{date}</td>

                                                    <td>
                                                        <input
                                                            type="hidden"
                                                            name={`student_id${index}`}
                                                            value={
                                                                i.branch_student_id
                                                            }
                                                        />
                                                    </td>
                                                    <td>
                                                        <select
                                                            name={`attendance_status${index}`}
                                                            id=""
                                                        >
                                                            <option value="present">
                                                                Present
                                                            </option>
                                                            <option value="absent">
                                                                absent
                                                            </option>
                                                            <option value="late">
                                                                Late
                                                            </option>
                                                            <option value="leave">
                                                                Leave
                                                            </option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            );
                                        },
                                    )}
                                </tbody>
                            </table>
                            <div className="attendance_form_btn">
                                <button
                                    className="btn btn-sm btn-outline-info "
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TakeAttendance;
