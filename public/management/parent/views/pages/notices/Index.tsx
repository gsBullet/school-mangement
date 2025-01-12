import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../common_types/object';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Function to fetch data
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/v1/notices/user/parents');
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
    function yearFormate(date: string) {
        return moment(date).year();
    }
    function dateFormate(date: string) {
        return moment(date).date();
    }
    function monthFormate(date: string) {
        return moment(date).format('MMM');
    }
    function truncateWords(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    }
    return (
        <div className="admin_dashboard">
            <div className="row my-4">
                <div className="col-md-6">
                    <div className="notice_area_content">
                        <ul>
                            {data?.length &&
                                data.map((i: { [key: string]: any }) => {
                                    return (
                                        <li>
                                            <div className="notice">
                                                <div className="date_area">
                                                    <div className="day_and_month_area">
                                                        <p className="text_day">
                                                            {dateFormate(
                                                                i.updated_at,
                                                            )}
                                                        </p>
                                                        <p className="text_month">
                                                            {monthFormate(
                                                                i.updated_at,
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="year_area">
                                                        <p className="text_year">
                                                            {yearFormate(
                                                                i.updated_at,
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="notice_title_and_description_area">
                                                    <div className="notice_title">
                                                        {/* <a
                                                            href="notice_details.html"
                                                            className="title_text"
                                                        >
                                                            9, 10, 11 তারিখ
                                                            মাদরাসা 9, 10, 11
                                                            তারিখ মাদরাসা বন্ধ
                                                            থাকবে
                                                        </a> */}
                                                        <Link
                                                            className="title_text"
                                                            to={`/notices/details/${i.id}`}
                                                        >
                                                            {i.title}
                                                        </Link>
                                                    </div>
                                                    <div className="notice_description">
                                                        <span className="description_text">
                                                            {truncateWords(
                                                                i.description,
                                                                15,
                                                            )}
                                                            <Link
                                                                className="read_more_area"
                                                                to={`/notices/details/${i.id}`}
                                                            >
                                                                Read more ...
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
