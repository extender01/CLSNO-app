import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import createHistory from 'history/createBrowserHistory';

import HomePage from '../components/HomePage';
import AddTestPage from '../components/LabMethods/AddTestPage';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import MainHeader from '../components/Headers/MainHeader';
import AdminHeader from '../components/Headers/AdminHeader';


import SignupPage from '../components/SignupPage';
import LogoutTest from '../components/LogoutTest';
import LabMetList from '../components/LabMethods/LabMetList';
import LabMetExternal from '../components/LabMethods/Detail/LabMetExternal';
import LabMetInternal from '../components/LabMethods/Detail/LabMetInternal';
import CustomNoteForm from '../components/LabMethods/Detail/DataComponents/CustomNoteForm';

import AdminRoute from './AdminRoute';

export const history = createHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <div>
            <MainHeader />
            {props.isAdmin && <AdminHeader />}
            
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/create' component={AddTestPage}/>
                <Route path='/signup' component={SignupPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/help' component={HelpPage}/>
                <Route path='/logout' component={LogoutTest} />
                <Route path='/methods' component={LabMetList} exact={true} />
                <Route path="/methods/external/:id" component={LabMetInternal} />
                <Route path='/custom' component={CustomNoteForm} />

                <AdminRoute path='/admin' component={LoginPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

const mapStateToProps = (state) => ({
    isAdmin: state.users.isAdmin
});

export default connect(mapStateToProps)(AppRouter);