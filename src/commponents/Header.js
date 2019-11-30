// @flow

import React from 'react';

type HeaderProps = {
    isMenu: Array<Object>,
};
const Header = ({ isMenu }: HeaderProps) => {
    const menuItem = () =>
        isMenu.map(({ link, item }) => (
            <a key={link} href={link}>
                {item}
            </a>
        ));

    console.log(isMenu);
    return (
        <div className="header">
            <div className="header__grid">
                {/* <div className="header__list">{menuItem.slice(0, 5)}</div> */}
                {/* <div className="header__list">{menuItem.slice(5, 8)}</div> */}
            </div>
        </div>
    );
};

export default Header;
