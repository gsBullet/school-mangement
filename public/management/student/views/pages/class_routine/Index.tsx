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
            const response = await axios.get(
                '/api/v1/branch-class-subjects/class-routine/1',
            );
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

    // sorting array
    interface Item {
        id: number; // or string, depending on your data type
        [key: string]: any;
    }

    function sortById<T extends Item>(array: T[]): T[] {
        return array.slice().sort((a, b) => a.id - b.id);
    }
    // let ssddss = data.subject_routine?.day_time;

    function timeFormate(time: string) {
        return moment(time, 'HH:mm:ss').format('hh:mm A');
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
                                        <td className="subject">{i?.name}</td>
                                        {i.subject_routine?.day_time?.length &&
                                            sortById(
                                                i.subject_routine?.day_time,
                                            )?.map(
                                                (i: { [key: string]: any }) => {
                                                    return (
                                                        <td className="class_time_and_room_content">
                                                            <span className="class_time_and_room">
                                                                <span className="time_rooom class_time">
                                                                    {timeFormate(
                                                                        i.start_time,
                                                                    )}{' '}
                                                                    -{' '}
                                                                    {timeFormate(
                                                                        i.end_time,
                                                                    )}{' '}
                                                                </span>
                                                                <span className="time_rooom class_room">
                                                                    <span className="room_title">
                                                                        room
                                                                    </span>
                                                                    <span className="dash_title">
                                                                        -
                                                                    </span>
                                                                    <span className="room_number">
                                                                        {
                                                                            i
                                                                                .class_room
                                                                                ?.building_room
                                                                                ?.room_code
                                                                        }
                                                                    </span>
                                                                    <br />
                                                                    <span>
                                                                        {
                                                                            i
                                                                                .branch_teacher
                                                                                ?.user_teacher
                                                                                ?.name
                                                                        }
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </td>
                                                    );
                                                },
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
