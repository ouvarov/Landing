// @flow

import React from 'react';

const MainSection = () => (
    <section className="main">
        <div className="main__grid">
            <p className="main__headline main__headline--highlighted">Ми потурбуємось про ваше</p>
            <p className="main__headline main__headline--big">здорове та якісне харчування</p>
            <div className="main__footer">
                <p className="main__headline"> а вільний час залиште</p>
                <p className="main__headline main__headline--offset">
                    для нових <span className="main__headline main__headline--big">звершень!</span>
                </p>
            </div>
            <figure className="main__images" />
        </div>
    </section>
);

export default MainSection;
