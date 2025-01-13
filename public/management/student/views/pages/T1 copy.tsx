import React, { useState, useEffect } from 'react';
import { anyObject } from '../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const T1: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState();
    const [accdemicCalander, setAccademicCalander] = useState<any[]>([]);
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
                        {/* <div>
                            <ul>
                                {days.map((day, index) => (
                                    <li
                                        key={index}
                                        className=" fs-4 event_title"
                                    >
                                        {day}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        <ul>
                            {accdemicCalander?.map((day, index) => (
                                <li key={index}>
                                    <time dateTime={day.date}>
                                        {moment(day.date).format('D')}{' '}
                                        {/* Display day of the month */}
                                    </time>
                                    <div
                                        className={`text-${day.events.length ? 'warning' : 'info'}`}
                                    >
                                        {day.events.map((event, eventIndex) => (
                                            <div
                                                key={eventIndex}
                                                className="event"
                                            >
                                                <i className="icon-check-box"></i>
                                                <span className="event_title">
                                                    {event.event_name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="text-info">{day.day}</div> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default T1;
