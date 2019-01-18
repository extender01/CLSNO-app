import React from 'react';

const DrawMistakesHow = (props) => (
    <div className='draw__mistakes__how'>
        <h2>Jak k tomu dojde</h2>
        <div className='draw__mistakes__how__table'>
            {props.item.how && props.item.how.map((item, index) => (
                <div className='draw__mistakes__how__item' key={index}>
                    <h3>{item.howHeading}</h3>
                    <p>{item.howText}</p>
                </div>
            ))}
        </div>
    </div>
);

export default DrawMistakesHow;