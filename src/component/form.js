import React from 'react';
import Input from './input';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty, valueLength, onlyNumbers} from '../validators';

export class Form extends React.Component {
    render() {
        if (this.props.submitSucceeded) {
            return <div>Report submitted successfully</div>
        }
        return (
            <form 
                onSubmit={this.props.handleSubmit(values => console.log(values)
                )}>
                <h2>Report a problem with your delivery</h2>
                <Field 
                    component={Input}
                    element="input" 
                    label="Tracking Number"
                    type="text" 
                    name="tracking" 
                    id="tracking" 
                    validate={[required, nonEmpty, valueLength, onlyNumbers]} 
                    /> 
                <Field component={Input} element="select" label="What is your issue?" name="issue" id="issue">
                    <option value="not arrived">My delivery hasn't arrived</option>
                    <option value="wrong item">The wrong item was delivered</option>
                    <option value="missing">Part of my order was missing</option>
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
        )
    }
}

export default reduxForm({
    form: 'delivery'
})(Form);