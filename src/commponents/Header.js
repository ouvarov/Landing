// @flow

import React from 'react';

const Header = () => (
    <div className="header">
        <div className="container">
            <div className="header__menu">
                <a href="/" className="header__link">
                    головна
                </a>
                <a href="/" className="header__link">
                    чому ми
                </a>
                <a href="/" className="header__link">
                    меню
                </a>
                <a href="/" className="header__link">
                    медіа
                </a>
                <a href="/" className="header__link">
                    сервіс
                </a>
            </div>
            <div className="header__menu">
                <a href="/" className="header__link">
                    кухарі
                </a>
                <a href="/" className="header__link">
                    ми на мапі
                </a>
                <a href="/" className="header__link">
                    новини
                </a>
                <a href="/" className="header__link">
                    напишіть нам
                </a>
            </div>
        </div>
    </div>
);

export default Header;
