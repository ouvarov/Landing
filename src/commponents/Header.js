// @flow

import React from 'react';

type HeaderProps = {
    menuItem: () => void,
};

const Header = ({ menuItem }: HeaderProps) => (
    <div className="header">
        <div className="container">
            <div className="header__menu">{menuItem.slice(0, 5)}</div>
            <div className="header__menu">{menuItem.slice(5, 8)}</div>
        </div>
    </div>
);

export default Header;
