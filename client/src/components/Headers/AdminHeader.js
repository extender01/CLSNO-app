import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {startLoggedUser }from '../../actions/userActions';

class AdminHeader extends React.Component {
    
    componentDidMount() {
       
        // this.props.checkWhoIsLogged();
        

        
    }
    
    render() {
        return (
            <div className='content-container'>
                <div className='flex-container'>
                    <p>{this.props.nick}</p>

                    <NavLink to='/create' activeClassName='is-active'>Create</NavLink>
                    <NavLink to='/edit' activeClassName='is-active'>Edit</NavLink>
                    <NavLink to='/login' activeClassName='is-active'>Login</NavLink>
                    <NavLink to='/logout' activeClassName='is-active'>Logout</NavLink>
                    <NavLink to='/signup' activeClassName='is-active'>Signup</NavLink>
                </div>
            </div>   
        );
    }
}


const mapStateToProps = (state) => {
    return {
        nick: state.users.user.nick
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkWhoIsLogged: () => {
            dispatch(startLoggedUser());
        }
        
    };
};

AdminHeader.propTypes = {
    checkWhoIsLogged: PropTypes.func,
    nick: PropTypes.string
};



export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);