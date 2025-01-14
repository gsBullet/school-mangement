import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    interface Attendance {
        student_id: number;
        year: number;
        months: {
            month: string;
            days: {
                status: boolean;
                day: number;
                date: string;
                attendance_status: string;
            }[];
        }[];
    }

    const [attendence, setAttendence] = useState<Attendance[]>([]);
    console.log(attendence);

    // const year = moment().format('YYYY'); // e.g., "2025"
    const fetchAttendenceData = async () => {
        try {
            const response = await axios.post(
                '/api/v1/student-attendances/get-full-year-attendence',
                {
                    currentYear: 2025,
                    class_id: 1,
                    branch_student_id: 1,
                },
            );
            setAttendence(response.data.data);

            // console.log(response);

            // setAttendence(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAttendenceData();
    }, []);

    return (
        <div className="admin_dashboard">
            <h3 className="table_heading"></h3>
            <div className="content_body">
                <div className="data_list">
                    <table className="table">
                        {attendence.map((item, index) => (
                            <React.Fragment key={index}>
                                <thead>
                                    <h2>{item.student_id}</h2>
                                    <h4>{item.year}</h4>
                                </thead>
                                <thead>
                                    <tr>
                                        <th className="check_yes">Month</th>
                                        {[...Array(31).keys()].map((day) => (
                                            <th
                                                key={day + 1}
                                                className="check_yes"
                                            >
                                                {day + 1}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.months.map((m, mIndex) => (
                                        <tr key={mIndex}>
                                            <td className="check_yes">
                                                {m.month}
                                            </td>

                                            {m.days.map((d, dIndex) => (
                                                <td key={dIndex}>
                                                    {d.status ? (
                                                        <span className="">
                                                            <i className="fa fa-check check_yes"></i>
                                                        </span>
                                                    ) : (
                                                        <span className="">
                                                            <i className="fa fa-times check_cross"></i>
                                                        </span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </React.Fragment>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Index;
