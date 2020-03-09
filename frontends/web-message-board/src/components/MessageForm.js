import * as React from "react";

export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.state = {value: "", disableSubmitButton: true};
    }

    render() {
        const placeholder = (this.props.disableForm) ? "Choose channel first!" : "Enter message";
        return <form onSubmit={this.handleFormSubmission}>
            <label>
                <textarea
                    placeholder={placeholder}
                    value={this.state.value}
                    disabled={this.props.disableForm}
                    onChange={this.handleFormChange}
                />
            </label>
            <br/>
            <input type="submit" value="Submit" disabled={this.state.disableSubmitButton}/>
        </form>
    }

    handleFormChange(event) {
        this.setState({value: event.target.value});
        if (event.target.value === "") {
            this.setState({disableSubmitButton: true});
        } else {
            this.setState({disableSubmitButton: false});
        }
    }

    handleFormSubmission(event) {
        event.preventDefault();

        if (this.state.value === "") {
            return;
        }

        this.props.onFormSubmitted(this.state.value);
        this.setState({value: "", disableSubmitButton: true});
    }
}
