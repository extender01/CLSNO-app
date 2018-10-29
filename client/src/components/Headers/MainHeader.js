import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {startLoggedUser }from '../../actions/userActions';

class MainHeader extends React.Component {
    
    componentDidMount() {
       
        this.props.checkWhoIsLogged();
        

        
    }
    
    render() {
        return (
            <header className='header'>
                <div className='content-container'>
                    <div className='flex-container'>
                        <NavLink className='header__title' to='/' exact={true}>
                            <h1>Lab SNO</h1>
                        </NavLink>
                        <NavLink to='/help' activeClassName='is-active'>O laboratori</NavLink>
                        <NavLink to='/lab-metody' activeClassName='is-active'>Metody</NavLink>
                        {this.props.isLogged ? (
                            <div>
                                <p>{this.props.nick}</p>
                                <NavLink to='/login' activeClassName='is-active'>Logout</NavLink>
                            </div>
                        ) : (
                            <NavLink to='/login' activeClassName='is-active'>Login</NavLink>
                        )}
                    </div>
                </div>   
            </header>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        nick: state.users.user.nick,
        isLogged: state.users.isLogged
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkWhoIsLogged: () => {
            dispatch(startLoggedUser());
        }
        
    };
};

MainHeader.propTypes = {
    checkWhoIsLogged: PropTypes.func,
    nick: PropTypes.string
};



export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);