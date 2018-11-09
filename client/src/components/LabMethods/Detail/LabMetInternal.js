import React from 'react';

import Generic from './DataComponents/Generic';
import RefRange from './DataComponents/RefRange';



export default class LabMetInternal extends React.Component {
    constructor(props) {
        super(props);
        
    }

    

    render () {
        //until props are loaded from redux, do not render any test details
        const {lm} = this.props;
        
        return (
            <div>
                {!!lm && 
                    <div>
                      
                        <div className='flex-container'>
                            
                            <Generic label='JEDNOTKY' value={lm.unit} />
                            <RefRange label='REFERENČNÍ MEZE' refRange={lm.refRange} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='RUTINA' value={lm.rutTime} />
                            <Generic label='POHOTOVOST' value={lm.erTime} />
                            <Generic label='STATIM' value={lm.statTime} />
                            <Generic label='DOHLÁŠKA' value={lm.additionalOrder} />
                            <Generic label='POZNÁMKA K DOSTUPNOSTI' value={lm.responseNote} />

                        </div>

                        <div className='flex-container'>
                            <Generic label='SNIŽUJÍCÍ INTERFERENCE' value={lm.interfereDown} />
                            <Generic label='ZVYŠUJÍCÍ INTERFERENCE' value={lm.interfereUp} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='FYZIOLOGICKÁ VARIABILITA' value={lm.physVar} />
                            <Generic label='BIOLOGICKÝ POLOČAS' value={lm.bioHalfLife} />
                        </div>


                    

                    </div>
                }
            </div>
            
        );
    }
}



