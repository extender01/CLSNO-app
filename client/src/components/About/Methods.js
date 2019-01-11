import React from 'react';
import {Link} from 'react-router-dom';

const Methods = () => (
    <React.Fragment>
        <div className='methods f_center_wrap'>
            <img src={'/images/about/methods3_256.png'} width='128px' />
            <h2><Link to={'/metody'} exact={true}>Seznam prováděných vyšetření naleznete zde</Link></h2>
            
        </div>
        <div className='methods f_center_wrap'>
            <img src={'/images/about/zadanka_256.png'} width='100px' />
            <h2><Link to={'/metody'} exact={true}>Žádanka v PDF ke stažení</Link></h2>
        </div>
    </React.Fragment>
);

export default Methods;