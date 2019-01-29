import React from 'react';
import GeneralCard from '../../General/GeneralCard';

const DrawDash = () => (
    <div className='draw__dash'>
        
               
        <GeneralCard 
            cardHead='ODBĚROVÝ SYSTÉM' 
            cardText='Informace k systému používanému v SNO' 
            cardLink='draw__system' 
            cardImg='/images/about/draw_256.png' 
            scrollLink={true}
        />

        <GeneralCard 
            cardHead='SPRÁVNÉ POŘADÍ ZKUMAVEK PŘI ODBĚRU' 
            cardText='V jakém pořadí se mají správně odebírat zkumavky?' 
            cardLink='draw__order' 
            cardImg='/images/about/draw_256.png' 
            scrollLink={true}
        />

        <GeneralCard 
            cardHead='CHYBY V PREANALYTICKÉ FÁZI' 
            cardText='Seznam chyb, kterých je třeba se vyvarovat pro obdržení validního výsledku' 
            cardLink='/odbery-chyby' 
            cardImg='/images/about/draw_256.png' 
            scrollLink={false}
        />

        <GeneralCard 
            cardHead='ŽILNÍ ODBĚR' 
            cardText='Pokyny pro správné provedení standardního žilního odběru' 
            cardLink='/odbery-zilni' 
            cardImg='/images/about/draw_256.png' 
            scrollLink={false}
        />

        <GeneralCard 
            cardHead='ODBĚR ABR (ASTRUP)' 
            cardText='Pokyny pro správné provedení kapilárního odběru pro ABR' 
            cardLink='/odbery-abr' 
            cardImg='/images/about/draw_256.png'
            scrollLink={false} 
        />

        <GeneralCard 
            cardHead='KAPILÁRNÍ ODBĚR GLYKÉMIE' 
            cardText='Pokyny pro správné provedení kapilárního odběru pro glykémie' 
            cardLink='/odbery-glyk' 
            cardImg='/images/about/draw_256.png' 
            scrollLink={false}
        />

        <GeneralCard 
            cardHead='ODBĚR RANNÍ MOČE' 
            cardText='Pokyny pro odběr ranní (jednorázové moče) např. pro stanovení chemicky a sedimentu' 
            cardLink='/odbery-moc-ranni' 
            cardImg='/images/about/draw_256.png' 
            scrollLink={false}
        />


        <GeneralCard 
            cardHead='SBĚR MOČE' 
            cardText='Pokyny pro správný sběr moče pro biochemické analýzy' 
            cardLink='/odbery-moc-sber' 
            cardImg='/images/about/draw_256.png' 
            scrollLink={false}
        />

        <GeneralCard 
            cardHead='HAMBURGERŮV SEDIMENT' 
            cardText='Pokyny pro sběr moče pro stanovení Hamburgerova sedimentu' 
            cardLink='/odbery-hambac' 
            cardImg='/images/about/draw_256.png' 
            scrollLink={false}
        />

        <GeneralCard 
            cardHead='ODBĚR STOLICE NA OK' 
            cardText='Pokyny pro správný odběr stolice na vyšetření okultního krvácení' 
            cardLink='/odbery-stolice' 
            cardImg='/images/about/draw_256.png' 
            scrollLink={false}
        />
        
        
      
    </div>
);

export default DrawDash;