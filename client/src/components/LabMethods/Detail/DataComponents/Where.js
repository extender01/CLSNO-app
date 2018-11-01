import React from 'react';


const Where = (props) => (
    <div>
        <h4>KAM TO JEDE</h4>
        <div>
            {props.where==="avsd" ? <img src="../../../images/krnov.png" /> : undefined}
            {props.where==="Nový Jičín" ? <img src="../../../images/agel.png" /> : undefined}
            {props.where==="FN Ostrava" ? <img src="../../../images/fno.png" /> : undefined}
            <p>{props.where}</p>
        </div>
    </div>
);

export default Where;