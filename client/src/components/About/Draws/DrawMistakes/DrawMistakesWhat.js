import React from 'react';

const DrawMistakesWhat = (props) => (
    
    <div className='draw__mistakes__what'>
        <img src={props.item.whatImg} />
        <div className='draw__mistakes__description'>
            <h2>{props.item.whatHeading}</h2>
            <p>{props.item.whatText}</p>
            <div className='draw__mistakes__button'> </div>
        </div>
    </div>
);

export default DrawMistakesWhat;