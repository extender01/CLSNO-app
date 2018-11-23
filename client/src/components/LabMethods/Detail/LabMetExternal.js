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
            <React.Fragment>
                {!!lm && 
                    <React.Fragment>
                        
                        {this.props.rights === 'lab' &&
                        <div className='f_stretch'>
                            <Generic label='KDO POSILA' value={lm.parcelWho} classNames='g1 colorParcelInfo' />
                            <Generic label='LAB PREANAL' value={lm.parcelPreanal} classNames='g1 colorParcelInfo'/>
                            <Generic label='LAB POZNAMKA' value={lm.parcelNote} classNames='g1 colorParcelInfo'/>
                        </div>   
                        }          

                        <div className='f_stretch'>
                            <Generic label='PROVÁDÍ SE' value={lm.extHowOften} classNames='g1 colorExtDetails' />
                            <Generic label='ODEZVA' value={lm.extResponse} classNames='g1 colorExtDetails'/>
                            <Generic label='JEDNOTKA' value={lm.unit} classNames='g1 colorExtDetails'/>
                            <Generic label='METODIKA' value={lm.metodics} classNames='g1 colorExtDetails'/>
                        </div>


                    

                    </React.Fragment>
                }
            </React.Fragment>
            
        );
    }
}



