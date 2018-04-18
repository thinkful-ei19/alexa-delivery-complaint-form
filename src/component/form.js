import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, valueLength, onlyNumbers} from '../validators';
import {tracking} from '../action';

export class Form extends React.Component {

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
              <div className="message message-success">
                 Report submitted successfully
              </div>
            );
        }

        let errorMessage;
        if(this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }
        return (
            <div className="contact-wrapper">
                <header>
                    <h2>Report a problem with your delivery</h2>
                    {successMessage}
                    {errorMessage}
                </header>
                <main>
                <form 
                onSubmit={this.props.handleSubmit(values => this.props.dispatch(tracking(values)))}>
                <Field 
                    component={Input}
                    element="input" 
                    label="Tracking Number"
                    type="text" 
                    name="trackingNumber" 
                    id="tracking" 
                    validate={[required, nonEmpty, valueLength, onlyNumbers]} 
                    /> 
                <Field component={Input} element="select" label="What is your issue?" name="issue" id="issue">
                    <option value="not-delivered">My delivery hasn't arrived</option>
                    <option value="wrong-item">The wrong item was delivered</option>
                    <option value="missing-part">Part of my order was missing</option>
                    <option value="damaged">Some of my order arrived damaged</option>
                    <option value="other">Other (give details below)</option>
                 </Field>
                <Field 
                    component={Input}  
                    element="input" 
                    label="Give more details (optional)"
                    type="text" 
                    name="details" 
                    id="details" 
                />
                <button type="submit">Submit</button>
            </form>
            </main>
            </div>
        )
    }
}

export default reduxForm({
    form: 'delivery'
})(Form);