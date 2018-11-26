import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {startLoggedUser }from '../../actions/userActions';
import {startLoadTests} from '../../actions/testActions';

class MainHeader extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.startLoadTests();
        this.props.checkWhoIsLogged();
        
        
        console.log('probehlo componentdidmount z Headeru');
        
        

        
    }
    
    render() {
        console.log('mainheader se renderoval');
        
        return (
            <header className='header'>
                <div className='f'>
                   
                    <nav className='f_start header__logo'>
                        <NavLink className='header__title' to='/' exact={true}>
                            <h1>Lab SNO</h1>
                        </NavLink>
                    </nav>
                    
                    <div className ='f header__links'>
                        <NavLink to='/help' className='g1'>O laboratoři</NavLink>
                        <NavLink to='/methods' className='g1'>Metody</NavLink>
                        {this.props.isLogged ? (
                            <div className='f g1'>
                                <img src={'/images/man-user.png'} height='30px' />
                                <p >{this.props.nick}</p>
                                <NavLink to='/login'>Odhlásit se</NavLink>
                            </div>
                        ) : (
                            <NavLink to='/login'>Přihlásit se</NavLink>
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