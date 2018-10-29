import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({
    isAdmin: isAdmin,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAdmin ? (
            <Component {...props} />
        ) : (
            <Redirect to='/' />
        )
    )} />
);
 

const mapStateToProps = (state) => ({
    isAdmin: state.users.isAdmin
});

export default connect(mapStateToProps)(AdminRoute);