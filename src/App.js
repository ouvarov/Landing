// @flow

import React from 'react';
import './index.sass';
import Body from './components/Body';
import Loading from './components/Loading';

class App extends React.Component {
    state = {
        loaded: false,
        nav: [],
    };
    componentDidMount() {
        const arrayApi = `https://api.github.com/repos/ouvarov/React-Build/contents/array.json`;

        fetch(arrayApi, { method: 'GET', credentials: 'same-origin' })
            .then(res => res.json())
            .then(data => decodeURIComponent(escape(window.atob(data.content))))
            .then(dataJson => JSON.parse(dataJson))
            .then(({ nav }) => {
                this.setState({ nav });
                this.setState({ loaded: true });
            });
    }

    render() {
        return <div className="App">{this.state.loaded ? <Body nav={this.state.nav} /> : <Loading />}</div>;
    }
}
export default App;
