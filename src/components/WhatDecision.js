import React from 'react';

export default class WhatDecision extends React.Component {
    constructor(props) {
        super(props);
        // this.pickOption = this.pickOption.bind(this);
        // this.removeAllOptions = this.removeAllOptions.bind(this);
        this.params = this.props.params;
        this.appInfo = this.props.appInfo;

        // this.state = {
        //     randomNumeral: 0,
        // }
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

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };

        const { params, appInfo } = propObj;

        // console.log(this.constructor.name, propObj);

        return (
            <div>
                <button
                    className="big-button"
                    disabled={this.props.options.length === 0}
                    onClick={this.props.pickOption}>What should i do ?
                </button>
                {/* <button onClick={this.props.removeAllOptions}>Clear All</button> */}
                <br />
            </div>
        );
    }
}