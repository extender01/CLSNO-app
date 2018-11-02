import React from 'react';
import { connect } from 'react-redux';

import Generic from './DataComponents/Generic';
import Where from './DataComponents/Where';
import WhenTransport from './DataComponents/WhenTransport';
import Draw from './DataComponents/Draw';

class LabMetExternal extends React.Component {
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

                        <div className='flex-container'>
                            <Draw draw={lm.draw}/>
                        </div>
                        
                        <div className='flex-container'>
                            <Where where={lm.where}/>
                            <WhenTransport where={lm.where} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='PREANALYTICKÁ FÁZE' value={lm.preanal} />
                            <Generic label='OBECNÁ POZNÁMKA' value={lm.note} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='VAŠE POZNÁMKA' value={lm.customNote} />
                        </div>

                        <div className='flex-container'>
                            <Generic label='PROVÁDÍ SE' value={lm.howOften} />
                            <Generic label='ODEZVA' value={lm.response} />
                            <Generic label='METODIKA' value={lm.metodics} />
                            <Generic label='JEDNOTKA' value={lm.unit} />
                            <Generic label='ODBORNOST' value={lm.expertise} />
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

export default connect(mapStateToProps)(LabMetExternal);

