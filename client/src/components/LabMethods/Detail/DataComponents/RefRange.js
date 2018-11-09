import React from 'react';

const RefRange = (props) => (
    <div>
        <h4>{props.label}</h4>
        <p>{props.value}</p>
    

        {props.refRange.length !== 0 && <table>
            <tbody>
                <tr>
                    <th></th>
                    <th>Vek</th>
                    <th>Meze</th>
                </tr>
                
                {props.refRange.map((item, index) => {
                    return ( 
                        <tr key={index}>
                            <td>{item.sex}</td>
                            <td>{item.age}</td>
                            <td>{item.range}</td>
                        </tr>
                    );
                })}
               
            </tbody>
            

          
        </table> }
    </div>
);


export default RefRange;