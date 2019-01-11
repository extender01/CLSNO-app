import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';
 
export default class Hamburger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {burgerOpen: false};
    }

    burgerHide = () => {
        this.setState((prevState) => {
            return {burgerOpen: false}
        })
    }
    
    showSettings (event) {
        event.preventDefault();
    
    }
 
    render () {
        return (
            <div className='hambac'>
                <Menu isOpen={this.state.burgerOpen}>
                    <Link onClick={this.burgerHide} to='/metody'>Metody</Link>
                    <Link onClick={this.burgerHide} to='/about'>O laboratori</Link>
                    <Link onClick={this.burgerHide} to='/login'>Login</Link>
                    <Link onClick={this.burgerHide} to='/login'>Logout</Link>
                    
                </Menu>
            </div>
        );
    }


 



}