import React from 'react';
import Axios from 'axios';
import {connect} from 'react-redux'
import {startAddCustomNote} from '../../../../actions/testActions';

class CustomNoteForm extends React.Component {
    
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

    customNoteSubmit = (e) => {
        e.preventDefault();
        this.props.startAddCustomNote(this.state, this.props.match.params.id)
    }
    
    render() {
       console.log(this.props.location.jmeno);
       
        return (
            <div>
                <form onSubmit={this.customNoteSubmit}>
                    <label>Poznamka oddeleni </label>
                    <input type='text' name='customNote' value={this.state.customNote} placeholder='customNote' onChange={this.onChange}></input>
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddCustomNote: (customNote_param, id_param) => {
            dispatch(startAddCustomNote(customNote_param, id_param))
        }
    }
};

export default connect(undefined, mapDispatchToProps)(CustomNoteForm);