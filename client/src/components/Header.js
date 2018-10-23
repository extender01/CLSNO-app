import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

import {startLoggedUser }from '../actions/userActions';




class Header extends React.Component {
    
    componentDidMount() {
       
        this.props.checkWhoIsLogged();
        

        
    }
    
    render() {
        return (
            <header>
                <h1>Lab SNO</h1>
                <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
                <NavLink to='/create' activeClassName='is-active'>Create</NavLink>
                <NavLink to='/edit' activeClassName='is-active'>Edit</NavLink>
                <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
                <NavLink to='/login' activeClassName='is-active'>Login</NavLink>
                <NavLink to='/logout' activeClassName='is-active'>Logout</NavLink>
            </header>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkWhoIsLogged: () => {
            dispatch(startLoggedUser())
        },
        justTellNoOneLogged: () => {
            dispatch(loggedUserSuccess())
        }
    };
};

export default connect(undefined, mapDispatchToProps)(Header);