import React from 'react';

import { history } from '../routers/AppRouter';


export default class CredentialsForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nick: '',
            password: '',
            rights: 'department'
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
        this.props.formSubmit({nick: this.state.nick, password: this.state.password, rights: this.state.rights});

    };


    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' name='nick' placeholder='Prihlasovaci jmeno' value={this.state.nick} onChange={this.onChange}/>
                <input type='password' name='password' placeholder='Heslo' value={this.state.password} onChange={this.onChange} />
                
                {this.props.buttonName !== 'LOGIN' &&
                    <div>
                        <input type='radio' name='rights' value='department' onChange={this.onChange}/>
                        <label> Oddeleni  </label>
                        <input type='radio' name='rights' value='lab' onChange={this.onChange} />
                        <label> Lab  </label>
                        <input type='radio' name='rights' value='admin' onChange={this.onChange} />
                        <label> Admin  </label>
                    </div>
                }
               
                
                    <button>{this.props.buttonName}</button>
                </form>

                
            </div>
        )
    }
};

