import React from 'react';
import labMethodDefaultState from '../../helper/labMethodDefaultState';




export default class TestForm extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = labMethodDefaultState;
    };

    onChange = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        this.setState(() => {
            return {[inputName]: inputValue}
        });
    };
   
    onSubmit = (e) => {
        e.preventDefault();
        console.log('submit starts, calling formSubmit defined on AddTestPageComponent with object created from form data, formSubmit calls dispatch(startAddTest(...) via mapStateToProps');
       // fires action dispatch
        this.props.formSubmit(this.state);
    };

    

    render() {
        return (
            <div>
                <p>This is from test form</p>
                <form onSubmit={this.onSubmit}>
                    <label>Nazev testu</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.onChange} />
                    <label>Synonyma</label>
                    <input type='text' name='syn' value={this.state.syn} onChange={this.onChange} />
                    <label>Kde se dela</label>
                    <input type='text' name='where' value={this.state.where} onChange={this.onChange} />
                    <label>Nazev v Akordu</label>
                    <input type='text' name='nameAk' value={this.state.nameAk} onChange={this.onChange} />
                    <label>Skupiny v akordu</label>
                    <input type='text' name='groupAk' value={this.state.groupAk} onChange={this.onChange} />


                    <button>Submitvoe</button>
                </form>

            </div>
        )
    };
};








