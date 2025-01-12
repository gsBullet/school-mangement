import React from 'react';
import AppNavRight from './AppNavRight';
import NavigationList from './NavigationList';
import { Link } from 'react-router-dom';

export interface Props {}

const AppNav: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div className="app_nav">
                <div className="left">
                    <ul className="navigation_list">
                        <NavigationList></NavigationList>
                        {/* <!-- <li className="icon_link_li">
                <a href="#" className="navigation_link">
                    <span className="material-symbols-outlined fill">search</span>
                </a> 
            </li> -->*/}
                        <li className="icon_link_li">
                            <Link
                                aria-current="page"
                                to="/"
                                className="router-link-active router-link-exact-active navigation_link"
                            >
                                <span className="material-symbols-outlined fill">
                                    home
                                </span>
                            </Link>
                        </li>
                        <li className="icon_link_li">
                            <a href="#dashboard#" className="navigation_link">
                                <span className="material-symbols-outlined fill">
                                    mail
                                </span>
                            </a>
                        </li>
                        <li className="icon_link_li">
                            <a href="#dashboard#" className="navigation_link">
                                <span className="material-symbols-outlined fill">
                                    event
                                </span>
                            </a>
                        </li>
                        <li className="icon_link_li">
                            <a href="#dashboard#" className="navigation_link">
                                <span className="material-symbols-outlined fill">
                                    checklist
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="active_window">
                    <ul>
                        {/* <!-- <li>{{ active_windows.length }}</li> --> */}
                    </ul>
                </div>
                <div className="right">
                    <AppNavRight></AppNavRight>
                </div>
            </div>
        </>
    );
};

export default AppNav;
