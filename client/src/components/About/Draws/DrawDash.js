import React from 'react';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

const DrawDash = () => (
    <div className='draw__dash'>
        
        <ScrollLink activeClass="active" to="draw__system" smooth={true} >
            <div className='draw__dash__card'>
                <img src='/images/about/draw_256.png' />
                <h2>ODBĚROVÝ SYSTÉM</h2>
                <p>Informace k systému používanému v SNO</p>
            </div>
        </ScrollLink>
        
        <ScrollLink activeClass="active" to="draw__order" smooth={true} >
            <div className='draw__dash__card'>
                <img src='/images/about/draw_256.png' />
                <h2>SPRÁVNÉ POŘADÍ ZKUMAVEK PŘI ODBĚRU</h2>
                <p>V jakém pořadí se mají správně odebírat zkumavky?</p>

            </div>
        </ScrollLink>

        <Link to='/odbery-chyby'>
            <div className='draw__dash__card'>
                <img src='/images/about/draw_256.png'  />
                <h2>CHYBY V PREANALYTICKÉ FÁZI</h2>
                <p>Seznam chyb, kterých je třeba se vyvarovat pro obdržení validního výsledku.</p>

            </div>
        </Link>



    
        <Link to='/meco'>
            <div className='draw__dash__card'>
                <img src='/images/about/draw_256.png' />
                <h2>ŽILNÍ ODBĚR</h2>
                <p>Pokyny pro správné provedení standardního žilního odběru</p>

            </div>    
        </Link>    

        <Link to='/meco'>
            <div className='draw__dash__card'>
                <img src='/images/about/draw_256.png' />
                <h2>KAPILÁRNÍ ODBĚR ABR (ASTRUP)</h2>
                <p>Pokyny pro správné provedení kapilárního odběru pro ABR</p>
            </div>
        </Link>
        
        <Link to='/meco'>
            <div className='draw__dash__card'>
                <img src='/images/about/draw_256.png' />
                <h2>KAPILÁRNÍ ODBĚR GLYKÉMIE</h2>
                <p>Pokyny pro správné provedení kapilárního odběru pro glykémie</p>

            </div>
        </Link>


        <Link to='/metody'>
            <div className='draw__dash__card'>
                <img src='/images/about/draw_256.png'  />
                <h2>ODBĚR RANNÍ MOČE</h2>
                <p>Pokyny pro odběr ranní (jednorázové moče) např. pro stanovení chemicky a sedimentu</p>

            </div>
        </Link>
    
        <Link to='/meco'>
            <div className='draw__dash__card'>
                <img src='/images/about/draw_256.png' />
                <h2>SBĚR MOČE</h2>
                <p>Pokyny pro správný sběr moče pro biochemické analýzy</p>

            </div>    
        </Link>    


        <Link to='/metody'>
            <div className='draw__dash__card'>
                <img src='/images/about/draw_256.png'  />
                <h2>HAMBURGERŮV SEDIMENT</h2>
                <p>Pokyny pro sběr moče pro stanovení Hamburgerova sedimentu</p>

            </div>
        </Link>
    
        <Link to='/meco'>
            <div className='draw__dash__card'>
                <img src='/images/about/draw_256.png' />
                <h2>ODBĚR STOLICE NA OK</h2>
                <p>Pokyny pro správný odběr stolice na vyšetření okultního krvácení</p>

            </div>    
        </Link>    
    </div>
);

export default DrawDash;