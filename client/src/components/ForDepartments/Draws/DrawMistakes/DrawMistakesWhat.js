import React from 'react';

const DrawMistakesWhat = (props) => (
    
    <div className='draw__mistakes__what'>
        <h2>Proč je to problém?</h2>
        <img src={props.item.whatImg} />
        <p>{props.item.whatText}</p>

        
    </div>
);

export default DrawMistakesWhat;