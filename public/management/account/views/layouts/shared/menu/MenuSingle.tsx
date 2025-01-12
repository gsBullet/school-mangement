import React from 'react';
import { Link } from 'react-router-dom';
export interface Props {
    to: string;
    label: string;
    icon: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const MenuSingle: React.FC<Props> = (props: Props) => {
    return (
        <>
            <li>
                <Link
                    to={props.to}
                    onClick={props.onClick}
                    className="sidebar-header"
                >
                    <i className={props.icon} />
                    <span> {props.label}</span>
                </Link>
            </li>
        </>
    );
};

export default MenuSingle;
