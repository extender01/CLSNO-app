import React from 'react';
import { connect } from 'react-redux';

import Generic from './DataComponents/Generic';
import Where from './DataComponents/Where';
import WhenTransport from './DataComponents/WhenTransport';
import Draw from './DataComponents/Draw';
import CustomNote from './DataComponents/CustomNote';

export default class LabMetExternal extends React.Component {
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
                            <Generic label='PROVÁDÍ SE' value={lm.howOften} />
                            <Generic label='ODEZVA' value={lm.response} />
                            <Generic label='ODBORNOST' value={lm.expertise} />
                        </div>


                    

                    </div>
                }
            </div>
            
        );
    }
}



