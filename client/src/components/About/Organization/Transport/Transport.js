import React from 'react';
import TransportItem from './TransportItem';
import transportData from '../../../../data/transport/transport.json'

const Transport = () => (
    <div className='general__container'>
        <div>
            <h2>Transport do laboratore</h2>
            <p>Transport do laboratoře je kritickou částí preanalytické fáze. Pro obdržení validních výsledků je potřeba dodržovat několik důležitých pravidel</p>
            <div>
            </div>
        </div>

        {transportData.transport.map((item, index) => (
            <TransportItem key={index} transport={item} />
        ))}
        
    </div>
);

export default Transport;