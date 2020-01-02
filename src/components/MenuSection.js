// @flow
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import type { MenuItem } from '../App';

type MenuSectionProps = {
    menu: MenuItem,
};
const MenuSection = ({ menu }: MenuSectionProps) => {
    const responsive = {
        500: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
    };

    const renderMenuCard = () =>
        menu.map(({ subTitle, title, menuItem, type, mainIcon }) => (
            <div key={subTitle} className={`section-menu__card section-menu__card--${type}`}>
                <div className="section-menu__card-type" />
                <div className="section-menu__main-icon" style={{ backgroundImage: `url(${mainIcon})` }} />
                <div className="section-menu__inner-wrap">
                    <div className="section-menu__header-wrap">
                        <p className="section-menu__title">{title}</p>
                        <p className="section-menu__subtitle">{subTitle}</p>
                    </div>
                    <AliceCarousel dotsDisabled responsive={responsive} className="section-menu__slider">
                        {menuItem.map(({ price, name, description, menuIcon }) => (
                            <div key={price} className="section-menu__sub-card">
                                <div
                                    className="section-menu__menu-icon"
                                    style={{ backgroundImage: `url(${menuIcon})` }}
                                />
                                <div className="section-menu__sub-card-wrap">
                                    <div className="section-menu__inner-content">
                                        <p className="section-menu__price">{price}</p>
                                        <p className="section-menu__menu-name">{name}</p>
                                        <p className="section-menu__description">{description}</p>
                                    </div>
                                    <button className="section-menu__button">детальніше</button>
                                </div>
                            </div>
                        ))}
                    </AliceCarousel>
                </div>
            </div>
        ));

    return (
        <div className="section-menu">
            <figure className="section-menu__headline-icon" />
            <h2 className="section-menu__headline">FRED&FRESH МЕНЮ</h2>
            <div>{renderMenuCard()}</div>
        </div>
    );
};

export default MenuSection;
