import React from 'react';

const LabMetAlphabet = (props) => (
    <button name={props.letter} onClick={props.alphabetFilter}>{props.letter}</button>
);

export default LabMetAlphabet;