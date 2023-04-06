import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

console.log('app is running !');

let appRoot = document.getElementById('reactApp');
ReactDOM.render(<App />, appRoot);
