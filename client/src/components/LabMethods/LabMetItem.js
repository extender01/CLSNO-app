import React from 'react';

const LabMetItem = (props) => (
    <div  className='flex-container'>
       <div>
        <p>{props.name}</p>
       </div>

       <div>
       <p>{props.syn}</p>
      </div>

      <div>
      <p>{props.where}</p>
     </div>
    
        
    </div>
)

export default LabMetItem

