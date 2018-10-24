import React from 'react';
import { connect } from 'react-redux';

import {startLogin, startLogout} from '../actions/userActions';
import LogoutForm from './LogoutForm';
import CredentialsForm from './CredentialsForm';




const LoginPage = (props) => (
    <div>       
        <CredentialsForm formSubmit={props.startLogin}/>
        <LogoutForm />
    </div>
);




// const mapStateToProps = (state) => {
    
    
//     return {
//         isLogged: state.users.isLogged,
//         loading: state.users.loading
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (credentials) => {
            dispatch(startLogin(credentials))
        }
    };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);


