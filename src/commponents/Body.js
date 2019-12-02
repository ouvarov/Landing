// @flow

import React from 'react';
import Header from './Header';
import MainSection from './MainSection';

type BodyProps = {
    isMenu: Array<Object>,
};
const Body = ({ isMenu }: BodyProps) => (
    <div className="body">
        <Header isMenu={isMenu} />
        <MainSection />
    </div>
);

export default Body;
