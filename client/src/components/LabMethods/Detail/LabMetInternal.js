import React from 'react';
import { connect } from 'react-redux';

import Generic from './DataComponents/Generic';
import Where from './DataComponents/Where';
import WhenTransport from './DataComponents/WhenTransport';
import Draw from './DataComponents/Draw';

class LabMetInternal extends React.Component {
    constructor(props) {
        super(props);
        
    }

    

    render () {
        const {lm} = this.props;
        console.log('lm je:', lm);
        
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

                        <div className='flex-container'>
                            <Draw draw={lm.draw}/>
                        </div>
                       
                        <div className='flex-container'>
                            <Generic label='PREANALYTICKÁ FÁZE' value={lm.preanal} />
                            <Generic label='OBECNÁ POZNÁMKA' value={lm.note} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='REFERENČNÍ MEZE' value={lm.refRange} />
                            <Generic label='JEDNOTKY' value={lm.note} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='RUTINA' value={lm.refRange} />
                            <Generic label='POHOTOVOST' value={lm.note} />
                            <Generic label='STATIM' value={lm.note} />
                            <Generic label='DOHLÁŠKA' value={lm.note} />
                            <Generic label='POZNÁMKA K DOSTUPNOSTI' value={lm.refRange} />

                        </div>

                        <div className='flex-container'>
                            <Generic label='SNIŽUJÍCÍ INTERFERENCE' value={lm.howOften} />
                            <Generic label='ZVYŠUJÍCÍ INTERFERENCE' value={lm.response} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='FYZIOLOGICKÁ VARIABILITA' value={lm.howOften} />
                            <Generic label='BIOLOGICKÝ POLOČAS' value={lm.response} />
                        </div>


                    

                    </div>
                }
            </div>
            
        );
    }
}



//function returns single object from array that matches id from req.params
const findParticular = (state, props) => {
    
    return state.labTests.tests.find((item) => {
        if (item._id) {
            return item._id === props.match.params.id;
        }
        
    });
};

const mapStateToProps = (state, props) => {
    return {
        // lm = lab method
        lm: findParticular(state, props)
        
    };
};

export default connect(mapStateToProps)(LabMetInternal);

