import React from 'react';
import {Link} from 'react-router-dom';

const DrawOrg = () => (
    <div className='f_stretch draworg'>
        <div id='draws' className='draworg__card'>
            <img src='/images/about/draw_256.png' />
            <h2>ODBĚRY</h2>
            <p>Informace ke odběrům, žádankám a vzorkům.</p>
        </div>

        <div id='organization' className='draworg__card'>
            <img src='/images/about/organization_256.png' />
            <h2>ORGANIZACE PROVOZU</h2>
            <p>Kdy a jak laboratoř přijímá vzorky k analýze.</p>

        </div>

        <Link to='/methods'>
            <div id='request' className='draworg__card'>
                <img src='/images/about/zadanka_256.png'  />
                <h2>ŽÁDANKA V PDF</h2>
                <p>Žádanka pro externí žadatele v pdf k vytištění.</p>

            </div>
        </Link>
       
        <div id='methods' className='draworg__card'>
            <img src='/images/about/methods3_256.png' />
            <h2>SEZNAM METOD</h2>
            <p>Seznam metod prováděných v SNO a odesílaných do smluvních laboratoří</p>

        </div>        
    </div>
);

export default DrawOrg;