import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import createHistory from 'history/createBrowserHistory';
import Media from 'react-media';

import HomePage from '../components/HomePage';
import AddTestPage from '../components/LabMethods/AddTestPage';
import EditTestPage from '../components/LabMethods/EditTestPage';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import Forbidden from '../components/Forbidden';
import NotFoundPage from '../components/NotFoundPage';
import MainHeader from '../components/Headers/MainHeader';
import AdminHeader from '../components/Headers/AdminHeader';
import Hamburger from '../components/Headers/Hamburger';


import SignupPage from '../components/SignupPage';
import LogoutTest from '../components/LogoutTest';
import LabMetDash from '../components/LabMethods/LabMetDash';
import LabMetExternal from '../components/LabMethods/Detail/LabMetExternal';
import LabMetInternal from '../components/LabMethods/Detail/LabMetInternal';
import CustomNoteForm from '../components/LabMethods/Detail/DataComponents/CustomNoteForm';

import AdminRoute from './AdminRoute';
import LabMetDetail from '../components/LabMethods/Detail/LabMetDetail';


//Media from react-media library renders component based on css media query passed as prop parameter and renders what comes back from callback

export const history = createHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <div>
            <Media query='(max-width: 500px)'>
                {(matches) => 
                    matches ? <Hamburger /> : null
                }
            </Media>
            
            <MainHeader />
            {props.rights === 'admin' && <AdminHeader />}
            
            {(!!props.user && !!props.labmets) &&
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <AdminRoute path='/create' component={AddTestPage}/>
                <Route path='/edit/:id' component={EditTestPage} />
                <Route path='/signup' component={SignupPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/help' component={HelpPage}/>
                <Route path='/forbidden' component={Forbidden} />
                <Route path='/logout' component={LogoutTest} />
                <Route path='/methods' component={LabMetDash} exact={true} />
                <Route path="/methods/detail/:id" component={LabMetDetail} />
                <Route path="/methods/internal/:id" component={LabMetInternal} />
                <Route path='/customNote/:id' component={CustomNoteForm} />


                <AdminRoute path='/admin' component={LoginPage} />
                <Route component={NotFoundPage}/>
            </Switch>
            }
        </div>
    </Router>
);

const mapStateToProps = (state) => ({
    rights: state.users.user.rights,
    user: state.users.user.nick,
    labmets: state.labTests.tests
});

export default connect(mapStateToProps)(AppRouter);