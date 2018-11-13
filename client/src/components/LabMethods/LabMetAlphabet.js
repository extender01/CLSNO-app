import React from 'react';
import {alphabetFilter} from '../../actions/filterActions';
import {connect} from 'react-redux';

const alphabet = ['0-9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


const LabMetAlphabet = (props) => (
    <div>
        <button name='' onClick={(e) => {props.alphabetFiltering(e.target.name)}}>VSE</button>
        {alphabet.map((item) => (
            <button key={item} name={item} onClick={(e) => {props.alphabetFiltering(e.target.name)}}>{item}</button>
       
        ))}
   
    </div>
   
);





const mapDispatchToProps = (dispatch) => {
    return {
        alphabetFiltering: (letter) => {
            dispatch(alphabetFilter(letter));
        }
    }

}


export default connect(undefined, mapDispatchToProps)(LabMetAlphabet);