import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.appInfo = this.props.appInfo;
        this.formHandler = this.props.formHandler;
        this.formHandlerProxy = this.formHandlerProxy.bind(this);
        this.randomProp = 0;
        this.errorMessage = '';

        this.state = {
            error: false
        }
    }

    formHandlerProxy(e) {
        e.preventDefault();
        e.persist();
        this.eventObject = e;
        if (e.target.elements.option.value == '') {
            this.setState(() => {
                this.errorMessage = 'Enter a valid value !'
                return {
                    error: true
                }
            });
            return;
        }

        this.setState(() => {
            return {
                error: false
            }
        });

        this.errorMessage = this.formHandler(e);
        if (this.errorMessage) {
            this.setState(() => {
                return {
                    error: true
                }
            });
        }
    }

    componentDidUpdate() {
        if (this.eventObject) {
            this.eventObject.target.elements.option.value = '';
        }
    }

    render() {
        let propObj = {
            params: this.props.params,
            appInfo: this.props.appInfo
        };
        const { params, appInfo } = propObj;

        return (
            <div>
                {this.state.error && <p className="error-message">{this.errorMessage}</p>}
                <form className="form" onSubmit={this.formHandlerProxy}>
                    <input className="form-input" type="text" name="option" />
                    <button className="button">Add Option {++this.randomProp}</button>
                </form>
            </div>
        );
    }
}