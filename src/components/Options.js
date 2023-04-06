import React from 'react';
import Option from './Option';

export default class Options extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo,
            removeItem: this.props.removeItem
        };

        const { params, appInfo, removeItem } = propObj;

        // console.log(this.props.options.length);
        // console.log(this.props.options);

        return (
            <div>
                <div className="widget-header">
                    <h3 className="widget-header--title">{this.props.options.length > 0 ? 'Here are the options' : 'No options'}</h3>
                    <button
                        className="button button--link"
                        onClick={this.props.removeAllOptions}>Remove All
                    </button>
                </div>
                <Option
                    // appInfo={appInfo}
                    // params={params}
                    options={this.props.options}
                    showOption={this.props.showOption}
                    removeItem={removeItem}
                // optionPicked={this.props.optionPicked}
                />
            </div>
        );
    }
}