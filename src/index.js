import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Form from './component/form';
import store from './store';
import './index.css';


ReactDOM.render(
    <Provider store ={store}>
        <Form />
    </Provider>,
    document.getElementById('root')
);
