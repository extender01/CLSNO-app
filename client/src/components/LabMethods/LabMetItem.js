import React from 'react';
import {Link} from 'react-router-dom';

const LabMetItem = (props) => (
    <div  className='f lm__item'>
        
       

        <div className=''>
            {props.isExt === 'external' ? (   
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

