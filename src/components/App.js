import React from 'react';
import IndecisionApp from './IndecisionApp';

// console.log('App module is running !');

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.params = {
            appInfo: {
                title: 'Indecision App',
                subtitle: 'This computer wil help you in decision making',
            },
        }

        this.state = {
            options: ['one', 'two'],
            showOption: false,
            optionPicked: undefined,
        }

        this.pickOption = this.pickOption.bind(this);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        // this.formHandler = this.formHandler.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    pickOption() {
        // console.log('inside pickOption !');
        var random = Math.floor(Math.random() * this.state.options.length);
        // console.log(random);
        this.setState((prevState) => {
            return {
                showOption: true,
                optionPicked: prevState.options[random]
            }
        });
    }

    removeAllOptions() {

        this.setState((prevState) => {
            return {
                options: [],
                showOption: false
            }
        });
    }

    formHandler = (event) => {
        if (this.state.options.filter((item) => {
            return event.target.elements.option.value == item;
        }).length > 0) {
            return 'This item already exists !';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(event.target.elements.option.value),
                showOption: false
            }
        });
    }

    removeItem(e) {

        e.persist();
        this.setState((prevState) => {
            // console.log('Element ', e.target.parentElement.id);
            return {
                options: prevState.options.filter((item) => {
                    return item !== prevState.options[e.target.parentElement.id];
                })
            }
        })
    }

    resetSelection = () => {
        this.setState(() => {
            return {
                // optionPicked: undefined
                showOption: false
            }
        });
    }

    render() {

        return (
            <div>
                <IndecisionApp
                    // params={this.params}
                    appInfo={this.params.appInfo}
                    options={this.state.options}
                    showOption={this.state.showOption}
                    optionPicked={this.state.optionPicked}
                    pickOption={this.pickOption}
                    removeAllOptions={this.removeAllOptions}
                    formHandler={this.formHandler} // arrow function so no need to bind 'this'
                    removeItem={this.removeItem}
                    resetSelection={this.resetSelection} // arrow function so no need to bind 'this'
                />
            </div>
        );
    }
}