import React from 'react';
import CredentialsForm from './CredentialsForm';
import {startSignup} from '../actions/userActions';

import {connect} from 'react-redux';

// class SignupPage extends React.Component {
    
        
//     render() {
//         return (
//             <CredentialsForm formSubmit={this.props.startSignup} buttonName='create user' />
//         );
//     }
// }

const SignupPage = (props) => (
    <CredentialsForm formSubmit={props.startSignup} buttonName='create user' />
);

const mapDispatchToProps = (dispatch) => {
    return {
        startSignup: (credentials) => {
            dispatch(startSignup(credentials));
        }
    };
};

export default connect(undefined, mapDispatchToProps)(SignupPage);