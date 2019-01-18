import React from 'react';
import DrawMistakesWhat from './DrawMistakesWhat';
import DrawMistakesHow from './DrawMistakesHow';
import DrawMistakesCons from './DrawMistakesCons';

const DrawMistakesItem = (props) => (
    <div className='draw__mistakes__item'>
        <DrawMistakesWhat item={props.item}/>
        <DrawMistakesHow item={props.item}/>
        <DrawMistakesCons item={props.item} />

    </div>
);

export default DrawMistakesItem;