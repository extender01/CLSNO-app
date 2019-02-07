import React from 'react';

const Modes = () => (
    <div className='container__white'>
        <div className='modes'>
            <h1>Nejaky nadpis</h1>
            <div className='modes__items'>
            
                <div className='modes__item'>
                    <div className='modes__item_heading'>
                        <h2>RUTINA</h2>
                    </div>

                    <div className='modes__item__description'>

                        <ul>
                            <li>Rutinní provoz ve všední dny 6:30 - 15:00</li>
                            <li>Výsledky vydávány do 5 hodin od přijmu do laboratoře</li>
                            <li>Výsledky odesílány do NIS a tištěny až po VŠ kontrole výsledků</li>
                            <li>Výsledky jsou k dispozici tentýž den s výjimkou vyšetření neprováděných denně a pozdě přijatých vzorků</li>
                        </ul>
                    </div>

                    
                </div>

                <div className='modes__item'>
                    <div className='modes__item_heading'>
                        <h2>POHOTOVOST</h2>
                    </div>

                    <div className='modes__item__description'>

                        <ul>
                            <li>Pohotovost mimo rutinní dobu, tzn. všední dny 15:00 - 6:30 a víkendy a svátky celý den</li>
                            <li>Výsledky vydávány do 5 hodin od přijmu do laboratoře</li>
                            <li>Výsledky odesílány do NIS ihned</li>
                            <li>Výsledky tištěny až po VŠ kontrole výsledků</li>
                        </ul>
                    </div>

                    
                </div>            

                <div className='modes__item'>
                    <div className='modes__item_heading'>
                        <h2>STATIM</h2>
                    </div>

                    <div className='modes__item__description'>

                        <ul>
                            <li>Pohotovost mimo rutinní dobu, tzn. všední dny 15:00 - 6:30 a víkendy a svátky celý den</li>
                            <li>Výsledky vydávány do 5 hodin od přijmu do laboratoře</li>
                            <li>Výsledky odesílány do NIS ihned</li>
                            <li>Výsledky tištěny až po VŠ kontrole výsledků</li>
                        </ul>
                    </div>

                    
                </div>            
            
            </div>




        </div>

    </div>
);

export default Modes;


