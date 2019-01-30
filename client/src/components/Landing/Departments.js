import React from 'react';

const Departments = () => (
    <div className='departments f_center_wrap'>
        <div className='departments__image'>
            <img src={'/images/about/pavU.jpg'}/>
        </div>
        <div className='departments__items'>
            <h2>Oddělení se nachází v pavilonu U a je členěno na:</h2>
            <ul>
                <li>Úsek klinické biochemie</li>
                <li>Úsek hematologie (spadá pod HTO)</li>
                <li>Úsek imunologie</li>
                <li>Úsek radioimunoanalýzy</li>
                <li>Úsek infekční sérologie</li>
            </ul>
        </div>
       
   
    </div>
);

export default Departments;