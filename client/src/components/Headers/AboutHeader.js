import React from 'react';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
const AboutHeader = () => (
    <div className='about-header fc' >
        
        
        <Link to='/odbery'>Odběry</Link>
        <Link to='/'>Organizace provozu</Link>
        <ScrollLink to='contact' smooth={true} offset={-62}>Kontakty</ScrollLink>

        

    
    </div>
);

export default AboutHeader;