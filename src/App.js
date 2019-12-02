// @flow

import React from 'react';
import './index.sass';
import Body from './commponents/Body';
import Loading from './commponents/Loading';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            menu: [],
        };
    }
    async componentDidMount() {
        fetch(
            `https://api.github.com/repos/ouvarov/React-Build/contents/array.json

    `,
            { method: 'GET', credentials: 'same-origin' },
        )
            .then(res => res.json())
            .then(data => decodeURIComponent(escape(window.atob(data.content))))
            .then(dataJson => JSON.parse(dataJson))
            .then(menu => this.setState({ menu: menu.menu }));
    }

    render() {
        return <div className="App">{this.state === '' ? <Loading /> : <Body isMenu={this.state.menu} />}</div>;
    }
}
export default App;
