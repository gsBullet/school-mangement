import React from 'react';
import setup from '../../config/setup';
import { Link } from 'react-router-dom';

export interface Props {}
const Footer: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div className="footer">
                <div className="action_btns">
                    <ul>
                        <li>
                            <Link
                                to={`/${setup.route_prefix}`}
                                className="outline"
                            >
                                <span className="material-symbols-outlined fill">
                                    arrow_back
                                </span>
                                <div className="text">Back</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;
