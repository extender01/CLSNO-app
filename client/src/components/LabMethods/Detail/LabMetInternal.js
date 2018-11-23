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
            <React.Fragment>
                {!!lm && 
                    <React.Fragment>
                      
                        <div className='f_stretch'>
                            
                            <Generic label='JEDNOTKY' value={lm.unit} classNames='g1 colorUnit' />
                            <RefRange label='REFERENČNÍ MEZE' refRange={lm.refRange} classNames='g3 colorRefRange' />
                        </div>

                        <div className='f_stretch'>
                            <Generic label='RUTINA' value={lm.rutTime} classNames='g1 colorRunTime'/>
                            <Generic label='POHOTOVOST' value={lm.erTime} classNames='g1 colorRunTime' />
                            <Generic label='STATIM' value={lm.statTime} classNames='g1 colorRunTime' />
                            <Generic label='DOHLÁŠKA' value={lm.additionalOrder} classNames='g1 colorRunTime' />
                            <Generic label='POZNÁMKA K DOSTUPNOSTI' value={lm.responseNote} classNames='g1 colorRunTime' />

                        </div>

                        <div className='f_stretch'>
                            <Generic label='SNIŽUJÍCÍ INTERFERENCE' value={lm.interfereDown} classNames='g1 colorInterference' />
                            <Generic label='ZVYŠUJÍCÍ INTERFERENCE' value={lm.interfereUp} classNames='g1 colorInterference' />
                        </div>

                        <div className='f_stretch'>
                            <Generic label='FYZIOLOGICKÁ VARIABILITA' value={lm.physVar} classNames='g1 colorInterference' />
                            <Generic label='BIOLOGICKÝ POLOČAS' value={lm.bioHalfLife} classNames='g1 colorInterference' />
                        </div>


                    

                    </React.Fragment>
                }
            </React.Fragment>
            
        );
    }
}



