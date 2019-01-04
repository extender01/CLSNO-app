import React from 'react';
import {Link} from 'react-router-dom';

const Methods = () => (
    <div className='methods fc'>
        <h2><Link to={'/methods'} exact={true}>Seznam prováděných vyšetření naleznete zde</Link></h2>
        
    </div>
);

export default Methods;