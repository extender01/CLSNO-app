import React from 'react';
import Axios from 'axios';

export default class CustomNoteForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            department: '',
            customNote: ''
        }
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => {
            return {[name]: value}
        });
        console.log(name, value);

    }

    custom = (e) => {
        e.preventDefault();
        Axios.post('/api/customNote/5bdaf95629917f455c13d4f6', this.state)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.custom}>
                    <input type='text' name='department' placeholder='department' onChange={this.onChange}></input>
                    <input type='text' name='customNote' placeholder='customNote' onChange={this.onChange}></input>
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
}