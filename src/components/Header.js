import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };

        const { params, appInfo } = propObj;

        return (
            <div className="header">
                <div className="container">
                    <h1 className="header__title">{appInfo.title}</h1>
                    {appInfo.subtitle && <h2 className="header__subtitle">{appInfo.subtitle}</h2>}
                </div>
            </div>
        );
    }
}