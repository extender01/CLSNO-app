import React from 'react';
                                //nested destructuring
const DrawMistakesHeader = ({box: {heading, image, text}}) => (
    <div className='draw__mistakes__header'>
        
        <img src={image} />
        <div className='draw__mistakes__header__description'>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </div>
);

export default DrawMistakesHeader;  