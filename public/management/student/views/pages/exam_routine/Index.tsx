import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<anyObject[]>([]);

    useEffect(() => {
        // Function to fetch data
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/exam-routines/plan/1');
            setData(response.data.data);
            // setData(response.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);
    let days = [
        'saturday',
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
    ];

    function dateFormate(date: string) {
        return moment(date).format('dddd').toLowerCase();
    }
    // console.log('date', dateFormate('2024-09-07T00:00:00.000Z'));

    function get_day_data(i, day) {
        if (dateFormate(i.date) === day) {
            return (
                <td className="class_time_and_room_content">
                    <div className="class_time_and_room">
                        <div className="time_rooom class_time">
                            {/* {day} */}
                            {moment(i.start_time, 'HH:mm:ss').format(
                                'hh:mm A',
                            )}{' '}
                            - {moment(i.end_time, 'HH:mm:ss').format('hh:mm A')}
                        </div>
                        {/* <br /> */}
                        <div>{moment(i.date).format('MMMM Do YY')}</div>
                        <div className="time_rooom class_room">
                            <div className="room_title">
                                room - {i.guard_plan?.room?.room_code}
                            </div>
                        </div>
                    </div>
                </td>
            );
        } else {
            return <td className="class_time_and_room_content">-</td>;
        }
    }

    return (
        <div className="admin_dashboard">
            <div className="class_schedule_content">
                <table className="table_area">
                    <thead>
                        <tr className="table_head_area">
                            <th className="head_subject_title">subjects</th>
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
                        {data?.length &&
                            data?.map((i: { [key: string]: any }) => {
                                return (
                                    <tr className="table_body">
                                        <td className="subject">
                                            {i?.subjects?.name}
                                        </td>
                                        {days.map((day) =>
                                            get_day_data(i, day),
                                        )}
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Index;
