import React from 'react';
import labMethodDefaultState from '../../helper/labMethodDefaultState';




export default class TestForm extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = labMethodDefaultState;
        this.state.isExt = 'external'
    };

    onChange = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        this.setState(() => {
            return {[inputName]: inputValue}
        });
    };

    intExtToggle = (e) => {
        const buttonName = e.target.name;
        this.setState(() => {
            return {isExt: buttonName}
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
                <div className='flex-container'>
                <button name='internal' onClick={this.intExtToggle}>Interni</button>
                <button name='external' onClick={this.intExtToggle}>Externi</button>
                </div>
                <p>This is from test form</p>
                <form className="fcrw" onSubmit={this.onSubmit}>
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
                    <label>Odber</label>
                    <input type='text' name='draw' value={this.state.draw} onChange={this.onChange} />
                    <label>Preanalytika</label>
                    <input type='text' name='preanal' value={this.state.preanal} onChange={this.onChange} />
                    <label>Poznamka</label>
                    <input type='text' name='note' value={this.state.note} onChange={this.onChange} />
                    <label>Poznamka oddeleni</label>
                    <input type='text' name='customNote' value={this.state.customNote} onChange={this.onChange} />
                    <label>Metodika</label>
                    <input type='text' name='metodics' value={this.state.metodics} onChange={this.onChange} />
                    <label>Jednotka</label>
                    <input type='text' name='unit' value={this.state.unit} onChange={this.onChange} />
                    <label>Odbornost</label>
                    <input type='text' name='expertise' value={this.state.expertise} onChange={this.onChange} />
                    <label>Snizujici interference</label>
                    <input type='text' name='interfereDown' value={this.state.interfereDown} onChange={this.onChange} />
                    <label>Zvysujici interference</label>
                    <input type='text' name='interfereUp' value={this.state.interfereUp} onChange={this.onChange} />
                    <label>Fyziologicka variabilita</label>
                    <input type='text' name='physVar' value={this.state.physVar} onChange={this.onChange} />
                    <label>Biologicky polocas</label>
                    <input type='text' name='bioHalfLife' value={this.state.bioHalfLife} onChange={this.onChange} />

                    {this.state.isExt === 'external' && <div>     
                        <label>Kdy odjizdi externi</label>
                        <input type='text' name='whenExtTransport' value={this.state.whenExtTransport} onChange={this.onChange} />
                        <label>Jak casto externi</label>
                        <input type='text' name='extHowOften' value={this.state.extHowOften} onChange={this.onChange} />
                        <label>Odezva externi</label>
                        <input type='text' name='extResponse' value={this.state.extResponse} onChange={this.onChange} />
                        <label>Kdo posila z lab</label>
                        <input type='text' name='parcelWho' value={this.state.parcelWho} onChange={this.onChange} />
                        <label>Lab preanalytika</label>
                        <input type='text' name='parcelPreanal' value={this.state.parcelPreanal} onChange={this.onChange} />
                        <label>Lab poznamka</label>
                        <input type='text' name='parcelNote' value={this.state.parcelNote} onChange={this.onChange} />
                    </div> }

                    {this.state.isExt === 'internal' && <div>
                        <label>Referencni meze</label>
                        <input type='text' name='refRange' value={this.state.refRange} onChange={this.onChange} />
                        <label>Cas rutina</label>
                        <input type='text' name='rutTime' value={this.state.rutTime} onChange={this.onChange} />
                        <label>Statim</label>
                        <input type='checkbox' name='statCare' value={this.state.statCare} onChange={this.onChange} />
                        <label>Dohlaska</label>
                        <input type='text' name='additionalOrder' value={this.state.additionalOrder} onChange={this.onChange} />
                        <label>Poznamka k dostupnosti</label>
                        <input type='text' name='responseNote' value={this.state.responseNote} onChange={this.onChange} />
                    </div> }

                    



                    <button>Submitvoe</button>
                </form>

            </div>
        )
    };
};








