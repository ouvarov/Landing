// @flow

import React from 'react';
import logo from './logo.svg';
import './App.sass';

const getArray = async () => {
    // fetch('https://drive.google.com/file/d/193Tn_sphaeTOC-KvGtfvLpif7lE9MLxA/view?usp=sharing')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data); // Prints result from `response.json()` in getRequest
    //     })
    //     .catch(error => console.error(error));
    const request = new Request('https://github.com/ouvarov/React-Build/blob/master/array');

    fetch(request)
        .then(response =>
            // Convert to JSON
            response.json(),
        )
        .then(j => {
            // Yay, `j` is a JavaScript object
            console.log(JSON.stringify(j));
        })
        .catch(error => {
            console.log('Request failed', error);
        });
};

getArray();

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
