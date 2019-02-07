import React from 'react';

const TransportItem = (props) => (
    <div className='transport__item'>
        <img src='/images/about/icons/request_icon2.svg' />
        <h3>{props.transport.head}</h3>
        <p>{props.transport.text}</p>
    </div>

);

export default TransportItem;