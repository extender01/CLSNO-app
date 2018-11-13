import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {startLoggedUser }from '../../actions/userActions';
import {startLoadTests} from '../../actions/testActions';

class MainHeader extends React.Component {
    
    componentDidMount() {
        this.props.startLoadTests();
        this.props.checkWhoIsLogged();
        
        
        console.log('probehlo componentdidmount z Headeru');
        
        

        
    }
    
    render() {
        console.log('mainheader se renderoval');
        
        return (
            <header className='header'>
                <div className='content-container'>
                    <div className='flex-container'>
                        <NavLink className='header__title' to='/' exact={true}>
                            <h1>Lab SNO</h1>
                        </NavLink>
                        <NavLink to='/help' activeClassName='is-active'>O laboratori</NavLink>
                        <NavLink to='/methods' activeClassName='is-active'>Metody</NavLink>
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
        },
        startLoadTests: () => {
            dispatch(startLoadTests());
        }
        
    };
};

MainHeader.propTypes = {
    checkWhoIsLogged: PropTypes.func,
    startLoadTests: PropTypes.func,
    nick: PropTypes.string,
    isLogged: PropTypes.bool
};



export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);