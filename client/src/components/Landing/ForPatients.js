import React from 'react';
import GeneralCard from '../General/GeneralCard';

const ForPatients = () => (
    <div className='container__blue'>
        <div id='pacienti'></div>
        <h2>Informace pro pacienty</h2>

        <div className='for-patients'>


            <GeneralCard 
                cardHead='JDU OD LÉKAŘE S ŽÁDANKOU NA ODBĚR' 
                cardText='Informace o odběrech, prováděných pro ambulance a oddělení' 
                cardLink='/odberovy-system' 
                cardImg='/images/about/draw_256.png'    
            />

            <GeneralCard 
                cardHead='CHCI SI SÁM NECHAT UDĚLAT VYŠETŘENÍ JAKO SAMOPLÁTCE' 
                cardText='Informace pro ty, kteří si chtějí sami nechat udělat a zaplatit vyšetření' 
                cardLink='/odberovy-system' 
                cardImg='/images/about/draw_256.png'    
            />


            <GeneralCard 
                cardHead='OGTT' 
                cardText='Informace o orálně glukózovém tolerančním testu (test na cukrovku)' 
                cardLink='/odberovy-system' 
                cardImg='/images/about/draw_256.png'    
            />




        </div>
    </div>
);

export default ForPatients;