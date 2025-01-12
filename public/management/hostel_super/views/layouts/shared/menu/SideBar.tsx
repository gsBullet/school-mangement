/* eslint-disable no-undef */
import React from 'react';
import MenuDropDown from './MenuDropDown';
import MenuDropDownItem from './MenuDropDownItem';
import MenuSingle from './MenuSingle';
export interface Props {}

const SideBar: React.FC<Props> = (props: Props) => {
    setTimeout(() => {
        init_nav_action();
        active_link(window.location.href);
    }, 1000);

    return (
        <>
            <ul className="sidebar-menu">
                <MenuSingle to="/" icon="icon-home" label="Dashboard" />
                {/* <MenuSingle to="/profile" icon="icon-user" label="Profile" /> */}
                <MenuSingle
                    to="/student"
                    icon="icon-calendar"
                    label="Student"
                />
                <MenuSingle
                    to="/meal-management"
                    icon="icon-clipboard"
                    label="Meal Management"
                />
                <MenuSingle
                    to="/salah-management"
                    icon="icon-clipboard"
                    label="Salah Management"
                />
                <MenuSingle
                    to="/daily-activities-management"
                    icon="icon-clipboard"
                    label="Daily Activities"
                />
                {/* <MenuSingle
                    to="/facility-management"
                    icon="icon-book"
                    label="Facility Management"
                />
                <MenuSingle
                    to="/staff-management"
                    icon="icon-receipt"
                    label="Staff Management"
                /> */}
                {/* <MenuSingle to="/finance" icon="icon-receipt" label="Finance" /> */}
                {/* <MenuSingle
                    to="/health-&-safety"
                    icon="icon-receipt"
                    label="Health & Safety"
                /> */}
                {/* <MenuSingle
                    to="/communication"
                    icon="icon-receipt"
                    label="Communication"
                /> */}
                {/* <MenuSingle to="/reports" icon="icon-receipt" label="Reports" /> */}
                <MenuSingle
                    to="/complain"
                    icon="icon-receipt"
                    label="Complain"
                />

                <MenuSingle to="/" icon="icon-power-off" label="Logout" />

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
    (window as any).$(`.sidebar-submenu a`).removeClass('active');
    (window as any)
        .$(`.sidebar-submenu a[href="${url.hash}"]`)
        .addClass('active');
}
function init_nav_action() {
    var animationSpeed = 300,
        subMenuSelector = '.sidebar-submenu';
    (window as any).$('.sidebar-menu').on('click', 'li a', function (e) {
        var $this = (window as any).$(this);
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
