import React from 'react';
import GeneralCard from '../../General/GeneralCard';

const Organization = () => (
    <div className='container__blue'>
        <div className='organization'>
            <GeneralCard
                cardHead='REŽIMY VYŠETŘENÍ' 
                cardText='RUTINA, POHOTOVOST, STATIM a DOHLÁŠKY' 
                cardLink='/rezimy' 
                cardImg='/images/about/draw_256.png' 
            />


            <GeneralCard
                cardHead='TRANSPORT DO LABORATOŘE' 
                cardText='Informace o podmínkách a pravidlech transportu vzorků do laboratoře' 
                cardLink='/transport' 
                cardImg='/images/about/draw_256.png' 
            />

            <GeneralCard
                cardHead='ČASOVÝ ROZPIS PŘÍJMU VZORKŮ' 
                cardText='Časový harmonogram příjmu vzorků na pavilony U a C' 
                cardLink='/prijem' 
                cardImg='/images/about/draw_256.png' 
            />

        </div>
    
       


    </div>


);

export default Organization;