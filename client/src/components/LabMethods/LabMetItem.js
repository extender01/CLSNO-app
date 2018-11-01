import React from 'react';
import {Link} from 'react-router-dom';
const LabMetItem = (props) => (
    <div  className='flex-container'>
        <div>
            
            <Link to={'/methods/external/' + props._id}>{props.name}</Link>
        </div>

        <div>
            <p>{props.syn}</p>
        </div>

        <div>
            <p>{props.where}</p>
        </div>
    
        
    </div>
);

export default LabMetItem;

