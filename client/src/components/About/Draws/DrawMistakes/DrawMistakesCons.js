import React from 'react';

const DrawMistakesCons = (props) => (
    <div className='draw__mistakes__cons'>
        <h2>Možné důsledky</h2>
        <div className='draw__mistakes__cons__item'>
            {props.item.cons.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
        
    </div>
);

export default DrawMistakesCons;