import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


let render = ()=>{
    ReactDOM.render(<App />, document.getElementById('root'));
};

render(); // render the application

registerServiceWorker();

export { render };
