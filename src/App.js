// @flow

import React from 'react';
import Header from './commponents/Header';
import './App.sass';
import './sass/style.sass';

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
            .then(menu => this.setState({ menu: menu.menu }))
            .then(menuConsole => console.log(menuConsole));
    }
    render() {
        return (
            <div className="App">
                <Header isMenu={this.state.menu} />
            </div>
        );
    }
}
export default App;
