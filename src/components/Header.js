// @flow

import React from 'react';

type HeaderNavItem = {
    link: string,
    item: string,
};
type HeaderProps = {
    nav: HeaderNavItem[],
};
const Header = ({ nav }: HeaderProps) => {
    const renderNavItem = () =>
        nav.map(({ link, item }) => (
            <a key={link} href={link} className="header__item">
                {item}
            </a>
        ));
    return (
        <div className="header">
            <div className="header__grid">
                <nav className="header__list">{renderNavItem().slice(0, 5)}</nav>
                <div className="header__logo-wrap">
                    <i className="header__logo" />
                </div>
                <nav className="header__list">{renderNavItem().slice(5, 9)}</nav>
            </div>
        </div>
    );
};

export default Header;
