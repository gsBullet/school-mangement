import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    return (
        <div className="admin_dashboard">
            <div className="class_schedule_content">
                <table className="table_area">
                    <thead>
                        <tr className="table_head_area">
                            <th className="head_subject_title">Subjects</th>
                            <th className="head_subject_title">Class</th>
                            <th
                                className="head_day_time_room_title"
                                style={{ width: 'unset' }}
                            >
                                <span className="head_day_time_room head_day">
                                    saturday
                                </span>
                                <span className="head_day_time_room head_time_and_room">
                                    <span className="head_time">time</span>
                                    <span className="head_silash">/</span>
                                    <span className="head_room">room</span>
                                </span>
                            </th>
                            <th
                                className="head_day_time_room_title"
                                style={{ width: 'unset' }}
                            >
                                <span className="head_day_time_room head_day">
                                    sunday
                                </span>
                                <span className="head_day_time_room head_time_and_room">
                                    <span className="head_time">time</span>
                                    <span className="head_silash">/</span>
                                    <span className="head_room">room</span>
                                </span>
                            </th>
                            <th className="head_day_time_room_title">
                                <span className="head_day_time_room head_day">
                                    monday
                                </span>
                                <span className="head_day_time_room head_time_and_room">
                                    <span className="head_time">time</span>
                                    <span className="head_silash">/</span>
                                    <span className="head_room">room</span>
                                </span>
                            </th>
                            <th className="head_day_time_room_title">
                                <span className="head_day_time_room head_day">
                                    tuesday
                                </span>
                                <span className="head_day_time_room head_time_and_room">
                                    <span className="head_time">time</span>
                                    <span className="head_silash">/</span>
                                    <span className="head_room">room</span>
                                </span>
                            </th>
                            <th className="head_day_time_room_title">
                                <span className="head_day_time_room head_day">
                                    wednesday
                                </span>
                                <span className="head_day_time_room head_time_and_room">
                                    <span className="head_time">time</span>
                                    <span className="head_silash">/</span>
                                    <span className="head_room">room</span>
                                </span>
                            </th>
                            <th className="head_day_time_room_title">
                                <span className="head_day_time_room head_day">
                                    thursday
                                </span>
                                <span className="head_day_time_room head_time_and_room">
                                    <span className="head_time">time</span>
                                    <span className="head_silash">/</span>
                                    <span className="head_room">room</span>
                                </span>
                            </th>
                            <th className="head_day_time_room_title">
                                <span className="head_day_time_room head_day">
                                    friday
                                </span>
                                <span className="head_day_time_room head_time_and_room">
                                    <span className="head_time">time</span>
                                    <span className="head_silash">/</span>
                                    <span className="head_room">room</span>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table_body">
                            <td className="subject" rowSpan={3}>
                                bangla
                            </td>
                            <td className="subject">Six</td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        8:00 am - 9:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">201</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        9:00 am - 10:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">102</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        01:00 pm - 02:00 pm
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        01:00 pm - 02:00 pm
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                        </tr>
                        <tr className="table_body">
                            <td className="subject">Seven</td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        8:00 am - 9:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        9:00 am - 10:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">102</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        10:00 am - 11:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        12:00 am - 01:00 pm
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">201</span>
                                    </span>
                                </span> */}
                            </td>
                        </tr>
                        <tr className="table_body">
                            <td className="subject">Eight</td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        01:00 pm - 02:00 pm
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        8:00 am - 9:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        10:00 am - 11:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        01:00 pm - 02:00 pm
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">201</span>
                                    </span>
                                </span> */}
                            </td>
                        </tr>
                        <tr className="table_body">
                            <td className="subject">physics</td>
                            <td className="subject">Nine</td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        11:00 am - 12:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        02:00 pm - 03:00 pm
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                            <td className="class_time_and_room_content">
                                <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        10:00 am - 11:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span>
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        7:00 am - 8:00 am
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">101</span>
                                    </span>
                                </span> */}
                            </td>
                            <td className="class_time_and_room_content">
                                {/* <span className="class_time_and_room">
                                    <span className="time_rooom class_time">
                                        02:00 pm - 03:00 pm
                                    </span>
                                    <span className="time_rooom class_room">
                                        <span className="room_title">room</span>
                                        <span className="dash_title">-</span>
                                        <span className="room_number">201</span>
                                    </span>
                                </span> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Index;
