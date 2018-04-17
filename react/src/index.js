/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Auth from './authorization/auth0';

// export const auth = new Auth();
// let state = {};

// window.setState = (changes) => {
//     state = Object.assign({}, state, changes);
// };

// let initialState = {
//     location: location.pathname.replace(/^\/?|\/$/g,"")
// };

// window.setState(initialState);
ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();

export { render };
