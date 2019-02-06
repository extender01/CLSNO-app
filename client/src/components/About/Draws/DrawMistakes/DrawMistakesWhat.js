import React from 'react';

const DrawMistakesWhat = (props) => (
    
    <div className='draw__mistakes__what'>
        <h2>{props.item.whatHeading}</h2>
        <img src={props.item.whatImg} />
        <p>{props.item.whatText}</p>

        
    </div>
);

export default DrawMistakesWhat;