import React from 'react';

const RefRange = (props) => (
    <div className={`box ${props.classNames}`}>
        <h4>{props.label}</h4>
        <p>{props.value}</p>
    

        {props.refRange.length !== 0 && <table>
            <tbody>
                <tr>
                    <th>Pohlaví</th>
                    <th>Věk</th>
                    <th>Meze</th>
                    <th>Poznámka</th>
                </tr>
                
                {props.refRange.map((item, index) => {
                    return ( 
                        <tr key={index}>
                            <td>{item.sex}</td>
                            <td>{item.age}</td>
                            <td>{item.range}</td>
                            <td>{item.refNote}</td>
                        </tr>
                    );
                })}
               
            </tbody>
            

          
        </table> }
    </div>
);


export default RefRange;