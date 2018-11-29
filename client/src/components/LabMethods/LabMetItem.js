import React from 'react';
import {Link} from 'react-router-dom';

const LabMetItem = (props) => (
    <div  className={`lm__item lm__${props.category}`}>
        
       

        <div>
            {props.category === 'external' ? (   
                <Link to={{
                    pathname: '/methods/detail/' + props._id,
                    state: 'external' 
                }}>
                    {props.name}
                </Link>
            ) : (
                <Link to={{
                    pathname: '/methods/detail/' + props._id,
                    state: 'internal' 
                }}>
                    {props.name}
                </Link>
            )}

        </div>

        <div>
            <p>{props.syn}</p>
        </div>

        <div>
            <Link to={'/edit/' + props._id}>{props.where}</Link>
        </div>
    </div>
);

export default LabMetItem;

