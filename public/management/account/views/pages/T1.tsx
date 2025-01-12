import React from 'react';
export interface Props {}

const T1: React.FC<Props> = (props: Props) => {
    return (
        <div className="custom_scroll">
            <div className="name my-3">
                <h2>Muhammad Shafiq A</h2>
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
                {[
                    'কারেন্ট ব্যালেঞ্চ',
                    'আজকের ইনকাম',
                    'আজকের খরচ',
                    'এই মাসের ইনকাম',
                    'এই মাসের খরচ',
                    'টোটাল খরচ',
                    'বকেয়া',
                ].map((i) => {
                    return (
                        <div className="card w-100" data-intro="This is card">
                            <div className="business-top-widget card-body">
                                <h5 className="mb-2">{i}</h5>
                                <div className="media d-inline-flex">
                                    <div className="media-body">
                                        <h2 className="total-value m-0 counter">
                                            {Math.round(Math.random() * 1000)}
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
                })}
            </div>
            {/* attendance calendar */}
            <div className="calendar_dashboard">
                <div className="card mx-auto">
                    <div className="card-header d-flex justify-content-between flex-wrap">
                        <h5>
                            <i className="icon-calendar me-2"></i>
                            Academic Calendar
                        </h5>
                        <h5>June, 2024 Events</h5>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li>
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
                            </li>
                            <li>
                                <time dateTime="2022-02-03">3</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-04">4</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-05">5</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-06">6</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-07">7</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-08">8</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-09">9</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-10">10</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-11">11</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-12">12</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-13">13</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-14">14</time>
                                <div className="text-warning">
                                    <i className="icon-check-box"></i>
                                    <span className="event_title">
                                        Eid vacation
                                    </span>
                                </div>
                            </li>
                            <li>
                                <time dateTime="2022-02-15">15</time>
                                <div className="text-warning">
                                    <i className="icon-check-box"></i>
                                    <span className="event_title">
                                        Eid vacation
                                    </span>
                                </div>
                            </li>
                            <li>
                                <time dateTime="2022-02-16">16</time>
                                <div className="text-warning">
                                    <i className="icon-check-box"></i>
                                    <span className="event_title">
                                        Eid vacation
                                    </span>
                                </div>
                            </li>
                            <li>
                                <time dateTime="2022-02-17">17</time>
                                <div className="text-warning">
                                    <i className="icon-check-box"></i>
                                    <span className="event_title">
                                        Eid vacation
                                    </span>
                                </div>
                            </li>
                            <li>
                                <time dateTime="2022-02-18">18</time>
                            </li>
                            <li className="today">
                                <time dateTime="2022-02-19">19</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-20">20</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-21">21</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-22">22</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-23">23</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-24">24</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-25">25</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-26">26</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-27">27</time>
                            </li>
                            <li>
                                <time dateTime="2022-02-28">28</time>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default T1;
