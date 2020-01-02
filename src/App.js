// @flow

import React from 'react';
import './index.sass';
import Body from './components/Body';
import Loading from './components/Loading';

export type NavItem = { item: string, link: string };
export type MenuItem = {
    subTitle: string,
    menuItem: Array<Object>,
    price: string,
    title: string,
    description: string,
    menuIcon: string,
    mainIcon: string,
};

type AppProps = {};

type AppState = {
    loaded: boolean,
    nav: NavItem[],
    menu: MenuItem[],
};

class App extends React.Component<AppProps, AppState> {
    state = {
        loaded: false,
        nav: [],
        menu: [],
    };
    componentDidMount() {
        const arrayApi = `https://api.github.com/repos/ouvarov/React-Build/contents/array.json`;

        fetch(arrayApi, { method: 'GET', credentials: 'same-origin' })
            .then(res => res.json())
            .then(data => decodeURIComponent(escape(window.atob(data.content))))
            .then(dataJson => JSON.parse(dataJson))
            .then(({ nav, menu }) => {
                this.setState({ nav, menu, loaded: true });
            });
    }

    render() {
        return (
            <div className="App">
                {this.state.loaded ? <Body navItem={this.state.nav} menu={this.state.menu} /> : <Loading />}
            </div>
        );
    }
}
export default App;
