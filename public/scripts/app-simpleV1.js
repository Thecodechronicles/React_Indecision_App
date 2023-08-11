'use strict';

// replaced by: ./indecision-app/src/app.js
console.log('app.js is running !');

function clickAction() {
    //<button> onclick function
    console.log('clicked !!');
}

var message = 'Welcome to React !!';
var messageArr = ['abc', ' ijk'];
var messageObj = {
    abc: 'plj',
    ijk: 11
};

var template = React.createElement(
    'div',
    null,
    messageArr,
    [messageArr],
    React.createElement(
        'h1',
        { style: { color: "red" } },
        'Hello World!'
    ),
    React.createElement(
        'p',
        null,
        'This is a React App ! ',
        messageArr
    ),
    React.createElement(
        'h2',
        null,
        React.createElement(
            'p',
            null,
            'Hello !!'
        )
    ),
    React.createElement(
        'h2',
        null,
        React.createElement(
            'p',
            null,
            'Hi !!'
        )
    ),
    undefined,
    messageObj.abc ? React.createElement(
        'p',
        null,
        messageObj.abc
    ) : undefined,
    messageObj.ijk == 11 && React.createElement(
        'h4',
        null,
        messageObj.ijk
    ),
    React.createElement(
        'button',
        { type: 'submit', onClick: clickAction },
        'Hi ! Click this !!'
    )
);

var approot = document.getElementById('reactApp');

ReactDOM.render(template, approot);
