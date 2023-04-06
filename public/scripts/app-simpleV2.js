'use strict';

console.log('app.js is running !');

function clickAction() {
    //<button> onclick function
    console.log('clicked !!');
}

function TagUsage() {
    console.log('tagUsage test');
    return React.createElement(
        'h1',
        null,
        'Hello Again !!'
    );
}

function Template() {

    var message = 'Welcome to React !!';
    var messageArr = ['abc', ' ijk'];
    var messageObj = {
        abc: 'plj',
        ijk: 11
    };

    return React.createElement(
        'div',
        null,
        messageArr,
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
        ),
        React.createElement(TagUsage, null)
    );
}

var approot = document.getElementById('reactApp');

ReactDOM.render(React.createElement(Template, null), approot);
