// @flow

import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import AboutSection from './AboutSection';
import MenuSection from './MenuSection';
import type { NavItemType, MenuItem } from '../App';

type BodyProps = {
    navItem: NavItemType,
    menu: MenuItem,
};
const Body = ({ navItem, menu }: BodyProps) => (
    <div className="body">
        <Header navItem={navItem} />
        <MainSection />
        <AboutSection />
        <MenuSection menu={menu} />
    </div>
);

export default Body;
