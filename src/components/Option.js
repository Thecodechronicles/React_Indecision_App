import React from 'react';

export default class Option extends React.Component {
    constructor(props) {
        super(props);
        // super();
        // this.removeItem = this.removeItem.bind(this);
        this.appInfo = this.props.appInfo;
        this.params = this.props.params;

        // this.state = {
        //     optionsList: this.props.options,
        //     showOption: this.props.showOption
        // }
    }

    render() {

        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo,
            removeItem: this.props.removeItem
        };

        const { params, appInfo, removeItem } = propObj;

        return (
            <div>
                <ol className="option--container">
                    {this.props.options.length > 0 && this.props.options.map((item, index) => (
                        <li className="option" key={item} id={index}><p className="option__text">{index + 1}. Item {item}</p>
                            <button
                                className="button button--link"
                                onClick={removeItem}>Remove Item
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}