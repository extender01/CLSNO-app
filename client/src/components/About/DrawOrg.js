import React from 'react';
import {Link} from 'react-router-dom';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const DrawOrg = () => (
    <div className='draworg'>

        <div className='f_stretch'>
            <Link to="/odbery">
                <div id='draws' className='draworg__card'>
                    <img src='/images/about/draw_256.png' />
                    <h2>ODBĚRY</h2>
                    <p>Informace ke odběrům, žádankám a vzorkům.</p>
                </div>
            </Link>
            <Link to="/odbery">
                <div id='organization' className='draworg__card'>
                    <img src='/images/about/organization_256.png' />
                    <h2>ORGANIZACE PROVOZU</h2>
                    <p>Kdy a jak laboratoř přijímá vzorky k analýze.</p>

                </div>
            </Link>
        </div>
        <div className='f_stretch'>
            <Link to='/metody'>
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
    </div>
);

export default DrawOrg;

//POUZIT TADY GENERALCARD KOMPONENTU