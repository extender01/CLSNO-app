import React from 'react';
import CredentialsForm from './CredentialsForm';
import {startSignup} from '../actions/userActions';

import {connect} from 'react-redux';

class SignupPage extends React.Component {
    
        
    render() {
        return (
            <div>
            <p>Sign up form</p>
            <CredentialsForm formSubmit={this.props.startSignup} />
            </div>
        )
    };
};



const mapDispatchToProps = (dispatch) => {
    return {
        startSignup: (credentials) => {
            dispatch(startSignup(credentials))
        }
    };
};


export default connect(undefined, mapDispatchToProps)(SignupPage);