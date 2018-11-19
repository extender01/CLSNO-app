import React from 'react';

const Generic = (props) => (
    <div className={`box ${props.classNames}`}>
        <h4>{props.label}</h4>
        <p>{props.value}</p>
    </div>
);


export default Generic;