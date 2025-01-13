import React, { useState, useEffect } from 'react';
import { anyObject } from '../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
import { log } from 'node:console';
export interface Props {}

const T1: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState();
    const [accdemicCalander, setAccademicCalander] = useState<any[]>([]);
    console.log(accdemicCalander);

    const [selectedDate, setSelectedDate] = useState(
        moment().format('YYYY-MM-DD'),
    ); // Default to today's date

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value); // Update the selected date
    };

    // Dynamically format month and year based on the selected date
    const selectedMoment = moment(selectedDate);
    const month = selectedMoment.format('MMM').toLowerCase(); // e.g., "jan"
    const year = selectedMoment.format('YYYY'); // e.g., "2025"
    const formattedDate = `${month}-${year}`;

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/notices/user/students');
            setData(response.data.data);
            // setData(response.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    // console.log(data);
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

    const fetchAccedemicCalenderData = async () => {
        try {
            const response = await axios.post(
                '/api/v1/academic-calendars/get-academic-event-by-month',
                {
                    month: formattedDate,
                    branch_id: 1,
                },
            );

            // Assuming setAccademicCalander is a state setter function
            setAccademicCalander(response.data.data);

            // Clear any previous errors
            setError(null);
        } catch (error) {
            console.error('Error fetching academic calendar data:', error);
            setError(error); // Assuming setError is a state setter for errors
        }
    };
    useEffect(() => {
        fetchAccedemicCalenderData();
    }, [selectedDate]);

    let array: any[][] = [];
    let count = 0;

    // Initialize the 2D array
    for (let i = 0; i < 5; i++) {
        array[i] = []; // Initialize each row

        for (let j = 0; j < 7; j++) {
            if (count < accdemicCalander.length) {
                array[i][j] = accdemicCalander[count] || { date: '', day: '' };
                count++;
            } else {
                continue;
            }
        }
    }

    return (
        <div className="custom_scroll">
            <div className="name my-3">
                <h2>Shafiqur Rahman</h2>
            </div>
            {/* analytics */}
            <div
                className="mt-4"
                style={{
                    display: 'grid',
                    gap: '30px',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)',
                }}
            >
                <div className="card w-100 mb-0" data-intro="This is card">
                    <div className="business-top-widget card-body">
                        <h5 className="mb-2">নোটিশ</h5>
                        <div className="media d-inline-flex">
                            <div className="media-body">
                                <h2 className="total-value m-0 counter">
                                    {data?.length}
                                </h2>
                            </div>
                            <i
                                style={{ opacity: '.4' }}
                                className="icon-bar-chart font-info align-self-center"
                            ></i>
                        </div>
                    </div>
                </div>
                <div className="card w-100 mb-0" data-intro="This is card">
                    <div className="business-top-widget card-body">
                        <h5 className="mb-2">বাড়ির কাজ</h5>
                        <div className="media d-inline-flex">
                            <div className="media-body">
                                <h2 className="total-value m-0 counter">2</h2>
                            </div>
                            <i
                                style={{ opacity: '.4' }}
                                className="icon-bar-chart font-info align-self-center"
                            ></i>
                        </div>
                    </div>
                </div>
                <div className="card w-100 mb-0" data-intro="This is card">
                    <div className="business-top-widget card-body">
                        <h5 className="mb-2">এই মাসের উপস্থিতি</h5>
                        <div className="media d-inline-flex">
                            <div className="media-body">
                                <h2 className="total-value m-0 counter">
                                    78/80
                                </h2>
                            </div>
                            <i
                                style={{ opacity: '.4' }}
                                className="icon-bar-chart font-info align-self-center"
                            ></i>
                        </div>
                    </div>
                </div>
                <div className="card w-100 mb-0" data-intro="This is card">
                    <div className="business-top-widget card-body">
                        <h5 className="mb-2">লাইব্রেরী বই ইস্যু</h5>
                        <div className="media d-inline-flex">
                            <div className="media-body">
                                <h2 className="total-value m-0 counter">5</h2>
                            </div>
                            <i
                                style={{ opacity: '.4' }}
                                className="icon-bar-chart font-info align-self-center"
                            ></i>
                        </div>
                    </div>
                </div>
                <div className="card w-100 mb-0" data-intro="This is card">
                    <div className="business-top-widget card-body">
                        <h5 className="mb-2">ফিস বকেয়া</h5>
                        <div className="media d-inline-flex">
                            <div className="media-body">
                                <h2 className="total-value m-0 counter">
                                    5000
                                </h2>
                            </div>
                            <i
                                style={{ opacity: '.4' }}
                                className="icon-bar-chart font-info align-self-center"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* attendance calendar */}
            <div className="calendar_dashboard mt-4">
                <div className="card mx-auto">
                    <div className="card-header d-flex justify-content-between flex-wrap">
                        <h5>
                            <i className="icon-calendar me-2"></i>
                            Academic Calendar
                        </h5>
                        <h5>
                            {formattedDate}
                            <span className="ml-2">
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                            </span>
                        </h5>
                    </div>
                    <div className="card-body">
                        <ul>
                            {array.map((value, vIndex) =>
                                value.map((element, eIndex) => (
                                    <>
                                        {
                                            <li
                                                key={`${vIndex}- ${eIndex}`}
                                                className={`${element.day === 5 ? 'absent' : ''} || ${moment(element.date).isSame(moment(), 'day') ? 'today' : ''}`}
                                            >
                                                <time dateTime={element.date}>
                                                    {moment(
                                                        element.date,
                                                    ).format('D')}{' '}
                                                </time>
                                                {/* {element.day} */}
                                                {moment(element.date).format(
                                                    'dddd',
                                                )}
                                                <div
                                                    className={`text-${element.events?.length ? 'warning' : 'info'}`}
                                                >
                                                    {element.events?.map(
                                                        (ev, i) => (
                                                            <div
                                                                key={i}
                                                                className="event"
                                                            >
                                                                <i className="icon-check-box"></i>
                                                                <span className="event_title">
                                                                    {
                                                                        ev.event_name
                                                                    }
                                                                </span>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </li>
                                        }
                                    </>
                                )),
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default T1;

{
    /* <li>
                                <time dateTime="2022-02-01">1</time>
                                <div className="text-info">
                                    <span className="event_title">
                                        <i className="icon-check-box"></i>
                                        Bangla Exam
                                    </span>
                                </div>
                                <div className="text-info">
                                    <i className="icon-check-box"></i>
                                    <span className="event_title">
                                        Class Present
                                    </span>
                                </div>
                            </li>
                            <li className="absent">
                                <time dateTime="2022-02-02">2</time>
                                <div className="text-warning">
                                    <i className="icon-close"></i>
                                    <span className="event_title">
                                        Class Present
                                    </span>
                                </div>
                            </li> */
}

{
    /* {[
                    {
                        title: 'নোটিশ',
                        value: 7,
                    },
                    {
                        title: 'বাড়ির কাজ',
                        value: 2,
                    },
                    {
                        title: 'এই মাসের উপস্থিতি',
                        value: '78 / 88',
                    },
                    {
                        title: 'উপস্থিতি %',
                        value: 89,
                    },
                    {
                        title: 'লাইব্রেরী বই ইস্যু',
                        value: 3,
                    },
                    {
                        title: 'ফিস বকেয়া',
                        value: 1780,
                    },
                ].map((i) => {
                    return (
                        <div
                            className="card w-100 mb-0"
                            data-intro="This is card"
                        >
                            <div className="business-top-widget card-body">
                                <h5 className="mb-2">{i.title}</h5>
                                <div className="media d-inline-flex">
                                    <div className="media-body">
                                        <h2 className="total-value m-0 counter">
                                            {i.value}
                                        </h2>
                                    </div>
                                    <i
                                        style={{ opacity: '.4' }}
                                        className="icon-bar-chart font-info align-self-center"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    );
                })} */
}
