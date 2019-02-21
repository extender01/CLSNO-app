import React from 'react';

const TransportItem = (props) => (
    <div className='transport__item'>
        <img src={props.transport.img} />
        <h3>{props.transport.head}</h3>
        <p>{props.transport.text}</p>
    </div>

);

export default TransportItem;