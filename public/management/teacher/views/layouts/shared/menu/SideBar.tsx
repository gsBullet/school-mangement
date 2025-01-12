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
                <MenuSingle
                    to="/profile/major-information"
                    icon="icon-user"
                    label="Profile"
                />
                <MenuSingle
                    to="/attendance"
                    icon="icon-receipt"
                    label="Attendance"
                />
                <MenuSingle to="/student" icon="icon-receipt" label="Student" />
                <MenuSingle
                    to="/class-attendance"
                    icon="icon-receipt"
                    label="Class Attendance"
                />
                <MenuSingle
                    to="/class-routine"
                    icon="icon-calendar"
                    label="Class Routine"
                />
                <MenuSingle
                    to="/course-materials"
                    icon="icon-receipt"
                    label="Course Materials"
                />

                <MenuSingle
                    to="/exam-routine"
                    icon="icon-clipboard"
                    label="Exam Routine"
                />
                <MenuSingle
                    to="/hall-guard-routine"
                    icon="icon-clipboard"
                    label="Hall Guard Routine"
                />
                <MenuSingle
                    to="/result"
                    icon="icon-book"
                    label="Student Result"
                />

                {/* sdfds */}

                {/* <MenuSingle to="/" icon="icon-receipt" label="Home" /> */}
                <MenuSingle
                    to="/assignment"
                    icon="icon-receipt"
                    label="Assignment"
                />
                <MenuSingle
                    to="/assignments-marking"
                    icon="icon-receipt"
                    label="Assignment Marking"
                />

                {/* <MenuDropDown
                    section_title=""
                    group_title="Fee"
                    icon="icon-money"
                >
                    <MenuDropDownItem label="Payment History" to="/fees" />
                    <MenuDropDownItem label="Due List" to="/fees/dues" />
                    <MenuDropDownItem label="Pay Fees" to="/fees/pay" />
                </MenuDropDown> */}
                <MenuSingle
                    to="/leave-application/approved"
                    icon="icon-notepad"
                    label="Leave Application"
                />
                {/* <MenuSingle
                    to="/academic-resources"
                    icon="icon-server"
                    label="Academic Resources"
                /> */}
                <MenuSingle to="/notices" icon="icon-bell" label="Notices" />
                {/* <MenuSingle to="/" icon="icon-bookmark-alt" label="Reports" /> */}

                <MenuSingle
                    to="/settings"
                    icon="icon-receipt"
                    label="Settings"
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
