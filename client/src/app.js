import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import {startLoggedUser }from './actions/userActions';
import {startLoadTests} from './actions/testActions';


import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();




const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading</p>, document.getElementById("app"));


//startLogedUser and startLoadTests have custom callbacks -> after successfull    
store.dispatch(startLoggedUser(() => {
    store.dispatch(startLoadTests(() => {
        ReactDOM.render(jsx, document.getElementById("app"));
    }));
}));






 //ReactDOM.render(jsx, document.getElementById("app"));
