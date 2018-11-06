import React from 'react';
import LabMetList from './LabMetList';
import LabMetAlphabet from './LabMetAlphabet';


export default class LabMetDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                category: 'all',
                alphabet: '',
                text: '',
                searchAll: false
            }
        }   
    }
   
    categoryFilter = (e) => {
        e.preventDefault();
        const buttonName = e.target.name;
        this.setState((prevState) => {
            return {...prevState, filters: {...prevState.filters, category: buttonName}}
        })
    };

    alphabetFilter = (e) => {
        e.preventDefault();
        const buttonName = e.target.name;
        this.setState((prevState) => {
            return {...prevState, filters: {...prevState.filters, alphabet: buttonName}}
        }) 
    }

    textFilter = (e) => {
         e.preventDefault();
        const textForFiltering = e.target.value;
        this.setState((prevState) => {
            return {
                ...prevState,
                filters: {
                    ...prevState.filters,
                    text: textForFiltering
                }
            }
        })
    }

    searchAll = () => {
        this.setState((prevState) => {
            return {...prevState, filters: {...prevState.filters, searchAll: !prevState.filters.searchAll}}
        })
    }
    
    alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
   
    render() {
        console.log('dash se renderoval');
        
        return (
            <div>
                <div>
                    <button name='all' onClick={this.categoryFilter}>VSE</button>
                    <button name='internal' onClick={this.categoryFilter}>INTERNI</button>
                    <button name='external' onClick={this.categoryFilter}>EXTERNI</button>
                </div>

                <div>
                    <button onClick={this.alphabetFilter}>VSE</button>
                    {this.alphabet.map((item) => (                        
                        <LabMetAlphabet key={item} letter={item} alphabetFilter={this.alphabetFilter} />
                    ))}
                </div>
                
                <div>
                    <form> 
                        <input type='search' name='search' value={this.state.filters.text} placeholder='hledany vyraz' onChange={this.textFilter}></input>
                        <button value='' onClick={this.textFilter}>X</button>
                        <input type='checkbox' name='searchall' onChange={this.searchAll} checked={this.state.filters.searchAll}></input>
                        <label htmlFor="searchall">HLEDAT VSUDE</label>
                    </form> 
                </div>

                <LabMetList filters={this.state.filters} />

            </div>
        );
    }
}