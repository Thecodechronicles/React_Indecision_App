import React from 'react';
import ReactDOM from 'react-dom';

// var template = React.createElement('p', {}, 'Hello ! How Are You ? Fine, Thankyou !!');
var template = <p>Hello ! How Are You ? Fine, Thank You !!</p>
ReactDOM.render(template, document.getElementById('reactApp'));

console.log('This app is running !');