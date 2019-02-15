import React from 'react';
import GeneralCard from '../General/GeneralCard';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const DrawOrg = () => (
    <div className='container__blue draworg'>

        <div className='general__line'>


            <GeneralCard
                cardHead='ODBĚRY'
                cardText='Informace ke odběrům, žádankám a vzorkům'
                cardLink='/odbery'
                cardImg='/images/about/draw_256.png'
            
            />

            <GeneralCard
                cardHead='ORGANIZACE PROVOZU'
                cardText='Kdy a jak laboratoř přijímá vzorky k analýze.'
                cardLink='/organizace'
                cardImg='/images/about/organization_256.png'
            
            />

        </div>
        <div className='general__line'>
            <GeneralCard
                cardHead='SEZNAM METOD'
                cardText='Seznam metod prováděných v SNO a odesílaných do smluvních laboratoří.'
                cardLink='/metody'
                cardImg='/images/about/methods3_256.png'
            />

            
            <GeneralCard
                cardHead='ŽÁDANKA V PDF'
                cardText='Žádanka pro externí žadatele v pdf k vytištění.'
                cardLink='/metody'
                cardImg='/images/about/zadanka_256.png'
            
            />
         
        </div>
    </div>
);

export default DrawOrg;

//SMAZAT