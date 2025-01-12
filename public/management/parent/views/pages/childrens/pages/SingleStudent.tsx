import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
export interface Props {}

const SingleStudent: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<any>([]);
    const { id } = useParams();
    console.log('user student id', id);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `/api/v1/user-students/basic-information/${id}`,
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

    console.log('newdata from single', data);

    return (
        <div className="admin_dashboard">
            <div className="admin_dashboard">
                <div className="single-info-details">
                    <div className="item-img">
                        <img
                            className="user_profile_img"
                            src="/assets/dashboard/images/avatar.png"
                            alt="teacher"
                        />
                    </div>
                    <div className="item-content">
                        <div className="header-inline item-header details_header">
                            <h3 className="text-dark-medium profile_name font-medium">
                                {data.name}
                            </h3>
                            <div className="header-elements">
                                <ul>
                                    <li>
                                        <a href="">
                                            <span className="material-symbols-outlined fill">
                                                edit_square
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="material-symbols-outlined fill">
                                                print
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="material-symbols-outlined fill">
                                                system_update_alt
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="section_naviagation">
                            <li>
                                <Link to={`/childrens/details/${id}`}>
                                    Basic informations
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/childrens/details/${id}/academic-information`}
                                >
                                    Academic informations
                                </Link>
                            </li>
                            <li>
                                <Link to={`/childrens/details/${id}/document`}>
                                    Documents
                                </Link>
                            </li>
                            <li>
                                <Link to={`/childrens/details/${id}/parent`}>
                                    Parents
                                </Link>
                            </li>
                            <li>
                                <Link to={`/childrens/details/${id}/skill`}>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link to={`/childrens/details/${id}/language`}>
                                    Languages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/childrens/details/${id}/contact-number`}
                                >
                                    Contact Numbers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/childrens/details/${id}/educational-background`}
                                >
                                    Educational Backgrounds
                                </Link>
                            </li>
                            <li>
                                <Link to={`/payment-history/children/${id}`}>
                                    {/* to={`/childrens/details/${id}/payments`}> */}
                                    Payments
                                </Link>
                            </li>
                            <li>
                                <Link to={`/childrens/details/${id}/dues`}>
                                    Dues
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/childrens/details/${id}/result-part`}
                                >
                                    Result Part
                                </Link>
                            </li>
                            <li>
                                <Link to={`/childrens/details/${id}/complain`}>
                                    Complain
                                </Link>
                            </li>
                            <li>
                                <Link to={`/childrens/details/${id}/review`}>
                                    Review
                                </Link>
                            </li>
                        </ul>
                        <div></div>
                        <div className="info-table table-responsive">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleStudent;
