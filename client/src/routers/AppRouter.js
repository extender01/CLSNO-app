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
import Contact from '../components/About/Contact';
import Akreditace from '../components/About/Akreditace';
import LabIdentification from '../components/About/LabIdentification';
import Introduction from '../components/About/Introduction';
import DrawSystem from '../components/Info/Draw/DrawSystem';
import About from '../components/About/About';

import AdminRoute from './AdminRoute';
import LabMetDetail from '../components/LabMethods/Detail/LabMetDetail';


//Media from react-media library renders component based on css media query passed as prop parameter and renders what comes back from callback

export const history = createHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <div className='main'>
            

            
            
            <MainHeader>
                
            </MainHeader>
            {props.rights === 'admin' && <AdminHeader />}
            
            {(!!props.user && !!props.labmets) &&
            <Switch>
                <Route path='/' component={About} exact={true}/>
                <AdminRoute path='/create' component={AddTestPage}/>
                <Route path='/edit/:id' component={EditTestPage} />
                
                <Route path='/signup' component={SignupPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/kontakty' component={Contact}/>
                <Route path='/akreditace' component={Akreditace} />
                <Route path='/identifikace' component={LabIdentification} />
                <Route path='/organizace' component={Introduction} />
                <Route path='/odberovy-system' component={DrawSystem} />
                <Route path='/about' component={About} />


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