/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import MenuDropDown from './MenuDropDown';
import MenuDropDownItem from './MenuDropDownItem';
import MenuSingle from './MenuSingle';
import axios from 'axios';
export interface Props {}

const SideBar: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState(null);

    setTimeout(() => {
        init_nav_action();
        active_link(window.location.href);
    }, 1000);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            // fetch('/api/v1/auth/logout', {
            //     method: 'POST',
            // });
            const response = await axios.post('/api/v1/auth/logout');
            console.log('response123', response);
            // if(response.status)
        } catch (error) {
            setError(error);
            console.log('someting', error);
        }
    };
    return (
        <>
            <ul className="sidebar-menu">
                <MenuSingle to="/" icon="icon-home" label="Dashboard" />
                <MenuSingle to="/students" icon="icon-user" label="Students" />
                <MenuSingle
                    to="/add-new"
                    icon="icon-calendar"
                    label="Add New"
                />
                <MenuSingle
                    to="/payment"
                    icon="icon-calendar"
                    label="Payment"
                />

                <MenuSingle
                    onClick={handleSubmit}
                    to=""
                    icon="icon-power-off"
                    label="Logout"
                />

                {/* <li>
                    <a
                        href="http://admin.pixelstrap.com/universal/default/maintenance.html"
                        className="sidebar-header"
                    >
                        <i className="icon-settings" />
                        <span>Maintenance</span>
                    </a>
                </li> */}
            </ul>
        </>
    );
};

function active_link(hash) {
    let url = new URL(hash);
    (window as any).jQuery(`.sidebar-submenu a`).removeClass('active');
    (window as any)
        .jQuery(`.sidebar-submenu a[href="${url.hash}"]`)
        .addClass('active');
}
function init_nav_action() {
    var animationSpeed = 300,
        subMenuSelector = '.sidebar-submenu';
    (window as any).jQuery('.sidebar-menu').on('click', 'li a', function (e) {
        var $this = (window as any).jQuery(this);
        var checkElement = $this.next();
        if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass('menu-open');
            });
            checkElement.parent('li').removeClass('active');
        } else if (
            checkElement.is(subMenuSelector) &&
            !checkElement.is(':visible')
        ) {
            var parent = $this.parents('ul').first();
            var ul = parent.find('ul:visible').slideUp(animationSpeed);
            ul.removeClass('menu-open');
            var parent_li = $this.parent('li');
            checkElement.slideDown(animationSpeed, function () {
                checkElement.addClass('menu-open');
                parent.find('li.active').removeClass('active');
                parent_li.addClass('active');
            });
        }

        if (e.target && e.target.href && e.target.href.includes('http')) {
            active_link(e.target.href);
        }
    });
}

export default SideBar;
