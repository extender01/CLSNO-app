import React from 'react';
import { connect } from 'react-redux';

import LabMetInternal from './LabMetInternal';
import Generic from './DataComponents/Generic';
import Where from './DataComponents/Where';
import WhenTransport from './DataComponents/WhenTransport';
import Draw from './DataComponents/Draw';
import CustomNote from './DataComponents/CustomNote';
import LabMetGeneric from './LabMetGeneric';
import LabMetExternal from './LabMetExternal';

class LabMetDetail extends React.Component {
    constructor(props) {
        super(props);
        
    }

    

    render () {
        //until props are loaded from redux, do not render any test details
        const {lm} = this.props;
        console.log(this.props.location.state);
        
        return (
            <div>
                {!!lm && 
                    <React.Fragment>
                        
                        <LabMetGeneric lm={lm} rights={this.props.rights} />                       
                        
                        {this.props.location.state === 'external' ? (
                            <LabMetExternal lm={lm} rights={this.props.rights} />
                        ) : (
                            <LabMetInternal lm={lm} />
                        )
                        }
                        
                        
                    </React.Fragment>
                }
            </div>
            
        );
    }
}



//function returns single object from array that matches id from req.params - finds data for particular test to display details
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
        lm: findParticular(state, props),
        rights: state.users.user.rights
        
        
    };
};

export default connect(mapStateToProps)(LabMetDetail);

