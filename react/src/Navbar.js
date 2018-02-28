import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


let render = ()=>{
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
};

render(); // render the application

registerServiceWorker();

export {render};
