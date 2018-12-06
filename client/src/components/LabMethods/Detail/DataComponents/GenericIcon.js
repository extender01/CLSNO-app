import React from 'react';

const GenericIcon = (props) => (
    <div className={`box ${props.classNames}`}>
        <h4>{props.label}</h4>
        {props.isAvailable ?
            <img src={'/images/checked.png'} /> 
            :
            <img src={'/images/error.png'} />

        }
        {props.label === 'RUTINA' ? <p>5h</p> : <p>{props.value}</p>}
    </div>
);


export default GenericIcon;