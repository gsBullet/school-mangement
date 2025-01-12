import React from 'react';
import { Link, Outlet } from 'react-router-dom';
export interface Props {}

const Index: React.FC<Props> = (props: Props) => {
    return (
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
                            Doctor Jobayer Ahmed
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
                            <Link to="/profile/major-information">
                                Major informations
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile/basic-information">
                                Basic informations
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
    );
};

export default Index;
