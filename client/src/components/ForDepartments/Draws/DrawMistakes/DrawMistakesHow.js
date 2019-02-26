import React from 'react';

const DrawMistakesHow = (props) => (
    <div className='draw__mistakes__how'>
        <h2>Jak k tomu dojde?</h2>
        
        {props.item.how && props.item.how.map((item, index) => (
            <div key={index} className='draw__mistakes__how__item'>
                {item.howImg ? <div className='draw__mistakes__how__img' >
                    <img src={item.howImg} />
                </div> : undefined }
                <div className='draw__mistakes__how__text'>
                    <h4>{item.howHeading}</h4>
                    <p>{item.howText}</p>
                </div>
            </div>
        ))}
        
    </div>
);

export default DrawMistakesHow;