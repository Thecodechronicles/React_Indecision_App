import React from 'react';
import Header from './Header';
import Options from './Options';
import Form from './Form';
import WhatDecision from './WhatDecision';
import DisplayDecision from './DisplayDecision';
import OptionalModal from './OptionalModal';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo,
            formHandler: this.props.formHandler,
            removeItem: this.props.removeItem
        };

        const { params, appInfo, formHandler, removeItem } = propObj;

        // console.log(this.constructor.name, propObj);

        return (
            <div>
                <Header appInfo={appInfo} />
                <div className="container">
                    <div className="widget">
                        <Options
                            // appInfo={appInfo}
                            // params={params}
                            options={this.props.options}
                            showOption={this.props.showOption}
                            removeItem={removeItem}
                            removeAllOptions={this.props.removeAllOptions}
                        // optionPicked={this.props.optionPicked}
                        />
                        <Form
                            appInfo={appInfo}
                            // options={this.props.options}
                            // showOption={this.props.showOption}
                            formHandler={formHandler}
                        // params={params}
                        />
                    </div>
                    <WhatDecision
                        // appInfo={appInfo}
                        // params={params}
                        options={this.props.options}
                        pickOption={this.props.pickOption}
                    // removeAllOptions={this.props.removeAllOptions}
                    />
                    <DisplayDecision
                        // appInfo={appInfo}
                        // params={params}
                        showOption={this.props.showOption}
                        optionPicked={this.props.optionPicked}
                    />
                </div>
                <OptionalModal
                    optionPicked={this.props.optionPicked}
                    showOption={this.props.showOption}
                    resetSelection={this.props.resetSelection}
                />
            </div>
        );
    }
}