// @flow

import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import WhyWeSection from './WhyWeSection';

type BodyProps = {
    nav: Array<Object>,
};
const Body = ({ nav }: BodyProps) => (
    <div className="body">
        <Header nav={nav} />
        <MainSection />
        <WhyWeSection />
    </div>
);

export default Body;
