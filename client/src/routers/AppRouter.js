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
import Contact from '../components/Landing/Contact';

import Akreditace from '../components/About/Akreditace';
import LabIdentification from '../components/Landing/LabIdentification';
import Introduction from '../components/Landing/Jumbotron';
import DrawSystem from '../components/About/Draws/DrawSystem/DrawSystem';
import Landing from '../components/Landing/Landing';
import DrawOrder from '../components/About/Draws/DrawOrder/DrawOrder';
import DrawMistakesSummary from '../components/About/Draws/DrawMistakes/DrawMistakesSummary';
import DrawGuideTemplate from '../components/About/Draws/DrawGuide/DrawGuideTemplate';
import DrawDash from '../components/About/Draws/DrawDash';

import AdminRoute from './AdminRoute';
import LabMetDetail from '../components/LabMethods/Detail/LabMetDetail';

import Organization from '../components/About/Organization/Organization';
import Transport from '../components/About/Organization/Transport/Transport';
import Modes from '../components/About/Organization/Modes/Modes';
import Reception from '../components/About/Organization/Reception/Reception';



//==============import JSON data =============
import drawGuideData from '../data/drawGuides.json';



//Media from react-media library renders component based on css media query passed as prop parameter and renders what comes back from callback

export const history = createHistory();

const AppRouter = (props) => (
    <Router history={history}>
        <React.Fragment>
            

            
            
            <MainHeader />
                
            {props.rights === 'admin' && <AdminHeader />}

            <div className='container'>
            
            
            
                {(!!props.user && !!props.labmets) &&
                <Switch>
                    <Route path='/' component={Landing} exact={true}/>
                    <AdminRoute path='/create' component={AddTestPage}/>
                    <Route path='/edit/:id' component={EditTestPage} />
                    
                    <Route path='/signup' component={SignupPage} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/kontakty' component={Contact}/>
                    <Route path='/akreditace' component={Akreditace} />
                    <Route path='/identifikace' component={LabIdentification} />
                    <Route path='/odberovy-system' component={DrawSystem} />
                    <Route path='/odbery' component={DrawDash} />
                    <Route path='/odbery-poradi' component={DrawOrder} />
                    <Route path='/odbery-chyby' component={DrawMistakesSummary} />
                    <Route path='/odbery-zilni' render={props => <DrawGuideTemplate data={drawGuideData.venipuncture} {...props}  />} />
                    <Route path='/odbery-abr' render={props => <DrawGuideTemplate data={drawGuideData.abr} {...props}  />} />

                    <Route path='/organizace' component={Organization} />
                    <Route path='/transport' component={Transport} />
                    <Route path='/rezimy' component={Modes} />
                    <Route path='/prijem' component={Reception} />



                    <Route path='/forbidden' component={Forbidden} />
                    <Route path='/logout' component={LogoutTest} />
                    <Route path='/metody' component={LabMetDash} exact={true} />
                    <Route path="/metody/detail/:id" component={LabMetDetail} />
                    <Route path="/metody/internal/:id" component={LabMetInternal} />
                    <Route path='/customNote/:id' component={CustomNoteForm} />


                    <AdminRoute path='/admin' component={LoginPage} />
                    <Route component={NotFoundPage}/>
                </Switch>
                }
            </div>
        </React.Fragment>
    </Router>
);

const mapStateToProps = (state) => ({
    rights: state.users.user.rights,
    user: state.users.user.nick,
    labmets: state.labTests.tests
});

export default connect(mapStateToProps)(AppRouter);