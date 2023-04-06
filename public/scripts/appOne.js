'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('app is running !');

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var propObj = {
                params: this.props.params,
                appInfo: this.props.appInfo
            };

            var params = propObj.params,
                appInfo = propObj.appInfo;


            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    appInfo.title
                ),
                appInfo.subtitle && React.createElement(
                    'p',
                    null,
                    appInfo.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var propObj = {
                params: this.props.params,
                appInfo: this.props.appInfo
            };

            var params = propObj.params,
                appInfo = propObj.appInfo;

            // console.log(this.props.options.length);
            // console.log(this.props.options);

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    this.props.options.length > 0 ? 'Here are the options' : 'No options'
                ),
                React.createElement(Option
                // appInfo={appInfo}
                // params={params}
                , { options: this.props.options,
                    showOption: this.props.showOption
                    // optionPicked={this.props.optionPicked}
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component3) {
    _inherits(Option, _React$Component3);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this3 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this3.removeItem = _this3.removeItem.bind(_this3);
        _this3.appInfo = _this3.props.appInfo;
        _this3.params = _this3.props.params;

        // this.state = {
        //     optionsList: this.props.options,
        //     showOption: this.props.showOption
        // }
        return _this3;
    }

    _createClass(Option, [{
        key: 'removeItem',
        value: function removeItem(e) {

            this.props.options.splice(e.target.parentElement.id, 1);
            // this.props.showOption = false;
            // customRender();

            // e.persist();
            // this.setState((prevState) => {
            //     // console.log(prevState.optionsList.splice(e.target.parentElement.id, 1));
            //     return {
            //         optionsList: prevState.optionsList.splice(e.target.parentElement.id)
            //     }
            // });

            // console.log('propsOptions: ', this.props.options);
            // console.log('stateOptions: ', this.state.optionsList);
            // this.props.options.push(11);
            // console.log('propsOptions After: ', this.props.options);
            // console.log('stateOptions After: ', this.state.optionsList);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            // console.log('propsOptions: ', this.props.options);
            // console.log('stateOptions: ', this.state.optionsList);
            // this.props.options.push(11);
            // console.log('propsOptions After: ', this.props.options);
            // console.log('stateOptions After: ', this.state.optionsList);

            var propObj = {
                params: this.props.params,
                appInfo: this.props.appInfo
            };

            var params = propObj.params,
                appInfo = propObj.appInfo;


            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ol',
                    null,
                    this.props.options.length > 0 && this.props.options.map(function (item, index) {
                        return React.createElement(
                            'li',
                            { key: item, id: index },
                            'Item ',
                            item,
                            ' \xA0',
                            React.createElement(
                                'button',
                                { onClick: _this4.removeItem },
                                'Remove Item'
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var Form = function (_React$Component4) {
    _inherits(Form, _React$Component4);

    function Form(props) {
        _classCallCheck(this, Form);

        // this.formHandler = this.formHandler.bind(this);
        var _this5 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this5.appInfo = _this5.props.appInfo;
        // this.options = this.props.options;
        // this.showOption = this.props.showOption;
        // this.params = this.props.params;
        _this5.formHandler = _this5.props.formHandler;
        return _this5;
    }

    _createClass(Form, [{
        key: 'render',
        value: function render() {
            var propObj = {
                params: this.props.params,
                appInfo: this.props.appInfo
            };
            var params = propObj.params,
                appInfo = propObj.appInfo;


            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.formHandler },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option',
                        this.randomProp
                    )
                ),
                React.createElement('br', null)
            );
        }
    }]);

    return Form;
}(React.Component);

var WhatDecision = function (_React$Component5) {
    _inherits(WhatDecision, _React$Component5);

    function WhatDecision(props) {
        _classCallCheck(this, WhatDecision);

        // this.pickOption = this.pickOption.bind(this);
        // this.removeAllOptions = this.removeAllOptions.bind(this);
        var _this6 = _possibleConstructorReturn(this, (WhatDecision.__proto__ || Object.getPrototypeOf(WhatDecision)).call(this, props));

        _this6.params = _this6.props.params;
        _this6.appInfo = _this6.props.appInfo;

        // this.state = {
        //     randomNumeral: 0,
        // }
        return _this6;
    }

    // pickOption() {
    //     var random = Math.floor(Math.random() * this.appInfo.options.length);
    //     this.params.optionPicked = this.appInfo.options[random];
    //     this.params.showOption = true;
    //     customRender();
    // }

    // removeAllOptions() {
    //     this.appInfo.options = [];
    //     this.params.showOption = false;
    //     customRender();
    // }

    _createClass(WhatDecision, [{
        key: 'render',
        value: function render() {
            var propObj = {
                params: this.props.params,
                appInfo: this.props.appInfo
            };

            var params = propObj.params,
                appInfo = propObj.appInfo;

            // console.log(this.constructor.name, propObj);

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { disabled: this.props.options.length === 0, onClick: this.props.pickOption },
                    'What should i do ?'
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.removeAllOptions },
                    'Clear All'
                ),
                React.createElement('br', null)
            );
        }
    }]);

    return WhatDecision;
}(React.Component);

// class DisplayDecision extends React.Component {
//     constructor(props) {
//         super(props);
//         this.showOption = this.props.showOption;
//         this.params = this.props.params;
//     }

//     render() {
//         let propObj = {
//             params: this.props.params,
//             appInfo: this.props.appInfo
//         };
//         const { params, appInfo } = propObj;

//         return (
//             <div>
//                 {/* {<p>Numeral: {this.state.randomNumeral}</p>} */}
//                 {this.props.showOption && <p>Here's what you can choose : {this.props.optionPicked}</p>}
//                 <br />
//             </div>
//         );
//     }
// }


//Stateless Components are defined like this


var DisplayDecision = function DisplayDecision(props) {

    return React.createElement(
        'div',
        null,
        props.showOption && React.createElement(
            'p',
            null,
            'Here\'s what you can choose : ',
            props.optionPicked
        ),
        React.createElement('br', null)
    );
};

var IndecisionApp = function (_React$Component6) {
    _inherits(IndecisionApp, _React$Component6);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));
    }

    _createClass(IndecisionApp, [{
        key: 'render',
        value: function render() {
            var propObj = {
                params: this.props.params,
                appInfo: this.props.appInfo,
                formHandler: this.props.formHandler
            };

            var params = propObj.params,
                appInfo = propObj.appInfo,
                formHandler = propObj.formHandler;

            // console.log(this.constructor.name, propObj);

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { appInfo: appInfo }),
                React.createElement(Options
                // appInfo={appInfo}
                // params={params}
                , { options: this.props.options,
                    showOption: this.props.showOption
                    // optionPicked={this.props.optionPicked}
                }),
                React.createElement(Form, {
                    appInfo: appInfo
                    // options={this.props.options}
                    // showOption={this.props.showOption}
                    , formHandler: formHandler
                    // params={params}
                }),
                React.createElement(WhatDecision
                // appInfo={appInfo}
                // params={params}
                , { options: this.props.options,
                    pickOption: this.props.pickOption,
                    removeAllOptions: this.props.removeAllOptions
                }),
                React.createElement(DisplayDecision
                // appInfo={appInfo}
                // params={params}
                , { showOption: this.props.showOption,
                    optionPicked: this.props.optionPicked
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var App = function (_React$Component7) {
    _inherits(App, _React$Component7);

    function App(props) {
        _classCallCheck(this, App);

        var _this8 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this8.formHandler = function (e) {
            // Notice that it is an arrow function.. Babel code-transpilation gives context to arrow functions 
            e.preventDefault();
            e.persist();
            _this8.setState(function (prevState) {
                // console.log('options: ', prevState.options.splice(2, 0, e.target.elements.option.value));
                return {
                    options: prevState.options.concat(e.target.elements.option.value),
                    // options: prevState.options.push(e.target.elements.option.value),
                    // options: prevState.options.splice(2, 0, e.target.elements.option.value),
                    showOption: false
                };
            });
            // this.options.push(e.target.elements.option.value);
            // e.target.elements.option.value = '';
            // this.showOption = false;
            // console.log('showOption: ', this.state.options, ' ', this.showOption);
            // customRender();
        };

        _this8.params = {
            appInfo: {
                title: 'Indecision App',
                subtitle: 'This computer wil help you in decision making'
            }
        };

        _this8.state = {
            options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'],
            showOption: false,
            optionPicked: 0
        };

        _this8.pickOption = _this8.pickOption.bind(_this8);
        _this8.removeAllOptions = _this8.removeAllOptions.bind(_this8);
        // this.formHandler = this.formHandler.bind(this);
        return _this8;
    }

    _createClass(App, [{
        key: 'pickOption',
        value: function pickOption() {
            console.log('inside pickOption !');
            var random = Math.floor(Math.random() * this.state.options.length);
            // console.log(random);
            this.setState(function (prevState) {
                return {
                    showOption: true,
                    optionPicked: prevState.options[random]
                };
            });
        }
    }, {
        key: 'removeAllOptions',
        value: function removeAllOptions() {

            this.setState(function (prevState) {
                return {
                    options: [],
                    showOption: false
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(IndecisionApp
                // params={this.params}
                , { appInfo: this.params.appInfo,
                    options: this.state.options,
                    showOption: this.state.showOption,
                    optionPicked: this.state.optionPicked,
                    pickOption: this.pickOption,
                    removeAllOptions: this.removeAllOptions,
                    formHandler: this.formHandler
                })
            );
        }
    }]);

    return App;
}(React.Component);

var appRoot = document.getElementById('reactApp');

ReactDOM.render(React.createElement(App, null), appRoot);
