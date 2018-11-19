import React from 'react';

import Generic from './DataComponents/Generic';
import Where from './DataComponents/Where';
import WhenTransport from './DataComponents/WhenTransport';
import Draw from './DataComponents/Draw';
import CustomNote from './DataComponents/CustomNote';

export default class LabMetGeneric extends React.Component {
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
                        <div className='f'>
                            <Generic label='NÁZEV' value={lm.name} classNames='g1 colorName' />
                            <Generic label='SYNONYMA' value={lm.syn} classNames='g1 colorSyn' />
                        </div>

                        <div className='f'>
                            <Generic label='NÁZEV V AKORDU' value={lm.nameAk} classNames='g1 colorNameAk' />
                            <Generic label='SKUPINY V AKORDU' value={lm.groupAk} classNames='g1 colorGroupAk' />
                        </div>

                        {lm.isExt === 'external' &&
                        <div className='f'>
                            <Where where={lm.where} classNames='box g1 colorWhere'/>
                            <WhenTransport where={lm.where} classNames='box g2 colorWhenTransport' />  
                        </div> 
                        }

                        <div className='f'>
                            <Draw draw={lm.draw} classNames='box g1 colorDraw' />
                            <Generic label='PREANALYTICKÁ FÁZE' value={lm.preanal} classNames='box g1 colorPreanal' />
                        </div>

                        <div className='f'>
                            <Generic label='OBECNÁ POZNÁMKA' value={lm.note}  classNames='box g1 colorNote'/>
                            {this.props.rights === 'department' && 
                                <CustomNote label='VAŠE POZNÁMKA' _id={lm._id} customNote={lm.customNotes[0]} classNames='box g1 colorCustomNote' />
                            }
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
            
        );
    }
}





