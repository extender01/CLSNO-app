import React from 'react';

const Departments = () => (
    <div className='departments'>
                
        <div className='fc'>
            <div>
                <p>Oddělení je umístěno v pavilonu U a organizačně je členěno na:</p>
                <ul>
                    <li>Úsek klinické biochemie</li>
                    <li>Úsek hematologie (spadá pod HTO)</li>
                    <li>Úsek imunologie</li>
                    <li>Úsek radioimunoanalýzy</li>
                    <li>Úsek infekční sérologie</li>
                </ul>
            </div>
            <div className='labimg'>
                <img src={'/images/about/CL.jpg'}/>
            </div>


        </div>
    </div>
);

export default Departments;