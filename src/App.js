// @flow

import React from 'react';
import Header from './commponents/Header';
import './App.sass';
import './sass/style.sass';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            menu: {},
        };
    }
    async componentDidMount() {
        const fetchArray = await fetch(
            `https://api.github.com/repos/ouvarov/React-Build/contents/array.json

    `,
            { method: 'GET', credentials: 'same-origin' },
        );
        const data = await fetchArray.json();
        const dataDecode = decodeURIComponent(escape(window.atob(data.content)));
        const dataJson = JSON.parse(dataDecode);

        console.log(dataJson.menu);
        // noinspection UnreachableCodeJS
        this.setState({
            menu: dataJson.menu,
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div>{this.state.menu.toString()}</div>
            </div>
        );
    }
}
export default App;
