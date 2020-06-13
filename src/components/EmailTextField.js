import React from 'react';
import TextField from '@material-ui/core/TextField';

class EmailTextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { helperText: '', error: false };
    }

    onChange(event) {
        let textFieldInput = event.target.value;
        if (textFieldInput.length === 0) {
            this.setState({ helperText: 'Invalid address', error: true });
            return;
            } else if (textFieldInput.includes('@') && textFieldInput.includes('.')){
        const email1 = textFieldInput.split('@');
        const email2 = textFieldInput.split('.');
        if (email1[0].length > 0 && email1[1].length > 0 && email2[0].length > 0 && email2[1].length > 0) {
            this.setState({ helperText: '', error: false });
        } else {
            this.setState({ helperText: 'Invalid address', error: true });
        }
    } else {this.setState({ helperText: 'Invalid address', error: true });}
}

    render() {
        return (
            <div>
                <TextField
                    id="emailField"
                    ref="emailField"
                    helperText={this.state.helperText}
                    error={this.state.error}
                    onChange={ this.onChange.bind(this)}
                    required
                    label="Email address"
                />
            </div>
        );
    }

}

export default EmailTextField;