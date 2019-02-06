import React from 'react';

const DrawMistakesHow = (props) => (
    <div className='draw__mistakes__how'>
        <h2>Jak k tomu dojde</h2>
        
        {props.item.how && props.item.how.map((item, index) => (
            <div key={index} className='draw__mistakes__how__item'>
                <div className='draw__mistakes__how__img' >
                    <img src='/images/about/methods3_128.png' />
                </div>
                <div className='draw__mistakes__how__text'>
                    <h3>{item.howHeading}</h3>
                    <p>{item.howText}</p>
                </div>
            </div>
        ))}
        
    </div>
);

export default DrawMistakesHow;