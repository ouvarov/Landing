// @flow

import React from 'react';
import Header from './Header';

type BodyProps = {
    isMenu: Array<Object>,
};
const Body = ({ isMenu }: BodyProps) => (
    <div className="body">
        <Header isMenu={isMenu} />
    </div>
);

export default Body;
