import React from 'react';


const RequestItem = (props) => (
    <div className='request__item'>
        <h2>{props.info.head}</h2>
        
        {props.info.text.map((item, index) => (
            <div className='request__item__text' key={index}>
                {props.image && <img src={`/images/${props.image}`} alt='žádanka musí obsahovat' />}
                <p>{item}</p>
            </div>
        ))}
        
    </div>
);

export default RequestItem; 