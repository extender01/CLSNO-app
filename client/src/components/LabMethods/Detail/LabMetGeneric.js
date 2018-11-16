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
            <div>
                {!!lm && 
                    <div>
                        <div className='flex-container'>
                            <Generic label='NÁZEV' value={lm.name} />
                            <Generic label='SYNONYMA' value={lm.syn} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='NÁZEV V AKORDU' value={lm.nameAk} />
                            <Generic label='SKUPINY V AKORDU' value={lm.groupAk} />
                        </div>

                        {lm.isExt === 'external' &&
                        <div className='flex-container'>
                            <Where where={lm.where}/>
                            <WhenTransport where={lm.where} />  
                        </div> 
                        }

                        <div className='flex-container'>
                            <Draw draw={lm.draw}/>
                            <Generic label='PREANALYTICKÁ FÁZE' value={lm.preanal} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='OBECNÁ POZNÁMKA' value={lm.note} />
                            {this.props.rights === 'department' && 
                                <CustomNote label='VAŠE POZNÁMKA' _id={lm._id} customNote={lm.customNotes[0]} />
                            }
                        </div>
                    </div>
                }
            </div>
            
        );
    }
}




