import React from 'react';

import Generic from './DataComponents/Generic';



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
                            <Generic label='REFERENČNÍ MEZE' value={lm.refRange} />
                            <Generic label='JEDNOTKY' value={lm.note} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='RUTINA' value={lm.rutCare} />
                            <Generic label='POHOTOVOST' value={lm.note} />
                            <Generic label='STATIM' value={lm.note} />
                            <Generic label='DOHLÁŠKA' value={lm.note} />
                            <Generic label='POZNÁMKA K DOSTUPNOSTI' value={lm.responseNote} />

                        </div>

                        <div className='flex-container'>
                            <Generic label='SNIŽUJÍCÍ INTERFERENCE' value={lm.interfereDown} />
                            <Generic label='ZVYŠUJÍCÍ INTERFERENCE' value={lm.interfereUp} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='FYZIOLOGICKÁ VARIABILITA' value={lm.physVar} />
                            <Generic label='BIOLOGICKÝ POLOČAS' value={lm.bioHalfTime} />
                        </div>


                    

                    </div>
                }
            </div>
            
        );
    }
}



