/* eslint-disable no-undef */
import React, { useState } from 'react';
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
            const response = await axios.post('/api/v1/auth/logout');
            console.log('response123', response);
            // if(response.status)
        } catch (error) {
            setError(error);
        }
    };

    return (
        <>
            <ul className="sidebar-menu">
                <MenuSingle to="/" icon="icon-home" label="Dashboard" />
                <MenuSingle to="/accounts" icon="icon-user" label="Accounts" />
                <MenuSingle
                    to="/income-entry"
                    icon="icon-money"
                    label="Income entry"
                />
                <MenuSingle
                    to="/fees-collection"
                    icon="icon-money"
                    label="Fees collection"
                />
                <MenuSingle
                    to="/expense-entry"
                    icon="icon-user"
                    label="Expense entry"
                />
                <MenuSingle
                    to="/account-category"
                    icon="icon-user"
                    label="Account Category"
                />
                <MenuSingle to="/credit" icon="icon-user" label="Credit" />
                <MenuSingle to="/debit" icon="icon-money" label="Debit" />
                <MenuSingle
                    to="/income-statement"
                    icon="icon-user"
                    label="Income statement"
                />
                <MenuSingle
                    to="/month-wise-statement"
                    icon="icon-user"
                    label="Month wise statement"
                />
                <MenuSingle to="/journal" icon="icon-user" label="Journal" />
                {/* <MenuSingle to="/ledger" icon="icon-user" label="Ledger" /> */}
                <MenuSingle
                    to="/profit-loss"
                    icon="icon-user"
                    label="Profit And Loss"
                />
                <MenuSingle
                    to="/analytics"
                    icon="fa fa-bar-chart"
                    label="analytics"
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
