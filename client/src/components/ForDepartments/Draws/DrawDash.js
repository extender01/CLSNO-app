import React from 'react';
import GeneralCard from '../../General/GeneralCard';

const DrawDash = () => (
    <div className='container__blue'>
        <h2>Obecne informace k odberum</h2>
        <div className='general__line draw__dash'>
            
            <GeneralCard 
                cardHead='ODBĚROVÝ SYSTÉM' 
                cardText='Informace k systému používanému v SNO' 
                cardLink='/odberovy-system' 
                cardImg='/images/about/draw_256.png' 
                
            />

            <GeneralCard 
                cardHead='SPRÁVNÉ POŘADÍ ZKUMAVEK PŘI ODBĚRU' 
                cardText='V jakém pořadí se mají správně odebírat zkumavky?' 
                cardLink='/odbery-poradi' 
                cardImg='/images/draw/draw_order.svg' 
                
            />

            <GeneralCard 
                cardHead='SPRÁVNÉ VYPLNĚNÍ ŽÁDANKY' 
                cardText='Údaje, které musí každá žádanka mít, podmíky přijetí vzorku.' 
                cardLink='/odbery-poradi' 
                cardImg='/images/about/methods3_256.png'
                
            />

            <GeneralCard 
                cardHead='CHYBY V PREANALYTICKÉ FÁZI' 
                cardText='Seznam chyb, kterých je třeba se vyvarovat pro obdržení validního výsledku' 
                cardLink='/odbery-chyby' 
                cardImg='/images/draw/draw_mistakes2.svg' 
            />

        </div>

        <h2>Informace ke konkretnim typum odberu</h2>
        <div className='general__line draw__dash'>

            <GeneralCard 
                cardHead='ŽILNÍ ODBĚR' 
                cardText='Pokyny pro správné provedení standardního žilního odběru' 
                cardLink='/odbery-zilni' 
                cardImg='/images/draw/draw_vein.svg' 
            />

            <GeneralCard 
                cardHead='ODBĚR ABR (ASTRUP)' 
                cardText='Pokyny pro správné provedení kapilárního odběru pro ABR' 
                cardLink='/odbery-abr' 
                cardImg='/images/draw/draw_abr.svg'
            />

            <GeneralCard 
                cardHead='KAPILÁRNÍ ODBĚR GLYKÉMIE' 
                cardText='Pokyny pro správné provedení kapilárního odběru pro glykémie' 
                cardLink='/odbery-glyk' 
                cardImg='/images/draw/draw_glyk.svg'
            />

            <GeneralCard 
                cardHead='ODBĚR RANNÍ MOČE' 
                cardText='Pokyny pro odběr ranní (jednorázové moče) např. pro stanovení chemicky a sedimentu' 
                cardLink='/odbery-moc-ranni' 
                cardImg='/images/draw/draw_urine_morn.svg'
            />


            <GeneralCard 
                cardHead='SBĚR MOČE' 
                cardText='Pokyny pro správný sběr moče pro biochemické analýzy' 
                cardLink='/odbery-moc-sber' 
                cardImg='/images/draw/draw_urine_col.svg'
            />

            <GeneralCard 
                cardHead='HAMBURGERŮV SEDIMENT' 
                cardText='Pokyny pro sběr moče pro stanovení Hamburgerova sedimentu' 
                cardLink='/odbery-hambac' 
                cardImg='/images/draw/draw_hamburger.svg'
            />

            <GeneralCard 
                cardHead='ODBĚR STOLICE NA OK' 
                cardText='Pokyny pro správný odběr stolice na vyšetření okultního krvácení' 
                cardLink='/odbery-stolice' 
                cardImg='/images/draw/draw_fob.svg'
            />
        
        
        
        
        </div>
               
      
    </div>
);

export default DrawDash;