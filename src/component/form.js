import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <form>
                <h2>Report a problem with your delivery</h2>
                <label htmlFor="tracking">Tracking Number</label> 
                <br />
                <input type="text" name="tracking" id="tracking" /> 
                <br /> <br /> 
                <label htmlFor="issue">What is your issue?</label>
                <br />
                <select type="select" name="issue" id="issue">
                <option value="1">My delivery hasn't arrived</option>
                <option value="2">The wrong item was delivered</option>
                <option value="3">Part of mt order was missing</option>
                <option value="4">Some of my order arrived damaged</option>
                <option value="5">Other (give details below)</option>
                 </select>
                <br /> <br /> 
                <label htmlFor="details">Give more details (optional)</label>
                <br />
                <input type="text" name="details" id="details" />
                <br /> <br /> 
                <button type="submit">Submit</button>
            </form>
        )
    }
}