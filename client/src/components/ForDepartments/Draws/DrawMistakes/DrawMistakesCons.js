import React from 'react';

const DrawMistakesCons = (props) => (
    <div className='draw__mistakes__cons'>
        <h2>Možné důsledky</h2>
       

        {props.item.cons.map((item, index) => (
            <div key={index} className='draw__mistakes__cons__item'>
                <h3>{item.conHeading}</h3>
                <p>{item.conText}</p>
                <div className='draw__mistakes__cons__table'>
                    {item.conTable.map((inf) => (
                        
                        inf.analytes.map((analyte, ind) => (
                            <div className='draw__mistakes__cons__table__item' key={ind}><img src={inf.value} /><p>{analyte}</p></div>
                        ))
                        
                    ))}

                </div>


            </div>
        ))}
        
    </div>
);

export default DrawMistakesCons;


