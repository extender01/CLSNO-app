import React from 'react';
import { connect } from 'react-redux';

import {startLogin, startLogout} from '../actions/userActions';
import LogoutForm from './LogoutForm';
import CredentialsForm from './CredentialsForm';




const LoginPage = (props) => (
    <div>       
        
        {!props.isLogged ? <CredentialsForm formSubmit={props.startLogin} isLogged={props.isLogged} buttonName='LOGIN' /> :
            <div> 
                <p>Prihlasen jako: {props.user}</p>
                <LogoutForm />
            </div>
        }
        
    </div>
);


const mapStateToProps = (state) => ({isLogged: !!state.users.user._id, user: state.users.user.nick});

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (credentials) => {
            dispatch(startLogin(credentials))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


