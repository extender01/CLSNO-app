import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';
 
export default class Hamburger extends React.Component {
    showSettings (event) {
        event.preventDefault();
    
    }
 
    render () {
        return (
            <Menu className='hambac'>
                <Link to='/methods' activeClassName='is-active'>Metody</Link>
                <Link to='/help'  activeClassName='is-active'>O laboratori</Link>
                <Link to='/login' activeClassName='is-active'>Logout</Link>
                <Link to='/login' activeClassName='is-active'>Login</Link>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}