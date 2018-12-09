import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Media from 'react-media';

import Hamburger from './Hamburger';
import {startLoggedUser }from '../../actions/userActions';
import {startLoadTests} from '../../actions/testActions';
import bp from '../../helper/mediaQueryBreakPoint';

class MainHeader extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // this.props.startLoadTests();
        // this.props.checkWhoIsLogged();
        
        
        console.log('probehlo componentdidmount z Headeru');
        
        

        
    }
    
    render() {
        console.log('mainheader se renderoval');
        
        return (
            <header className='header'>
                
                <div className='f header__line'>

                    {/* Media will render Hamburger only if width of viewport is less value of bp variable */}
                    <Media query={`(max-width: ${bp})`}>
                        {(matches) => 
                            matches ? <Hamburger /> : null
                        }
                    </Media> 
                   
                    <nav className='f_start-end-toggle header__logo'>
                        <NavLink className='header__title' to='/' exact={true}>
                            <img src={'/images/logo.png'} height='40px' />
                        </NavLink>
                    </nav>
                    
                    <div className ='f header__links'>
                        <NavLink to='/help' className='g1'>O laboratoři</NavLink>
                        <NavLink to='/methods' className='g1'>Metody</NavLink>
                        
                    </div>

                    <div className='header__user'>
                        {this.props.isLogged ? (
                            <div className='f_column g1'>
                                <img src={'/images/man-user.png'} height='30px' />
                                <p >{this.props.nick}</p>
                                <NavLink to='/login'>Odhlásit se</NavLink>
                            </div>
                        ) : (
                            <div className='f_column g1'>
                                <NavLink to='/login'>Přihlásit se</NavLink>
                            </div>
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