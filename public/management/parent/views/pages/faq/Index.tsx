import React, { useState, useEffect } from 'react';
import { anyObject } from '../../../common_types/object';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
export interface Props {}
const Index: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<any>({});
    const { id } = useParams();

    useEffect(() => {
        // Function to fetch data
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/v1/faqs/all`);
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
    return (
        <div className="admin_dashboard">
            <div className="accordion" id="accordionExample">
                {data?.length &&
                    data.map((i: { [key: string]: any }, index) => {
                        return (
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className={
                                            index === 0
                                                ? 'accordion-button'
                                                : 'accordion-button collapsed'
                                        }
                                        // className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        // data-bs-target="#collapseOne"
                                        data-bs-target={`#collapse${i.id}`}
                                        // aria-expanded="false"
                                        aria-expanded={
                                            index === 0 ? true : false
                                        }
                                        aria-controls={`collapse${i.id}`}
                                    >
                                        Question no #{index + 1} {i.question}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${i.id}`}
                                    className={
                                        index === 0
                                            ? 'accordion-collapse collapse show'
                                            : 'accordion-collapse collapse'
                                    }
                                    // className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        {i.answer}
                                    </div>
                                </div>
                            </div>
                            // <div className="accordion-item">
                            //     <h2 className="accordion-header">
                            //         <button
                            //             className="accordion-button collapsed"
                            //             type="button"
                            //             data-bs-toggle="collapse"
                            //             data-bs-target="#collapseThree"
                            //             aria-expanded="false"
                            //             aria-controls="collapseThree"
                            //         >
                            //             Question no #3
                            //         </button>
                            //     </h2>
                            //     <div
                            //         id="collapseThree"
                            //         className="accordion-collapse collapse"
                            //         data-bs-parent="#accordionExample"
                            //     >
                            //         <div className="accordion-body">
                            //             <strong>
                            //                 This is the third item's accordion body.
                            //             </strong>{' '}
                            //             It is hidden by default, until the collapse plugin
                            //             adds the appropriate classes that we use to style
                            //             each element. These classes control the overall
                            //             appearance, as well as the showing and hiding via
                            //             CSS transitions. You can modify any of this with
                            //             custom CSS or overriding our default variables. It's
                            //             also worth noting that just about any HTML can go
                            //             within the <code>.accordion-body</code>, though the
                            //             transition does limit overflow.
                            //         </div>
                            //     </div>
                            // </div>
                            // <div className="accordion-item">
                            //     <h2 className="accordion-header">
                            //         <button
                            //             className="accordion-button collapsed"
                            //             type="button"
                            //             data-bs-toggle="collapse"
                            //             data-bs-target="#collapseFour"
                            //             aria-expanded="false"
                            //             aria-controls="collapseFour"
                            //         >
                            //             Question no #4
                            //         </button>
                            //     </h2>
                            //     <div
                            //         id="collapseFour"
                            //         className="accordion-collapse collapse"
                            //         data-bs-parent="#accordionExample"
                            //     >
                            //         <div className="accordion-body">
                            //             <strong>
                            //                 This is the third item's accordion body.
                            //             </strong>{' '}
                            //             It is hidden by default, until the collapse plugin
                            //             adds the appropriate classes that we use to style
                            //             each element. These classes control the overall
                            //             appearance, as well as the showing and hiding via
                            //             CSS transitions. You can modify any of this with
                            //             custom CSS or overriding our default variables. It's
                            //             also worth noting that just about any HTML can go
                            //             within the <code>.accordion-body</code>, though the
                            //             transition does limit overflow.
                            //         </div>
                            //     </div>
                            // </div>
                            // <div className="accordion-item">
                            //     <h2 className="accordion-header">
                            //         <button
                            //             className="accordion-button collapsed"
                            //             type="button"
                            //             data-bs-toggle="collapse"
                            //             data-bs-target="#collapseFive"
                            //             aria-expanded="false"
                            //             aria-controls="collapseFive"
                            //         >
                            //             Question no #5
                            //         </button>
                            //     </h2>
                            //     <div
                            //         id="collapseFive"
                            //         className="accordion-collapse collapse"
                            //         data-bs-parent="#accordionExample"
                            //     >
                            //         <div className="accordion-body">
                            //             <strong>
                            //                 This is the third item's accordion body.
                            //             </strong>{' '}
                            //             It is hidden by default, until the collapse plugin
                            //             adds the appropriate classes that we use to style
                            //             each element. These classes control the overall
                            //             appearance, as well as the showing and hiding via
                            //             CSS transitions. You can modify any of this with
                            //             custom CSS or overriding our default variables. It's
                            //             also worth noting that just about any HTML can go
                            //             within the <code>.accordion-body</code>, though the
                            //             transition does limit overflow.
                            //         </div>
                            //     </div>
                            // </div>
                            // <div className="accordion-item">
                            //     <h2 className="accordion-header">
                            //         <button
                            //             className="accordion-button collapsed"
                            //             type="button"
                            //             data-bs-toggle="collapse"
                            //             data-bs-target="#collapseSix"
                            //             aria-expanded="false"
                            //             aria-controls="collapseSix"
                            //         >
                            //             Question no #6
                            //         </button>
                            //     </h2>
                            //     <div
                            //         id="collapseSix"
                            //         className="accordion-collapse collapse"
                            //         data-bs-parent="#accordionExample"
                            //     >
                            //         <div className="accordion-body">
                            //             <strong>
                            //                 This is the third item's accordion body.
                            //             </strong>{' '}
                            //             It is hidden by default, until the collapse plugin
                            //             adds the appropriate classes that we use to style
                            //             each element. These classes control the overall
                            //             appearance, as well as the showing and hiding via
                            //             CSS transitions. You can modify any of this with
                            //             custom CSS or overriding our default variables. It's
                            //             also worth noting that just about any HTML can go
                            //             within the <code>.accordion-body</code>, though the
                            //             transition does limit overflow.
                            //         </div>
                            //     </div>
                            // </div>
                            // <div className="accordion-item">
                            //     <h2 className="accordion-header">
                            //         <button
                            //             className="accordion-button collapsed"
                            //             type="button"
                            //             data-bs-toggle="collapse"
                            //             data-bs-target="#collapseSeven"
                            //             aria-expanded="false"
                            //             aria-controls="collapseSeven"
                            //         >
                            //             Question no #6
                            //         </button>
                            //     </h2>
                            //     <div
                            //         id="collapseSeven"
                            //         className="accordion-collapse collapse"
                            //         data-bs-parent="#accordionExample"
                            //     >
                            //         <div className="accordion-body">
                            //             <strong>
                            //                 This is the third item's accordion body.
                            //             </strong>{' '}
                            //             It is hidden by default, until the collapse plugin
                            //             adds the appropriate classes that we use to style
                            //             each element. These classes control the overall
                            //             appearance, as well as the showing and hiding via
                            //             CSS transitions. You can modify any of this with
                            //             custom CSS or overriding our default variables. It's
                            //             also worth noting that just about any HTML can go
                            //             within the <code>.accordion-body</code>, though the
                            //             transition does limit overflow.
                            //         </div>
                            //     </div>
                            // </div>
                            // </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Index;
