import React from 'react';

//data from json, props in approuter

const DrawGuideTemplate = (props) => (
    <div className='container__white'>
        <div className='drawguide__template'>
            <h1>{props.data.name}</h1>
            <h2>To nejdůležitější</h2>
            <div className='drawguide__template__important'>
                
                {props.data.important.map((item, index) => (
                    <div key={index} className='drawguide__template__important__item'>
                        <h3>{item.head}</h3>
                        <p>{item.text}</p>
                        {item.link && <p>Více informací zde: {item.link}</p>}
                
                    </div>
                ))}
            
            
            </div>
            
            <h2>Celý návod</h2>
            <ul className='drawguide__template__guide'>
                {props.data.guide.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    </div>
);

export default DrawGuideTemplate;