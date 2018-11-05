import React from 'react';

import { history } from '../routers/AppRouter';


export default class CredentialsForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nick: '',
            password: ''
        };
    };

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => {
            return {[name]: value}
        });
        console.log(name, value);

    };
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.formSubmit({nick: this.state.nick, password: this.state.password});

    };


    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' name='nick' placeholder='Prihlasovaci jmeno' value={this.state.nick} onChange={this.onChange}/>
                <input type='password' name='password' placeholder='Heslo' value={this.state.password} onChange={this.onChange} />
                <div>
                    <input type='radio' name='rights' value='department' checked />
                    <label> Oddeleni  </label>
                    <input type='radio' name='rights' value='lab' checked />
                    <label> Lab  </label>
                    <input type='radio' name='rights' value='admin' checked />
                    <label> Admin  </label>
                </div>
                
                    <button>LOGIN</button>
                </form>

                
            </div>
        )
    }
};

