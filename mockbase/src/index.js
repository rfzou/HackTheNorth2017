import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Landing from './Landing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Landing />, document.getElementById('root'));
registerServiceWorker();