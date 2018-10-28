import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HomePage from '../components/HomePage';
import AddTestPage from '../components/AddTestPage';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import SignupPage from '../components/SignupPage';
import LogoutTest from '../components/LogoutTest';
import LabMetList from '../components/LabMethods/LabMetList';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/create' component={AddTestPage}/>
                <Route path='/signup' component={SignupPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/help' component={HelpPage}/>
                <Route path='/logout' component={LogoutTest} />
                <Route path='/lab-metody' component={LabMetList} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;