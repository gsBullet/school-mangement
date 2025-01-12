import React from 'react';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import commonStore, {
    commnStoreInitialState,
} from '../../../store/slices/common_slice';
export interface Props {}

const AppNavRight: React.FC<Props> = (props: Props) => {
    const state: typeof commnStoreInitialState = useSelector(
        (state: RootState) => state['common_store'],
    );

    return (
        <>
            <ul className="navigation_list">
                <li className="icon_link_li text_line">
                    cached {state.cached} KB
                </li>
                <li className="icon_link_li">
                    <a href="#dashboard#" className="navigation_link">
                        <span className="material-symbols-outlined fill">
                            expand_less
                        </span>
                    </a>
                </li>
                <li className="icon_link_li">
                    <a
                        href="#dashboard#"
                        onClick={() => ''}
                        className="navigation_link"
                    >
                        <span className="material-symbols-outlined fill">
                            fullscreen
                        </span>
                    </a>
                </li>
                {/* <li className="icon_link_li">
                    <a href="#dashboard#" className="navigation_link">
                        <span className="material-symbols-outlined fill">
                            settings
                        </span>
                    </a>
                </li> */}
                {/* <li className="icon_link_li">
                    <a href="#dashboard#" className="navigation_link">
                        <span className="material-symbols-outlined fill">
                            wifi
                        </span>
                    </a>
                </li> */}
                {/* <li className="nave_date_time">
                    <a href="#dashboard#" className="">
                        <span>01:18:56</span>
                        <span className="meridian">am</span>
                        <span> &nbsp; Mon 22 Apr</span>
                    </a>
                </li> */}
            </ul>
        </>
    );
};

export default AppNavRight;
