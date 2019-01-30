import React from 'react';
import {Link} from 'react-router-dom';



const GeneralCard = (props) => (
    <div className='general__card'>
        <Link to={props.cardLink}>
        
            <img src={props.cardImg} />
            <h2>{props.cardHead}</h2>
            <p>{props.cardText}</p>
        </Link>
    </div>
    
);

export default GeneralCard;